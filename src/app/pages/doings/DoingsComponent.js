import React, { Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./DoingsComponent.scss";
import EventIcon from '@material-ui/icons/Event';
import { setDoingsCategory, setDate } from './DoingsActions';
import DDComponent from "./category/day/DDComponent";
import {DOINGS} from "../../store/AppActions";

/**
 * Страница "Дела"
 */
class DoingsComponent extends Component {

    constructor(props) {
        super(props);
        this.props.setCategory(['G', 'Y', 'M', 'g', 'y', 'm'].indexOf(this.props.match.params.category) < 0
            ? 'D'
            : this.props.match.params.category.toUpperCase());

        this.onCategoryClick = this.onCategoryClick.bind(this);
        this.onCalendarClick = this.onCalendarClick.bind(this);
    }

    onCategoryClick(val) {
        this.props.history.push('/doings/' + val.target.id);
        this.props.setCategory(val.target.id);
    }

    categoryButton(val) {
        return <div className={ "category-" + val + (val === this.props.category ? " active" : "") } id={ val } onClick={this.onCategoryClick}><span>{ val }</span></div>
    }

    onCalendarClick() {
        if (this.props.category==='D')
            this.props.setDate(new Date());
    }

    selectedCategoryPage() {
        switch (this.props.category) {
            case DOINGS.CATEGORY_VAL.GLOBAL: return <div>Global</div>
            case DOINGS.CATEGORY_VAL.YEAR: return <div>Year</div>
            case DOINGS.CATEGORY_VAL.MONTH: return <div>Month</div>
            case DOINGS.CATEGORY_VAL.DAY: return <DDComponent/>
            default: return <div>null</div>
        }
    }

    render() {
        return <div className="doings-wrapper">
            <div className="menu">
                <div className="goto" onClick={this.onCalendarClick}><EventIcon fontSize="large"/></div>
                <div className="category">
                    { this.categoryButton("G") }
                    { this.categoryButton("Y") }
                    { this.categoryButton("M") }
                    { this.categoryButton("D") }
                </div>
            </div>
            <div className="content">{this.selectedCategoryPage()}</div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        category : state.doingsCategory
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCategory : (val) => dispatch(setDoingsCategory(val)),
        setDate : (val) => dispatch(setDate(val)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DoingsComponent));