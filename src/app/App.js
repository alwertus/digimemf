import React from "react";
import { Provider } from "react-redux";
import { Switch, Route } from 'react-router-dom';

import PageListComponent from "./components/pagelist/PageListComponent";
import LoginComponent from "./components/login_form/LoginComponent";
import PageHomeComponent from "./components/pages/home/PageHomeComponent";
import PageInfoComponent from "./components/pages/info/PageInfoComponent";
import DebugComponent from "./components/debug/DebugComponent";

import store from "./store/Store";
import './App.scss';

const PAGE_SWITCHER = () => (
    <Switch>
        <Route exact path="/" component={PageHomeComponent}/>
        <Route exact path="/info" component={PageInfoComponent}/>
    </Switch>
);

const HEADER = () => (
    <div className="header">
        <div className="pagelist-container"><PageListComponent/></div>
        <div className="login-container"><LoginComponent/></div>
    </div>
);

export default () => (
    <Provider store={store}>
        <HEADER/>
        {/*<DebugComponent/>*/}
        <div className="page-container">
            <PAGE_SWITCHER/>
        </div>
    </Provider>
);
