/*
import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import { setDebugMode } from "./DebugActions";
import "./DebugComponent.scss";

class DebugComponent extends Component {


    constructor(props) {
        super(props);
        this.onClick_Link = this.onClick_Link.bind(this);
    }

    onClick_Link(val) {
        console.log(val.target.checked);
        this.props.debug(val.target.checked);
        window.location.reload();
    }

    render() {
        return <div>
            <label>
                debug mode
                <input type="checkbox" name="isDebugCB" onChange={this.onClick_Link} defaultChecked={this.props.isDebug === 'true'}/>
            </label>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        isDebug: state.isDebug
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        debug : (val) => dispatch(setDebugMode(val))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DebugComponent));*/
