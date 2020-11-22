import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import "./OneTaskComponent.scss";
import {setDDCurrentTaskId, setDDShowTaskDetailsDialog} from "../DDActions";

class OneTaskComponent extends Component {

    constructor(props) {
        super(props);
        this.onClick_Link = this.onClick_Link.bind(this);
    }

    onClick_Link() {
        this.props.setDDCurrentTaskId(this.props.taskId);
        this.props.setDDShowTaskDetailsDialog(true);
    }

    render() {
        let args = this.props.params;
        // console.log(this.props.params);
        // let args = {completed : 90};

        return <div className="task" onClick={this.onClick_Link}>
            <div className="icon"><svg width="50" height="50">
                <rect fill="#65e1f7"
                      height="48"
                      id="svg_1"
                      stroke="#000000"
                      strokeWidth="2"
                      width="48"
                      x="1"
                      y="1"/></svg></div>
            <div className="right-part">
                <div className="up-line">
                    <span>{this.props.taskId}</span>
                    <span>{args.type + " - " + args.name + " - " + args.name + " - " + args.name + " - " + args.name}</span>
                    <div className="cost">
                        <div className="cost-1">1</div>
                        <div className="cost-2">2</div>
                    </div>
                </div>
                <div className="progress-bar"><svg width="100%" height="6">
                    <rect fill="#45c372"
                          height="6"
                          id="svg_1"
                          width={args.completed + "%"}/>
                </svg></div>
            </div>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    const dayData = state.ddData.find(e => e.date.getTime() === ownProps.date.getTime());
    const currentTask = dayData.tasks.find(e => e.id === ownProps.taskId);
    return {
        params : currentTask,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDDShowTaskDetailsDialog : (val) => dispatch(setDDShowTaskDetailsDialog(val)),
        setDDCurrentTaskId : (val) => dispatch(setDDCurrentTaskId(val)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OneTaskComponent));