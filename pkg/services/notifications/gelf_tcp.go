package notifications

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
)

type GelfTcp struct {
	GelfServer  string
	GelfTcpPort string
	GelfMessage string
}

var localHttpClient = &http.Client{
	Transport: &http.Transport{Proxy: http.ProxyFromEnvironment},
}

type GraylogGelfHttpMessage struct {
	Version string `json:"version"`
	// Host          string `json:"host"` // Its not mandatory field for graylog gelf http message
	Short_message string `json:"short_message"`
	Level         int    `json:"level"`
	Some_info     string `json:"_some_info"`
}

func (ns *NotificationService) sendGelfTcpRequestSync(ctx context.Context, gelftcp *GelfTcp) error {
	ns.log.Debug("Sending gelf message", gelftcp.GelfMessage, "gelf server", gelftcp.GelfServer, "gelf server port", gelftcp.GelfTcpPort)

	// log.Printf("Original ALERT :::: " + string(gelftcp.GelfMessage))

	httpUrl := "http://" + gelftcp.GelfServer + ":" + gelftcp.GelfTcpPort + "/gelf"
	// method := "POST"

	m := &GraylogGelfHttpMessage{
		Version: "1.1",
		// Host:          "3.211.7.242", // Its not mandatory field for graylog gelf http message
		Short_message: gelftcp.GelfMessage,
		Level:         5,
		Some_info:     "Gelf Alert",
	}
	msgJson, err := json.Marshal(m)
	if err != nil {
		log.Fatal(err)
		return err
	}
	strMsg := string(msgJson)
	fmt.Println("Graylog msg: " + strMsg)

	payload := strings.NewReader(string(msgJson))

	// client := &http.Client{}
	// req, err := http.NewRequest(method, httpUrl, payload)

	// if err != nil {
	// 	fmt.Println(err)
	// 	return err
	// }
	// req.Header.Add("Content-Type", "application/json")

	// res, err := client.Do(req)

	res, err := localHttpClient.Post(httpUrl, "application/json", payload)
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
