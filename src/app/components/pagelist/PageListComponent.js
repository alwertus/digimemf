import React, { Component} from "react";
// import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import "./PageListComponent.scss";

class PageListComponent extends Component {


    constructor(props) {
        super(props);
        this.onClick_Link = this.onClick_Link.bind(this);
    }

    onClick_Link(val) {
        this.props.history.push('/' + val.target.id);
        window.location.reload();
    }

    render() {
        return <div className="pagelist-wrapper">
                <div className="pagelist-item" id="" onClick={this.onClick_Link}>Главная</div>
                <div className="pagelist-item" id="info" onClick={this.onClick_Link}>Инфо</div>
                <div className="pagelist-item" id="doings" onClick={this.onClick_Link}>Дела</div>
            </div>
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

export default /*connect(mapStateToProps, mapDispatchToProps)*/(withRouter(PageListComponent));