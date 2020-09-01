import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import "./PageComponent.scss";
import "./CustomInfoStyle.scss";
import PageInfoControlsComponent from "./controls/PageInfoControlsComponent";
import {LOGIN, PGINFO} from "../../../../store/AppActions";
import {setPgInfoDataTemp, updatePageData} from "./PageActions";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-kuroir";


class PageComponent extends Component {

    constructor(props) {
        super(props);
        this.onPageChange = this.onPageChange.bind(this);
    }

    onPageChange(e) {
        this.props.setPgInfoDataTemp(e);
    }

    UpdatedPage() {
        if (this.props.pgInfoStatus === PGINFO.STATUS.NONAME
            && this.props.loginStatus === LOGIN.STATUS.SUCCESS) {
            this.props.updatePageData();
        }
        switch (this.props.pgInfoStatus) {
        case PGINFO.STATUS.SUCCESS:
            return this.PageMode();
        case PGINFO.STATUS.LOADING:
            return <div>Загрузка...</div>
        case PGINFO.STATUS.ERROR:
            return <div>Страница отсустствует</div>
        default:
            return <div>Непонятная ошибка (STATUS={this.props.pgInfoStatus})</div>
        }
    }

    PageMode() {
        switch (this.props.pgInfoMode) {
            case PGINFO.MODE.PAGE:
                return <div className="content" dangerouslySetInnerHTML={{__html: this.props.pgInfoHtml}} />
            case PGINFO.MODE.TEXT:
                return <div className="content">
                    <AceEditor
                        defaultValue={this.props.pgInfoHtmlTemp}
                        mode="html"
                        theme="kuroir"
                        onChange={this.onPageChange}
                        name="textarea"
                        editorProps={{ $blockScrolling: true }}
                    />
                </div>
            default:
                return <div>Error Status</div>
        }
    }

    render() {
        return <div className="infopage">
            <PageInfoControlsComponent/>
                { this.UpdatedPage() }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        pgInfoHtml: state.pgInfoHtml,
        pgInfoHtmlTemp: state.pgInfoHtmlTemp,
        pgInfoStatus: state.pgInfoStatus,
        pgInfoMode: state.pgInfoMode,
        pageId: state.treeSelectedItem,
        loginStatus: state.loginStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePageData: () => updatePageData(),
        setPgInfoDataTemp: (val) => dispatch(setPgInfoDataTemp(val)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageComponent));