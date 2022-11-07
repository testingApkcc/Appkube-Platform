package notifications

import (
	"context"
	"io"
	"log"
	"os"

	"github.com/grafana/grafana/pkg/models"
	"gopkg.in/Graylog2/go-gelf.v2/gelf"
)

// type GelfTcp struct {
// 	GelfServer  string
// 	GelfTcpPort string
// 	GelfMessage string
// }

func (ns *NotificationService) sendGelfTcpRequestSync(ctx context.Context, gelftcp *models.SendGelfTcpSync) error {
	ns.log.Debug("Sending gelf message", gelftcp.GelfMessage, "gelf server", gelftcp.GelfServer, "gelf server port", gelftcp.GelfTcpPort)
	gelfTcpURL := gelftcp.GelfServer + ":" + gelftcp.GelfTcpPort
	gelfWriter, err := gelf.NewTCPWriter(gelfTcpURL)

	if err != nil {
		ns.log.Error("Cannot connect to GELF server: ", err)
		return err
	}
	log.SetOutput(io.MultiWriter(os.Stderr, gelfWriter))
	log.Printf(string(gelftcp.GelfMessage))
	return nil
}
