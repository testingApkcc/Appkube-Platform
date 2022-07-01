import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AccountSetup } from '../../pages/AccountSetup';
import { AmazonServices } from '../../pages/AmazonServices';
import { Environments } from '../../pages/Environments';
import { Kubernetes } from '../../pages/Kubernetes';
import { StorageDetails } from '../../pages/StorageDetails';
import { DepartmentWiseProducts } from '../../pages/DepartmentWiseProducts';
import { DepartmentWiseCharts } from 'pages/DepartmentWiseProducts/departmentChart';
import { ProductWiseServicesSla } from '../../pages/ProductWiseServicesSla';
import { StorageViewDetails } from '../../pages/StorageViewDetails';
import { AddDatasource } from '../../pages/AddDatasource';
import { useNavigation, prefixRoute } from '../../utils/utils.routing';
import { usePluginMeta } from 'utils/utils.plugin';
import { ROUTES } from '../../constants';

export const Routes = () => {
	useNavigation();
	const meta = usePluginMeta();
	if (!(meta && meta.jsonData && meta.jsonData.apiUrl && meta.jsonData.mainProductUrl)) {
		alert('Please set api url in plugin config');
		return <div>Set API Url and Main product url</div>;
	}
	return (
		<Switch>
			<Route
				exact
				path={prefixRoute(ROUTES.Environments)}
				component={(props: any) => <Environments {...props} meta={meta} />}
			/>
			<Route
				exact
				path={prefixRoute(ROUTES.AccountSetup)}
				component={(props: any) => <AccountSetup {...props} meta={meta} />}
			/>
			<Route
				exact
				path={prefixRoute(ROUTES.AmazonServices)}
				component={(props: any) => <AmazonServices {...props} meta={meta} />}
			/>
			<Route
				exact
				path={prefixRoute(ROUTES.Kubernetes)}
				component={(props: any) => <Kubernetes {...props} meta={meta} />}
			/>
			<Route
				exact
				path={prefixRoute(ROUTES.StorageDetails)}
				component={(props: any) => <StorageDetails {...props} meta={meta} />}
			/>
			<Route
				exact
				path={prefixRoute(ROUTES.DepartmentWiseProducts)}
				component={(props: any) => <DepartmentWiseProducts {...props} meta={meta} />}
			/>
			<Route
				exact
				path={prefixRoute(ROUTES.ProductWiseServicesSla)}
				component={(props: any) => <ProductWiseServicesSla {...props} meta={meta} />}
			/>
			<Route
				exact
				path={prefixRoute(ROUTES.DepartmentWiseCharts)}
				component={(props: any) => <DepartmentWiseCharts {...props} meta={meta} />}
			/>
			<Route
				exact
				path={prefixRoute(ROUTES.StorageViewDetails)}
				component={(props: any) => <StorageViewDetails {...props} meta={meta} />}
			/>
			<Route
				exact
				path={prefixRoute(ROUTES.AddDatasource)}
				component={(props: any) => <AddDatasource {...props} meta={meta} />}
			/>
		</Switch>
	);
};
