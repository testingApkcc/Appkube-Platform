package models

import (
	"errors"
	"time"

	"github.com/grafana/grafana/pkg/components/simplejson"
)

var (
	ErrAlertNotificationNotFound                = errors.New("alert notification not found")
	ErrNotificationFrequencyNotFound            = errors.New("notification frequency not specified")
	ErrAlertNotificationStateVersionConflict    = errors.New("alert notification state update version conflict")
	ErrAlertNotificationFailedGenerateUniqueUid = errors.New("failed to generate unique alert notification uid")
	ErrAlertNotificationFailedTranslateUniqueID = errors.New("failed to translate Notification Id to Uid")
	ErrAlertNotificationWithSameNameExists      = errors.New("alert notification with same name already exists")
	ErrAlertNotificationWithSameUIDExists       = errors.New("alert notification with same uid already exists")
)

type AlertNotificationStateType string

var (
	AlertNotificationStatePending   = AlertNotificationStateType("pending")
	AlertNotificationStateCompleted = AlertNotificationStateType("completed")
	AlertNotificationStateUnknown   = AlertNotificationStateType("unknown")
)

type AlertNotification struct {
	Id                    int64             `json:"id"`
	Uid                   string            `json:"-"`
	OrgId                 int64             `json:"-"`
	Name                  string            `json:"name"`
	Type                  string            `json:"type"`
	SendReminder          bool              `json:"sendReminder"`
	DisableResolveMessage bool              `json:"disableResolveMessage"`
	Frequency             time.Duration     `json:"frequency"`
	IsDefault             bool              `json:"isDefault"`
	Settings              *simplejson.Json  `json:"settings"`
	SecureSettings        map[string][]byte `json:"secureSettings"`
	Created               time.Time         `json:"created"`
	Updated               time.Time         `json:"updated"`
}

type CreateAlertNotificationCommand struct {
	Uid                   string            `json:"uid"`
	Name                  string            `json:"name"  binding:"Required"`
	Type                  string            `json:"type"  binding:"Required"`
	SendReminder          bool              `json:"sendReminder"`
	DisableResolveMessage bool              `json:"disableResolveMessage"`
	Frequency             string            `json:"frequency"`
	IsDefault             bool              `json:"isDefault"`
	Settings              *simplejson.Json  `json:"settings"`
	SecureSettings        map[string]string `json:"secureSettings"`

	OrgId                   int64             `json:"-"`
	EncryptedSecureSettings map[string][]byte `json:"-"`

	Result *AlertNotification `json:"-"`
}

type UpdateAlertNotificationCommand struct {
	Id                    int64             `json:"id"  binding:"Required"`
	Uid                   string            `json:"uid"`
	Name                  string            `json:"name"  binding:"Required"`
	Type                  string            `json:"type"  binding:"Required"`
	SendReminder          bool              `json:"sendReminder"`
	DisableResolveMessage bool              `json:"disableResolveMessage"`
	Frequency             string            `json:"frequency"`
	IsDefault             bool              `json:"isDefault"`
	Settings              *simplejson.Json  `json:"settings"  binding:"Required"`
	SecureSettings        map[string]string `json:"secureSettings"`

	OrgId                   int64             `json:"-"`
	EncryptedSecureSettings map[string][]byte `json:"-"`

	Result *AlertNotification `json:"-"`
}

type UpdateAlertNotificationWithUidCommand struct {
	Uid                   string            `json:"-"`
	NewUid                string            `json:"uid"`
	Name                  string            `json:"name"  binding:"Required"`
	Type                  string            `json:"type"  binding:"Required"`
	SendReminder          bool              `json:"sendReminder"`
	DisableResolveMessage bool              `json:"disableResolveMessage"`
	Frequency             string            `json:"frequency"`
	IsDefault             bool              `json:"isDefault"`
	Settings              *simplejson.Json  `json:"settings"  binding:"Required"`
	SecureSettings        map[string]string `json:"secureSettings"`

	OrgId  int64              `json:"-"`
	Result *AlertNotification `json:"-"`
}

type DeleteAlertNotificationCommand struct {
	Id    int64
	OrgId int64
}
type DeleteAlertNotificationWithUidCommand struct {
	Uid   string
	OrgId int64

	DeletedAlertNotificationId int64
}

type GetAlertNotificationUidQuery struct {
	Id    int64
	OrgId int64

	Result string
}

type GetAlertNotificationsQuery struct {
	Name  string
	Id    int64
	OrgId int64

	Result *AlertNotification
}

type GetAlertNotificationsWithUidQuery struct {
	Uid   string
	OrgId int64

	Result *AlertNotification
}

type GetAlertNotificationsWithUidToSendQuery struct {
	Uids  []string
	OrgId int64

	Result []*AlertNotification
}

type GetAllAlertNotificationsQuery struct {
	OrgId int64

	Result []*AlertNotification
}

type AlertNotificationState struct {
	Id                           int64
	OrgId                        int64
	AlertId                      int64
	NotifierId                   int64
	State                        AlertNotificationStateType
	Version                      int64
	UpdatedAt                    int64
	AlertRuleStateUpdatedVersion int64
}

type SetAlertNotificationStateToPendingCommand struct {
	Id                           int64
	AlertRuleStateUpdatedVersion int64
	Version                      int64

	ResultVersion int64
}

type SetAlertNotificationStateToCompleteCommand struct {
	Id      int64
	Version int64
}

type GetOrCreateNotificationStateQuery struct {
	OrgId      int64
	AlertId    int64
	NotifierId int64

	Result *AlertNotificationState
}

type GetAlertNotificationsWithNameQuery struct {
	Name   string
	OrgId  int64
	Result *AlertNotification
}

type CreateXformationAlertNotificationCommand struct {
	Uid                   string            `json:"uid"`
	Name                  string            `json:"name"`
	Type                  string            `json:"type"`
	SendReminder          bool              `json:"sendReminder"`
	DisableResolveMessage bool              `json:"disableResolveMessage"`
	Frequency             string            `json:"frequency"`
	IsDefault             bool              `json:"isDefault"`
	Settings              *simplejson.Json  `json:"settings"`
	SecureSettings        map[string]string `json:"secureSettings"`

	AlertState        string `json:"alert_state"`
	Description       string `json:"description"`
	Client            string `json:"client"`
	Details           string `json:"details"`
	IncidentKey       string `json:"incident_key"`
	Guid              string `json:"guid"`
	ClientUrl         string `json:"client_url"`
	CreatedOn         int64  `json:"created_on"`
	UpdatedOn         int64  `json:"updated_on"`
	FiredTime         string `json:"fired_time"`
	Action            string `json:"action"`
	ActionDescription string `json:"action_description"`
	TicketId          int64  `json:"ticket_id"`
	TicketName        string `json:"ticket_name"`
	TicketUrl         string `json:"ticket_url"`
	TicketDescription string `json:"ticket_description"`
	UserName          string `json:"user_name"`
	EventType         string `json:"event_type"`
	ChangeLog         string `json:"change_log"`

	OrgId  int64 `json:"-"`
	Result *AlertNotification
}
