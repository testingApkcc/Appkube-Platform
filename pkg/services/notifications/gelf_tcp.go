package notifications

import (
	"context"
)

type GelfTcp struct {
	GelfServer  string
	GelfTcpPort string
	GelfMessage string
}

func (ns *NotificationService) sendGelfTcpRequestSync(ctx context.Context, gelftcp *GelfTcp) error {
	ns.log.Debug("Sending gelf message", gelftcp.GelfMessage, "gelf server", gelftcp.GelfServer, "gelf server port", gelftcp.GelfTcpPort)
	// gelfTcpURL := gelftcp.GelfServer + ":" + gelftcp.GelfTcpPort
	// gelfWriter, err := gelf.NewTCPWriter(gelfTcpURL)

	// if err != nil {
	// 	ns.log.Error("Cannot connect to GELF server: ", err)
	// 	return err
	// }
	// log.SetOutput(io.MultiWriter(os.Stderr, gelfWriter))
	//log.Printf(string(gelftcp.GelfMessage))
	return nil
}
