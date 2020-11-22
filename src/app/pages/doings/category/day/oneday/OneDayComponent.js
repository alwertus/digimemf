import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import "./OneDayComponent.scss";
import {setDDCursor} from "../DDActions";
import OneTaskComponent from "../onetask/OneTaskComponent";
import {DOINGS} from "../../../../../store/AppActions";

class OneDayComponent extends Component {

    date;
    tasks = [];

    constructor(props) {
        super(props);

        this.date = props.date;
        if (props.tasks && props.tasks.tasks)
            this.tasks = props.tasks.tasks;

        this.onClick_Link = this.onClick_Link.bind(this);
        this.onTitleScroll = this.onTitleScroll.bind(this);
    }

    onClick_Link(val) {
    }

    getWeekDay() {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
        return days[this.date.getDay()];
    }
    getMonth() {
        let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return months[this.date.getMonth()];
    }

    onTitleScroll(e) {
        this.props.setDDCursor(e.deltaY);
    }

    isHolidayClassName() {
        if (this.date.getDay() === 0 || this.date.getDay() === 6)
            return "holiday";
    }

    last = 0;

    renderTask(e, checkCompleted) {
        if ((checkCompleted && e.completed !== 100) || (!checkCompleted && (e.completed === 100 || e.execstatus === DOINGS.DAY.TASK_STATUS_VAL.COMPLETED)))
            return <OneTaskComponent key={this.last++} taskId={e.id} date={this.date}/>
    }

    render() {
        return <div className="oneday">
            <div className={"date " + this.isHolidayClassName()} onWheel={this.onTitleScroll}>
                <div>{`${this.date.getDate()} ${this.getMonth()} ${this.date.getFullYear()}`}</div>
                <div>{this.getWeekDay()}</div>
            </div>
            <div className="task-list">
                <div className="task-list-notcompleted">
                    {this.tasks.map((e) => this.renderTask(e, true))}
                </div>
                <div className="task-list-completed">
                    {this.tasks.map((e) => this.renderTask(e, false))}
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        ddData: state.ddData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDDCursor: (val) => dispatch(setDDCursor(val))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OneDayComponent));