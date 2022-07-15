package api

import (
	"context"

	"github.com/grafana/grafana/pkg/models"
)

type DatasourcePermissionsService interface {
	FilterDatasourcesBasedOnQueryPermissions(ctx context.Context, cmd *models.DatasourcesPermissionFilterQuery) error
	//  ------Manoj.  custom changes for appcube plateform ------
	FilterDatasourceMasterBasedOnQueryPermissions(ctx context.Context, cmd *models.DatasourceMasterPermissionFilterQuery) error
	//  ------Manoj.  custom changes for appcube plateform ------
}

// dummy method
func (hs *OSSDatasourcePermissionsService) FilterDatasourcesBasedOnQueryPermissions(ctx context.Context, cmd *models.DatasourcesPermissionFilterQuery) error {
	return nil
}

//  ------Manoj.  custom changes for appcube plateform ------
// dummy method
func (hs *OSSDatasourcePermissionsService) FilterDatasourceMasterBasedOnQueryPermissions(ctx context.Context, cmd *models.DatasourceMasterPermissionFilterQuery) error {
	return nil
}

//  ------Manoj.  custom changes for appcube plateform ------

type OSSDatasourcePermissionsService struct{}

func ProvideDatasourcePermissionsService() *OSSDatasourcePermissionsService {
	return &OSSDatasourcePermissionsService{}
}
