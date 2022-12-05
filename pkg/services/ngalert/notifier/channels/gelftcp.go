package channels

import (
	"context"
	"fmt"
	"time"

	"github.com/prometheus/alertmanager/template"
	"github.com/prometheus/alertmanager/types"

	"github.com/grafana/grafana/pkg/components/simplejson"
	"github.com/grafana/grafana/pkg/models"
	"github.com/grafana/grafana/pkg/services/notifications"
)

type GelfTcpNotifier struct {
	*Base
	GelfTcpInputIpAddress string
	GelfTcpInputPort      string
	ns                    notifications.GelfTcpSender
	tmpl                  *template.Template
}

func NewGelfTcpNotifier(model *NotificationChannelConfig, ns notifications.GelfTcpSender, t *template.Template) (*GelfTcpNotifier, error) {
	if model.Settings == nil {
		return nil, receiverInitError{Cfg: *model, Reason: "no settings supplied"}
	}
	ipAddress := model.Settings.Get("gelfTcpInputIpAddress").MustString()
	if ipAddress == "" {
		return nil, receiverInitError{Reason: "could not find gelf tcp server addresses in settings", Cfg: *model}
	}
	port := model.Settings.Get("gelfTcpInputPort").MustString()
	if port == "" {
		return nil, receiverInitError{Reason: "could not find gelf tcp server port in settings", Cfg: *model}
	}
	return &GelfTcpNotifier{
		Base: NewBase(&models.AlertNotification{
			Uid:                   model.UID,
			Name:                  model.Name,
			Type:                  model.Type,
			DisableResolveMessage: model.DisableResolveMessage,
			Settings:              model.Settings,
		}),
		GelfTcpInputIpAddress: ipAddress,
		GelfTcpInputPort:      port,
		ns:                    ns,
		tmpl:                  t,
	}, nil
}

func (gtn *GelfTcpNotifier) Notify(ctx context.Context, as ...*types.Alert) (bool, error) {
	timeNow := time.Now()
	a := gtn.UID
	alertGuid := a + fmt.Sprint(unixMilli(timeNow))

	alertJSON := simplejson.New()
	alertJSON.Set("guid", alertGuid)
	alertJSON.Set("name", gtn.Name)
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

	cmd := &models.SendGelfTcpSync{
		GelfServer:  gtn.GelfTcpInputIpAddress,
		GelfTcpPort: gtn.GelfTcpInputPort,
		GelfMessage: string(alertBody),
	}

	if err := gtn.ns.SendGelfTcpCommand(ctx, cmd); err != nil {
		gtn.log.Error("Failed to send gelf notification", "error", err, "body", string(alertBody))
		return false, err
	}

	return true, nil
}

func (gtn *GelfTcpNotifier) SendResolved() bool {
	return !gtn.GetDisableResolveMessage()
}

func unixMilli(t time.Time) int64 {
	return t.Round(time.Millisecond).UnixNano() / (int64(time.Millisecond) / int64(time.Nanosecond))
}
