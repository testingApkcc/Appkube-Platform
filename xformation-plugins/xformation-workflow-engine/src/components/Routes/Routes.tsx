import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { usePluginMeta } from 'utils/utils.plugin';
import { Dashboard } from '../../pages/Dashboard';
import { ProjectWise } from '../../pages/ProjectWise';
import { ResourceWiseViewAllTasks } from '../../pages/ResourceWiseViewAllTasks';
import { ProcurementDetail } from '../../pages/Procurement';
import { MatrixView } from '../../pages/MatrixView';
import { useNavigation, prefixRoute } from '../../utils/utils.routing';
import { ROUTES } from '../../constants';
import { CreateUsecase } from '../../pages/CreateUsecase';
import { ProjectOverView } from '../../pages/ProjectOverView';
import { AssetOverView } from '../../pages/AssetOverView';

export const Routes = () => {
	useNavigation();
	const meta = usePluginMeta();
	if (!(meta && meta.jsonData && meta.jsonData.accessKey && meta.jsonData.secretKey && meta.jsonData.region)) {
		alert('Please set access key, region, and secret key');
		return <div>Please set access key, region, and secret key</div>;
	}
	return (
		<Switch>
			<Route exact path={prefixRoute(ROUTES.Dashboard)} component={(props: any) => <Dashboard {...props} meta={meta} />} />
			<Route exact path={prefixRoute(ROUTES.ProjectWise)} component={(props: any) => <ProjectWise {...props} meta={meta} />} />
			<Route exact path={prefixRoute(ROUTES.ResourceWiseViewAllTasks)} component={(props: any) => <ResourceWiseViewAllTasks {...props} meta={meta} />} />
			<Route exact path={prefixRoute(ROUTES.ProcurementDetail)} component={(props: any) => <ProcurementDetail {...props} meta={meta} />} />
			<Route exact path={prefixRoute(ROUTES.MatrixView)} component={(props: any) => <MatrixView {...props} meta={meta} />} />
			<Route exact path={prefixRoute(ROUTES.CreateNewUsecase)} component={(props: any) => <CreateUsecase {...props} meta={meta} />} />
			<Route exact path={prefixRoute(ROUTES.ProjectOverView)} component={(props: any) => <ProjectOverView {...props} meta={meta} />} />
			<Route exact path={prefixRoute(ROUTES.AssetOverView)} component={(props: any) => <AssetOverView {...props} meta={meta} />} />
		</Switch>
	);
};
