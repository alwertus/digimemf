import React, { Component} from "react";
// import { connect } from "react-redux";
import {withRouter} from "react-router";

class PageHomeComponent extends Component {
    render() {
        return (
            <div className="content-container">
                <span>Home Page</span>
            </div>
        );
    }
}
/*
const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};*/

export default /*connect(mapStateToProps, mapDispatchToProps)*/(withRouter(PageHomeComponent));