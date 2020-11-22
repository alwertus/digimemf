import React from "react";
import {Provider} from "react-redux";
import {Route, Switch} from 'react-router-dom';

import PageListComponent from "./components/pagelist/PageListComponent";
import LoginComponent from "./components/login_form/LoginComponent";
import PageHomeComponent from "./pages/home/PageHomeComponent";
import PageInfoComponent from "./pages/info/PageInfoComponent";
import DoingsComponent from "./pages/doings/DoingsComponent";
import ChevimaComponent from "./pages/chevima/ChevimaComponent";

import store from "./store/Store";
import './App.scss';

const PAGE_SWITCHER = () => (
    <Switch>
        <Route exact path="/" component={PageHomeComponent}/>
        <Route exact path="/info" component={PageInfoComponent}/>
        <Route exact path="/doings" component={DoingsComponent}/>
        <Route path="/doings/:category" component={DoingsComponent}/>
    </Switch>
);

const HEADER = () => (
    <div className="header">
        <div className="pagelist-container"><PageListComponent/></div>
        <div className="login-container"><LoginComponent/></div>
    </div>
);

const FILLING_M = () => (
    <div className="root-container">
        <ChevimaComponent/>
    </div>
);
const FILLING_NM = () => (
    <div className="root-container">
        <HEADER/>
        <div className="page-container">
            <PAGE_SWITCHER/>
        </div>
    </div>
);
const FILLING = () => (
    <Switch>
        <Route exact path="/chevima" component={FILLING_M}/>
        <Route component={FILLING_NM}/>
    </Switch>
);

const App = () => (
    <Provider store={store}>
        <FILLING/>
    </Provider>
);

export default App;