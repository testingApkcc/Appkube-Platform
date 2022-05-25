import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { ProjectWise } from "../../pages/ProjectWise";
import { ResourceWiseViewAllTasks } from "../../pages/ResourceWiseViewAllTasks";
import { useNavigation, prefixRoute } from "../../utils/utils.routing";
import { ROUTES } from "../../constants";

export const Routes = () => {
  useNavigation();

  return (
    <Switch>
      <Route exact path={prefixRoute(ROUTES.Dashboard)} component={Dashboard} />
      <Route exact path={prefixRoute(ROUTES.ProjectWise)} component={ProjectWise} />
      <Route exact path={prefixRoute(ROUTES.ResourceWiseViewAllTasks)} component={ResourceWiseViewAllTasks} />
    </Switch>
  );
};
