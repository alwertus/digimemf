import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import "./TaskDetailsComponent.scss";
import {setDDCurrentTaskId, setDDShowTaskDetailsDialog} from "../DDActions";
import PlayIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import PauseIcon from '@material-ui/icons/PauseCircleOutlineOutlined';
import CompleteIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import {DOINGS} from "../../../../../store/AppActions";

class TaskDetailsComponent extends Component {

    constructor(props) {
        super(props);

        this.onClick_Link = this.onClick_Link.bind(this);
        /*
        const dayData = state.ddData.find(e => e.date.getTime() === ownProps.date.getTime());
    const currentTask = dayData.tasks.find(e => e.id === ownProps.taskId);
    return {
        params : currentTask,
    };
         */
    }

    componentDidMount() {
        if (this.props.details.execstatus === DOINGS.DAY.TASK_STATUS_VAL.PLAY)
            this.startStopAutoUpdate(true);
    }

    startStopAutoUpdate(val) {
        if (val) {
            this.refresher = setInterval( () => this.forceUpdate(), 1000);
        }
        else
            clearInterval(this.refresher)
    }

    componentWillUnmount() {
        this.startStopAutoUpdate(false);
    }

    onClick_Link(val) {
        if (val.target.className !== "darkscreen") return;
        this.props.setDDShowTaskDetailsDialog(false);
    }
    renderPlay() {
        if (this.props.details.execstatus !== DOINGS.DAY.TASK_STATUS_VAL.PLAY)
        return <IconButton
            color="primary"
            onClick={() => {
                this.setStatus(DOINGS.DAY.TASK_STATUS_VAL.PLAY);
                this.startStopAutoUpdate(true);}}>
            <PlayIcon fontSize="large" />
        </IconButton>
    }
    renderPause() {
        if (this.props.details.execstatus === DOINGS.DAY.TASK_STATUS_VAL.PLAY)
        return <IconButton
            color="default"
            onClick={() => {
                this.setStatus(DOINGS.DAY.TASK_STATUS_VAL.PAUSE);
                this.startStopAutoUpdate(false);
            }}>
            <PauseIcon fontSize="large"/>
        </IconButton>
    }
    renderComplete() {
        if (this.props.details.execstatus === DOINGS.DAY.TASK_STATUS_VAL.PAUSE)
        return <IconButton onClick={() => this.setStatus(DOINGS.DAY.TASK_STATUS_VAL.COMPLETED)}>
            <CompleteIcon fontSize="large"  className="color-green"/>
        </IconButton>
    }

    setStatus(val) {
     /*   let current = Object.assign({}, this.props.details);
        current.execstatus = val;
        this.props.setDDCurrentTaskId(current);*/
    }

    setTimePassed(val) {
        if (!val) return;
        let current = this.getDetailCopy();
        current.timepassed = val.getTime();
        // this.saveDetail(current);
    }

    renderTime() {
        return new Date().toString();
    }

    getDetailCopy() { return Object.assign({}, this.props.details); }
    // saveDetail(newDetail) { this.props.setDDCurrentTaskDetails(newDetail); }

    render() {
        console.log("render");
        return <div className="darkscreen" onClick={this.onClick_Link}>
            <div className="taskdetails">
                <div className="up-line-wrapper">
                    <div className="left">
                        { this.renderPlay() }
                        { this.renderPause() }
                        { this.renderComplete() }
                    </div>
                    <div className="center">
                        { this.renderTime() }
                    </div>
                    <div className="right">
                        <DeleteIcon fontSize="large"/>
                    </div>
                </div>
                <div className="category-wrapper">
                    Category
                </div>
                <div className="list-wrapper">
                    List
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state/*, ownProps*/) => {
    const id = state.ddCurrentTaskId;

    const day = state.ddData.find((e) => {
        return e.tasks.find(e => e.id === id) !== undefined
    });

    const task = (day)
        ? day.tasks.find((e) => e.id === id)
        : {};

    return {
        taskId : state.ddCurrentTaskId,
        details : task,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDDShowTaskDetailsDialog : (val) => dispatch(setDDShowTaskDetailsDialog(val)),
        setDDCurrentTaskId : (val) => dispatch(setDDCurrentTaskId(val)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaskDetailsComponent));