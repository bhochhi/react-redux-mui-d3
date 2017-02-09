import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';

import DashboardPageContainer from './pages/dashboard/DashboardPageContainer';
import Page from './pages/page/Page';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';



import Main from './Main';
const Routes = (
    <Route path="/" component={Main}>
      <IndexRoute component={DashboardPageContainer} />
      <Route path="page" component={Page} />
      <Route path="page1" component={Page1} />  
      <Route path="page2" component={Page2} />     
         
    </Route>
);

export default Routes;
