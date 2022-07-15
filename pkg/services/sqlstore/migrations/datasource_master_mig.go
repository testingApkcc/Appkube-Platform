package migrations

import . "github.com/grafana/grafana/pkg/services/sqlstore/migrator"

func addDataSourceMasterMigration(mg *Migrator) {
	var tableV1 = Table{
		Name: "data_source_master",
		Columns: []*Column{
			{Name: "id", Type: DB_BigInt, IsPrimaryKey: true, IsAutoIncrement: true},
			{Name: "json_data", Type: DB_Text, Nullable: false},
			{Name: "cloud_type", Type: DB_NVarchar, Length: 100, Nullable: false},
		},
	}

	mg.AddMigration("create data_source_master table", NewAddTableMigration(tableV1))
	// mg.AddMigration("add index data_source_master.id", NewAddIndexMigration(tableV1, tableV1.Indices[0]))
}
