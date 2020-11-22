import React, { Component} from "react";
import {withRouter} from "react-router";
import {TmplComp} from "../../components/tmpl_func/TmplComp";
import "./PageHomeComponent.scss";

class PageHomeComponent extends Component {

    render() {
        return (
            <div className="home-wrapper">
                <ul>
                    <li>Логин: user</li>
                    <li>Пароль: user123</li>
                </ul>
                <TmplComp className="tmp"/>
            </div>
        );
    }
}

export default (withRouter(PageHomeComponent));