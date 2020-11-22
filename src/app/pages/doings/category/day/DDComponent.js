import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import "./DDComponent.scss";
import OneDayComponent from "./oneday/OneDayComponent";
import {ddUpdateData} from "./DDActions";
import {addDays} from "../../../../common/dateformat";
import TaskDetailsComponent from "./task_details/TaskDetailsComponent";

/**
 * Страница категории => День
 */

class DDComponent extends Component {

    constructor(props) {
        super(props);
        this.onClick_Link = this.onClick_Link.bind(this);
    }

    componentDidMount() {
        ddUpdateData(true);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        ddUpdateData();
    }

    onClick_Link(val) {
    }

    last = 0;

    oneDay = (item) => {
        let dayData = this.props.ddData.find((e) => {
            return e.date.getTime() === item.date.getTime();
        });
        return <OneDayComponent key={this.last++} date={item.date} tasks={dayData}/>
    }

    render() {
        let data = [];
        for (let i = 0; i < 7; i++) {
            data.push({date : addDays(this.props.ddCursor, i)})
        }
        return <div className="dd-wrapper">
            { this.props.ddShowTaskDetailsDialog ? <TaskDetailsComponent/> : null }
            { data.map((item) => (this.oneDay(item))) }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        ddCursor : state.ddCursor,
        ddData: state.ddData,
        ddShowTaskDetailsDialog: state.ddShowTaskDetailsDialog,
    };
};

const mapDispatchToProps = (/*dispatch*/) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DDComponent));