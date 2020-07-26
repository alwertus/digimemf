import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import "./PageInfoComponent.scss";

import TreeControlsComponent from "./tree/controls/TreeControlsComponent";
import TreeComponent from "./tree/TreeComponent";

import PageComponent from "./page/PageComponent";
import {LOGIN} from "../../../store/AppActions";

class PageInfoComponent extends Component {
    render() {
        if (this.props.loginStatus !== LOGIN.STATUS.SUCCESS)
            return <div>Login required</div>;

        return (
            <div className="info-wrapper">
                <div>
                    <TreeControlsComponent/>
                    <TreeComponent/>
                </div>
                <PageComponent/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageInfoComponent));