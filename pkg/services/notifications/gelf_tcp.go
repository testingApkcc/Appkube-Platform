package notifications

import (
	"context"

	"gopkg.in/Graylog2/go-gelf.v2/gelf"
)

type GelfTcp struct {
	GelfServer  string
	GelfTcpPort string
	GelfMessage string
}

func (ns *NotificationService) sendGelfTcpRequestSync(ctx context.Context, gelftcp *GelfTcp) error {
	ns.log.Debug("Sending gelf message", gelftcp.GelfMessage, "gelf server", gelftcp.GelfServer, "gelf server port", gelftcp.GelfTcpPort)
	gelfTcpURL := gelftcp.GelfServer + ":" + gelftcp.GelfTcpPort
	_, err := gelf.NewTCPWriter(gelfTcpURL)

	if err != nil {
		ns.log.Error("Cannot connect to GELF server: ", err)
		return err
	}
	//log.SetOutput(io.MultiWriter(os.Stderr, gelfWriter))
	//log.Printf(string(gelftcp.GelfMessage))
	return nil
}
