import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import IconButton from "@material-ui/core/IconButton";
import TextEditIcon from '@material-ui/icons/AssignmentOutlined';
import {setPgInfoMode} from "./PageInfoControlsActions";
import {PGINFO} from "../../../../../store/AppActions";

import TextEditCancelIcon from '@material-ui/icons/CancelRounded';
import TextEditOKIcon from '@material-ui/icons/CheckCircleRounded';
import {savePageTempData, setPgInfoDataTemp} from "../PageActions";

class PageInfoControlsComponent extends Component {

    constructor(props) {
        super(props);
        this.mode_page = this.mode_page.bind(this);
        this.mode_text = this.mode_text.bind(this);
        this.editPage_Apply = this.editPage_Apply.bind(this);
    }

    mode_page() {
        this.props.setPgInfoDataTemp("");
        this.props.setPgInfoMode(PGINFO.MODE.PAGE);
    }

    mode_text() {
        this.props.setPgInfoDataTemp(this.props.pgInfoHtml);
        this.props.setPgInfoMode(PGINFO.MODE.TEXT);
    }

    editPage_Apply() {
        this.props.savePageTempData();
        this.mode_page();
    }

    renderButtons_TextMode() {
        return <div className="buttons-group">
            <div><IconButton id="btn-mode-page" size="small" onClick={this.mode_page}><TextEditCancelIcon/></IconButton></div>
            <div><IconButton id="btn-mode-page" size="small" onClick={this.editPage_Apply}><TextEditOKIcon/></IconButton></div></div>
    }

    renderButtons_PageMode() {
        return <div className="buttons-group">
            <div><IconButton id="btn-mode-text" size="small" onClick={this.mode_text}><TextEditIcon/></IconButton></div></div>
    }

    renderButtons_None() {
        return <div className="buttons-group"/>
    }

    buttonGroup() {
        if (this.props.pgInfoStatus === PGINFO.STATUS.SUCCESS) {
            return this.props.pgInfoMode === PGINFO.MODE.PAGE
                ? this.renderButtons_PageMode()
                : this.renderButtons_TextMode()
        } else {
            this.mode_page();
            return this.renderButtons_None();
        }
    }

    render() {
        return <div className="control-panel">
            { this.buttonGroup() }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        pgInfoMode: state.pgInfoMode,
        pgInfoHtml: state.pgInfoHtml,
        pgInfoStatus: state.pgInfoStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPgInfoMode: (val) => dispatch(setPgInfoMode(val)),
        setPgInfoDataTemp: (val) => dispatch(setPgInfoDataTemp(val)),
        savePageTempData: () => savePageTempData(),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageInfoControlsComponent));