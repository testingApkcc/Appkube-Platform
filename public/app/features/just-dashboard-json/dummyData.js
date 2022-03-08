export const data = {
    "dashboard": {
        "Id": 0,
        "Uid": "U-MdwnVnk",
        "Slug": "AWS_VPC_Test_CloudWatch",
        "OrgId": 0,
        "GnetId": 0,
        "Version": 0,
        "PluginId": "",
        "Created": "0001-01-01T00:00:00Z",
        "Updated": "0001-01-01T00:00:00Z",
        "UpdatedBy": 0,
        "CreatedBy": 0,
        "FolderId": 0,
        "IsFolder": false,
        "HasAcl": false,
        "Title": "AWS_VPC_Test_CloudWatch",
        "Data": {
            "annotations": {
                "list": [
                    {
                        "builtIn": 1,
                        "datasource": "-- Grafana --",
                        "enable": true,
                        "hide": true,
                        "iconColor": "rgba(0, 211, 255, 1)",
                        "name": "Annotations & Alerts",
                        "type": "dashboard"
                    }
                ]
            },
            "editable": true,
            "gnetId": null,
            "graphTooltip": 0,
            "id": 1,
            "links": [],
            "panels": [
                {
                    "aliasColors": {},
                    "bars": true,
                    "dashLength": 10,
                    "dashes": false,
                    "datasource": "Test_CloudWatch",
                    "description": "This dashboard source is stored at AWS S3 bucket",
                    "fieldConfig": {
                        "defaults": {
                            "custom": {}
                        },
                        "overrides": []
                    },
                    "fill": 1,
                    "fillGradient": 0,
                    "gridPos": {
                        "h": 9,
                        "w": 12,
                        "x": 0,
                        "y": 0
                    },
                    "hiddenSeries": false,
                    "id": 2,
                    "legend": {
                        "avg": false,
                        "current": false,
                        "max": false,
                        "min": false,
                        "show": true,
                        "total": false,
                        "values": false
                    },
                    "lines": true,
                    "linewidth": 1,
                    "nullPointMode": "null",
                    "options": {
                        "alertThreshold": true
                    },
                    "percentage": false,
                    "pluginVersion": "5.0.0",
                    "pointradius": 2,
                    "points": false,
                    "renderer": "flot",
                    "seriesOverrides": [],
                    "spaceLength": 10,
                    "stack": false,
                    "steppedLine": false,
                    "thresholds": [],
                    "timeFrom": null,
                    "timeRegions": [],
                    "timeShift": null,
                    "title": "Dashboard on AWS S3",
                    "tooltip": {
                        "shared": true,
                        "sort": 0,
                        "value_type": "individual"
                    },
                    "type": "graph",
                    "xaxis": {
                        "buckets": null,
                        "mode": "time",
                        "name": null,
                        "show": true,
                        "values": []
                    },
                    "yaxes": [
                        {
                            "format": "short",
                            "label": null,
                            "logBase": 1,
                            "max": null,
                            "min": null,
                            "show": true
                        },
                        {
                            "format": "short",
                            "label": null,
                            "logBase": 1,
                            "max": null,
                            "min": null,
                            "show": true
                        }
                    ],
                    "yaxis": {
                        "align": false,
                        "alignLevel": null
                    }
                }
            ],
            "schemaVersion": 26,
            "slug": "AWS_VPC_Test_CloudWatch",
            "style": "dark",
            "tags": [],
            "templating": {
                "list": []
            },
            "time": {
                "from": "now-6h",
                "to": "now"
            },
            "timepicker": {
                "refresh_intervals": [
                    "5s",
                    "10s",
                    "30s",
                    "1m",
                    "5m",
                    "15m",
                    "30m",
                    "1h",
                    "2h",
                    "1d"
                ]
            },
            "timezone": "",
            "title": "AWS_VPC_Test_CloudWatch",
            "uid": "U-MdwnVnk",
            "version": 3
        },
        "Uuid": "",
        "SourceJsonRef": "",
        "InputSourceId": "Test_CloudWatch",
        "AccountId": "1234",
        "TenantId": "78",
        "IsCloud": true,
        "CloudName": "AWS",
        "ElementType": "VPC",
        "FileName": "test_ds.json",
        "InputType": "Performance"
    }
}