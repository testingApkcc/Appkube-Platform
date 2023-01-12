package notifications

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"

	"golang.org/x/net/context/ctxhttp"
)

type GelfTcp struct {
	GelfServer  string
	GelfTcpPort string
	GelfMessage string

	Url         string
	User        string
	Password    string
	Body        string
	HttpMethod  string
	HttpHeader  map[string]string
	ContentType string
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
	// ns.log.Debug("Sending webhook", "url", gelftcp.Url, "http method", gelftcp.HttpMethod)

	if gelftcp.HttpMethod == "" {
		gelftcp.HttpMethod = http.MethodPost
	}

	if gelftcp.HttpMethod != http.MethodPost && gelftcp.HttpMethod != http.MethodPut {
		return fmt.Errorf("gelf only supports HTTP methods POST")
	}
	gelftcp.Url = "http://" + gelftcp.GelfServer + ":" + gelftcp.GelfTcpPort + "/gelf"
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
	gelftcp.Body = string(msgJson)

	request, err := http.NewRequest(gelftcp.HttpMethod, gelftcp.Url, bytes.NewReader([]byte(gelftcp.Body)))
	if err != nil {
		return err
	}

	if gelftcp.ContentType == "" {
		gelftcp.ContentType = "application/json"
	}

	request.Header.Set("Content-Type", gelftcp.ContentType)
	// request.Header.Set("User-Agent", "Grafana")

	// if gelftcp.User != "" && gelftcp.Password != "" {
	// 	request.Header.Set("Authorization", util.GetBasicAuthHeader(webhook.User, webhook.Password))
	// }

	for k, v := range gelftcp.HttpHeader {
		request.Header.Set(k, v)
	}

	resp, err := ctxhttp.Do(ctx, netClient, request)
	if err != nil {
		return err
	}
	defer func() {
		if err := resp.Body.Close(); err != nil {
			ns.log.Warn("Failed to close response body", "err", err)
		}
	}()

	if resp.StatusCode/100 == 2 {
		ns.log.Debug("Gelf succeeded", "url", gelftcp.Url, "statuscode", resp.Status)
		// flushing the body enables the transport to reuse the same connection
		if _, err := io.Copy(ioutil.Discard, resp.Body); err != nil {
			ns.log.Error("Failed to copy resp.Body to ioutil.Discard", "err", err)
		}
		return nil
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return err
	}

	ns.log.Debug("Gelf failed", "url", gelftcp.Url, "statuscode", resp.Status, "body", string(body))
	return fmt.Errorf("Gelf response status %v", resp.Status)
}

///
// func (ns *NotificationService) sendGelfTcpRequestSync(ctx context.Context, gelftcp *GelfTcp) error {
// 	ns.log.Debug("Sending gelf message", gelftcp.GelfMessage, "gelf server", gelftcp.GelfServer, "gelf server port", gelftcp.GelfTcpPort)

// 	// log.Printf("Original ALERT :::: " + string(gelftcp.GelfMessage))

// 	httpUrl := "http://" + gelftcp.GelfServer + ":" + gelftcp.GelfTcpPort + "/gelf"
// 	// method := "POST"

// 	m := &GraylogGelfHttpMessage{
// 		Version: "1.1",
// 		// Host:          "3.211.7.242", // Its not mandatory field for graylog gelf http message
// 		Short_message: gelftcp.GelfMessage,
// 		Level:         5,
// 		Some_info:     "Gelf Alert",
// 	}
// 	msgJson, err := json.Marshal(m)
// 	if err != nil {
// 		log.Fatal(err)
// 		return err
// 	}
// 	strMsg := string(msgJson)
// 	fmt.Println("Graylog msg: " + strMsg)

// 	payload := strings.NewReader(string(msgJson))

// 	// client := &http.Client{}
// 	// req, err := http.NewRequest(method, httpUrl, payload)

// 	// if err != nil {
// 	// 	fmt.Println(err)
// 	// 	return err
// 	// }
// 	// req.Header.Add("Content-Type", "application/json")

// 	// res, err := client.Do(req)

// 	res, err := localHttpClient.Post(httpUrl, "application/json", payload)
// 	if err != nil {
// 		fmt.Println(err)
// 		return err
// 	}
// 	defer res.Body.Close()

// 	body, err := ioutil.ReadAll(res.Body)
// 	if err != nil {
// 		fmt.Println(err)
// 		return err
// 	}
// 	fmt.Println(string(body))

// 	return nil
// }
