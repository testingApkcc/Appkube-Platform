package notifiers

import (
	"io"
	"log"
	"net"
	"os"
	"strconv"
	"strings"
	"time"

	"fmt"

	"github.com/grafana/grafana/pkg/components/simplejson"
	"gopkg.in/Graylog2/go-gelf.v2/gelf"

	//"github.com/grafana/grafana/pkg/infra/log"
	"github.com/grafana/grafana/pkg/models"
	"github.com/grafana/grafana/pkg/services/alerting"
	"github.com/grafana/grafana/pkg/services/notifications"
	//"flag"
)

func init() {
	alerting.RegisterNotifier(&alerting.NotifierPlugin{
		Type:        "gelf",
		Name:        "GELF",
		Description: "Send alerts as GELF TCP messages to GELF server",
		Heading:     "GELF settings",
		Factory:     NewGelfTcpNotifier,
		Options: []alerting.NotifierOption{
			{
				Label:        "IP Address",
				Element:      alerting.ElementTypeInput,
				InputType:    alerting.InputTypeText,
				Placeholder:  "127.0.0.1",
				PropertyName: "gelfTcpInputIpAddress",
				Required:     true,
			},
			{
				Label:        "Port No",
				Element:      alerting.ElementTypeInput,
				InputType:    alerting.InputTypeText,
				Placeholder:  "12201",
				PropertyName: "gelfTcpInputPort",
				Required:     true,
			},
		},
	})
}

// NewGelfTcpNotifier is the constructor function for the GELF TCP notifier.
func NewGelfTcpNotifier(model *models.AlertNotification, _ alerting.GetDecryptedValueFn, ns notifications.Service) (alerting.Notifier, error) {
	ipAddress := model.Settings.Get("gelfTcpInputIpAddress").MustString()
	if ipAddress == "" {
		return nil, alerting.ValidationError{Reason: "Could not find GELF TCP input IP address property in settings"}
	}
	port := model.Settings.Get("gelfTcpInputPort").MustString()
	if port == "" {
		return nil, alerting.ValidationError{Reason: "Could not find GELF TCP input port property in settings"}
	}

	return &GelfTcpNotifier{
		NotifierBase:          NewNotifierBase(model, ns),
		GelfTcpInputIpAddress: ipAddress,
		GelfTcpInputPort:      port,
		// log:                   log.Logger{},
	}, nil
}

// GelfTcpNotifier is responsible for sending alert notifications to xformation-alertmanager-service
type GelfTcpNotifier struct {
	NotifierBase
	GelfTcpInputIpAddress string
	GelfTcpInputPort      string
	// log                   log.Logger
}

// Notify sends the alert notification to GELF TCP input of xformation-alertmanager-service
func (gtn *GelfTcpNotifier) Notify(evalContext *alerting.EvalContext) error {

	customData := triggMetrString
	for _, evt := range evalContext.EvalMatches {
		customData += fmt.Sprintf("%s: %v\n", evt.Metric, evt.Value)
	}

	bodyJSON := simplejson.New()
	bodyJSON.Set("name", evalContext.Rule.Name)
	bodyJSON.Set("alert_state", "New")
	bodyJSON.Set("description", evalContext.Rule.Name+" - "+evalContext.Rule.Message)
	bodyJSON.Set("client", "Grafana")
	bodyJSON.Set("details", customData)
	bodyJSON.Set("incident_key", "alertId-"+strconv.FormatInt(evalContext.Rule.ID, 10))
	tags := evalContext.Rule.AlertRuleTags
	if tags != nil {
		for _, tag := range tags {
			bodyJSON.Set(tag.Key, tag.Value)
		}
	}
	a, _ := evalContext.GetDashboardUID()
	alertGuid := a.Uid + fmt.Sprint(unixMilli(time.Now()))
	bodyJSON.Set("guid", alertGuid)
	ruleURL, err := evalContext.GetRuleURL()
	if err != nil {
		//gtn.log.Error("Failed get rule link", "error", err)
		return err
	}
	ipAddress := GetLocalIP()
	ruleURL = strings.Replace(ruleURL, "localhost", ipAddress, -1)
	//fmt.Println("client URL: ", ruleURL)
	bodyJSON.Set("client_url", ruleURL+"&removeOptions=1")
	timeNow := time.Now()
	bodyJSON.Set("created_on", unixMilli(timeNow))
	bodyJSON.Set("updated_on", unixMilli(timeNow))
	bodyJSON.Set("fired_time", fmt.Sprint(timeNow.Format("2006-01-02 15:04:05")))
	//
	if gtn.NeedsImage() && evalContext.ImagePublicURL != "" {
		contexts := make([]interface{}, 1)
		imageJSON := simplejson.New()
		imageJSON.Set("type", "image")
		imageJSON.Set("src", evalContext.ImagePublicURL)
		contexts[0] = imageJSON
		bodyJSON.Set("contexts", contexts)
	}

	body, _ := bodyJSON.MarshalJSON()
	// gelfTcpURL := gtn.GelfTcpInputIpAddress + ":" + gtn.GelfTcpInputPort
	// gelfWriter, err := gelf.NewTCPWriter(gelfTcpURL)
	// if err != nil {
	// 	gtn.log.Error("Cannot connect to GELF TCP server: %s", err)
	// 	return err
	// }
	// log.SetOutput(io.MultiWriter(os.Stderr, gelfWriter))
	// log.Printf(string(body))

	cmdNewAlert := &models.SendGelfTcpSync{
		GelfServer:  gtn.GelfTcpInputIpAddress,
		GelfTcpPort: gtn.GelfTcpInputPort,
		GelfMessage: string(body),
	}

	if err := gtn.NotificationService.SendGelfTcpSync(evalContext.Ctx, cmdNewAlert); err != nil {
		gtn.log.Error("Failed to send new alert gelf notification", "error", err, "body", string(body))
		return err
	}

	// sendAlertActivityToGelfTcp(alertGuid, timeNow, gtn, evalContext)

	alertJSON := simplejson.New()
	alertJSON.Set("guid", alertGuid)
	alertJSON.Set("name", evalContext.Rule.Name)
	alertJSON.Set("action", "New alert")
	alertJSON.Set("action_description", "New alert sent from grafana")
	alertJSON.Set("created_on", unixMilli(timeNow))
	alertJSON.Set("updated_on", unixMilli(timeNow))
	alertJSON.Set("alert_state", "New")
	alertJSON.Set("ticket_id", 0)
	alertJSON.Set("ticket_name", "")
	alertJSON.Set("ticket_url", "")
	alertJSON.Set("ticket_description", "")
	alertJSON.Set("user_name", "Automated")
	alertJSON.Set("event_type", "Insert")
	alertJSON.Set("change_log", "")
	alertJSON.Set("fired_time", fmt.Sprint(timeNow.Format("2006-01-02 15:04:05"))) //fmt.Sprint(timeNow))

	alertBody, _ := alertJSON.MarshalJSON()
	//gelfTcpURL := gtn.GelfTcpInputIpAddress + ":" + "12202"
	// gelfTcpURL := setting.AlertActivityGelfServer + ":" + setting.AlertActivityInputPort

	// gelfWriter, err := gelf.NewTCPWriter(gelfTcpURL)
	// if err != nil {
	// 	gtn.log.Error("Cannot connect to GELF TCP Alert activity server: ", err)
	// 	return err
	// }
	// log.SetOutput(io.MultiWriter(os.Stderr, gelfWriter))
	// log.Printf(string(alertBody))

	cmd := &models.SendGelfTcpSync{
		GelfServer:  gtn.GelfTcpInputIpAddress,
		GelfTcpPort: gtn.GelfTcpInputPort,
		GelfMessage: string(alertBody),
	}

	if err := gtn.NotificationService.SendGelfTcpSync(evalContext.Ctx, cmd); err != nil {
		gtn.log.Error("Failed to send alert activity gelf notification ", "error", err, "body", string(body))
		return err
	}

	return nil
}

func sendAlertActivityToGelfTcp(alertGuid string, timeNow time.Time, gtn *GelfTcpNotifier, evalContext *alerting.EvalContext) error {
	bodyJSON := simplejson.New()
	bodyJSON.Set("guid", alertGuid)
	bodyJSON.Set("name", evalContext.Rule.Name)
	bodyJSON.Set("action", "New alert")
	bodyJSON.Set("action_description", "New alert sent from grafana")
	bodyJSON.Set("created_on", unixMilli(timeNow))
	bodyJSON.Set("updated_on", unixMilli(timeNow))
	bodyJSON.Set("alert_state", "New")
	bodyJSON.Set("ticket_id", 0)
	bodyJSON.Set("ticket_name", "")
	bodyJSON.Set("ticket_url", "")
	bodyJSON.Set("ticket_description", "")
	bodyJSON.Set("user_name", "Automated")
	bodyJSON.Set("event_type", "Insert")
	bodyJSON.Set("change_log", "")
	bodyJSON.Set("fired_time", fmt.Sprint(timeNow.Format("2006-01-02 15:04:05"))) //fmt.Sprint(timeNow))

	body, _ := bodyJSON.MarshalJSON()
	gelfTcpURL := gtn.GelfTcpInputIpAddress + ":" + "12202"
	// gelfTcpURL := setting.AlertActivityGelfServer + ":" + setting.AlertActivityInputPort

	gelfWriter, err := gelf.NewTCPWriter(gelfTcpURL)
	if err != nil {
		gtn.log.Error("Cannot connect to GELF TCP Alert activity server: ", err)
		return err
	}
	log.SetOutput(io.MultiWriter(os.Stderr, gelfWriter))
	log.Printf(string(body))

	return nil
}

func GetLocalIP() string {
	addrs, err := net.InterfaceAddrs()
	if err != nil {
		return ""
	}
	for _, address := range addrs {
		// check the address type and if it is not a loopback the display it
		if ipnet, ok := address.(*net.IPNet); ok && !ipnet.IP.IsLoopback() {
			if ipnet.IP.To4() != nil {
				return ipnet.IP.String()
			}
		}
	}
	return ""
}

func unixMilli(t time.Time) int64 {
	return t.Round(time.Millisecond).UnixNano() / (int64(time.Millisecond) / int64(time.Nanosecond))
}
