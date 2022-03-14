import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Catalog } from './Catalog';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/catalog`} component={Catalog} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('performance-main-container')
    );
  }, 100);
}