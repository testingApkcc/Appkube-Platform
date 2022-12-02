package notifications

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/grafana/grafana/pkg/models"
)

// type GelfTcp struct {
// 	GelfServer  string
// 	GelfTcpPort string
// 	GelfMessage string
// }

type Msg struct {
	version       string
	host          string
	short_message string
	level         int64
	_some_info    string
}

func (ns *NotificationService) sendGelfTcpRequestSync(ctx context.Context, gelftcp *models.SendGelfTcpSync) error {
	ns.log.Debug("Sending gelf message", gelftcp.GelfMessage, "gelf server", gelftcp.GelfServer, "gelf server port", gelftcp.GelfTcpPort)
	// gelfTcpURL := gelftcp.GelfServer + ":" + gelftcp.GelfTcpPort
	// gelfWriter, err := gelf.NewTCPWriter(gelfTcpURL)

	// if err != nil {
	// 	ns.log.Error("Cannot connect to GELF server: ", err)
	// 	return err
	// }
	// log.SetOutput(io.MultiWriter(os.Stderr, gelfWriter))
	// log.Printf("ALERT :::: " + string(gelftcp.GelfMessage))

	httpUrl := "http://" + gelftcp.GelfServer + ":" + gelftcp.GelfTcpPort + "/gelf"
	method := "POST"

	// m := Msg{
	// 	version:       "1.1",
	// 	host:          "3.211.7.242",
	// 	short_message: "{'big':'one'}",
	// 	level:         5,
	// 	_some_info:    "Gelf Alert",
	// }

	payload := strings.NewReader(`{` + "" + `    "version": "1.1",` + "" + `    "host": "182.69.97.205",` + "" + `    "short_message": " helo ",` + "" + `    "level": 5,` + "" + `    "_some_info": "Fist gelf http message"` + "" + `}`)

	// requestByte, err := json.Marshal(m)
	// if err != nil {
	// 	log.Fatal(err)
	// 	return err
	// }

	// log.Printf("MSG::::: ", payload)
	// reader := bytes.NewReader(payload)

	client := &http.Client{}
	req, err := http.NewRequest(method, httpUrl, payload)

	if err != nil {
		fmt.Println(err)
		return err
	}
	req.Header.Add("Content-Type", "application/json")

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return err
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return err
	}
	fmt.Println(string(body))

	return nil
}
