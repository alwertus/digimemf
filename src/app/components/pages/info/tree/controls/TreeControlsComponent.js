import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import "./TreeControlsComponent.scss";
import IconButton from '@material-ui/core/IconButton';

import SelectNoneIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import AddIcon from '@material-ui/icons/ControlPointRounded';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/EditRounded';
import TextField from '@material-ui/core/TextField';
import OkIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import CancelIcon from '@material-ui/icons/BlockOutlined';
import {setSelectedItem} from "../TreeActions";
import {deleteTreeItem, newTreeItem, setNewItemTitle, setShowAddPopup} from "./TreeControlsActions";
import {setDialogIsOpen} from "../../../../confirm_dialog/ConfirmDialogActions";
import ConfirmDialogComponent from "../../../../confirm_dialog/ConfirmDialogComponent";

class TreeControlsComponent extends Component {

    constructor(props) {
        super(props);
        this.onSelectNoneClick = this.onSelectNoneClick.bind(this);
        this.onAddItemClick = this.onAddItemClick.bind(this);
        this.onTitleTextChange = this.onTitleTextChange.bind(this);
        this.onAddItemClick_Cancel = this.onAddItemClick_Cancel.bind(this);
        this.onAddItemClick_OK = this.onAddItemClick_OK.bind(this);
        this.onDeleteItemClick = this.onDeleteItemClick.bind(this);

        this.confirmDialog_OK = this.confirmDialog_OK.bind(this);
        this.confirmDialog_Cancel = this.confirmDialog_Cancel.bind(this);
    }

    onSelectNoneClick() { this.props.setSelectedItem(""); }

    onTitleTextChange(event) { this.props.setNewItemTitle(event.target.value); }

    // new record - show dialog
    onAddItemClick() {
        this.props.setNewItemTitle("");
        this.props.setShowAddPopup(true);
    }

    // cancel "new record"
    onAddItemClick_Cancel() { this.props.setShowAddPopup(false); }

    // add new record
    onAddItemClick_OK() {
        if (this.props.newItemTitle === "") return;
        this.props.newTreeItem();
    }

    // onClick button "delete"
    onDeleteItemClick() {
        this.props.setDialogIsOpen(true);
    }

    // result confirm dialog = OK
    confirmDialog_OK() {
        this.props.setDialogIsOpen(false);
        this.props.deleteTreeItem();
    }

    // result confirm dialog = Cancel
    confirmDialog_Cancel() {
        this.props.setDialogIsOpen(false);
    }

    render() {
        return <div className="control-panel">

            <ConfirmDialogComponent
                title="Подтверждение"
                text={"Вы точно хотите удалить выбранную запись?" }
                handleOK={this.confirmDialog_OK}
                handleCancel={this.confirmDialog_Cancel}
            />

            <div className="buttons-group">
                <div><IconButton size="small" onClick={ this.onSelectNoneClick }><SelectNoneIcon/></IconButton></div>
                {   this.props.isShowAddPopup
                    ? null
                    : <div><IconButton size="small" onClick={ this.onAddItemClick }><AddIcon/></IconButton></div>
                }
                <div><IconButton size="small"><EditIcon/></IconButton></div>
                <div><IconButton size="small" onClick={ this.onDeleteItemClick }><DeleteIcon/></IconButton></div>
            </div>
            <div className="panel-secondary">
                {   !this.props.isShowAddPopup
                    ? null
                    : <div className="panel-add">
                        <div><IconButton size="small" onClick={ this.onAddItemClick_Cancel }><CancelIcon/></IconButton></div>
                        <TextField
                            id="outlined-basic"
                            label="Заголовок"
                            variant="outlined"
                            size="small"
                            onChange={ this.onTitleTextChange }
                        />
                        <div><IconButton size="small" onClick={ this.onAddItemClick_OK }><OkIcon/></IconButton></div>
                    </div>
                }
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        isShowAddPopup: state.treeShowAddPopup,
        newItemTitle: state.treeNewItemTitle,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedItem: (val) => dispatch(setSelectedItem(val)),
        setShowAddPopup: (val) => dispatch(setShowAddPopup(val)),
        setNewItemTitle: (val) => dispatch(setNewItemTitle(val)),
        setDialogIsOpen: (val) => dispatch(setDialogIsOpen(val)),
        newTreeItem: () => newTreeItem(),
        deleteTreeItem: () => deleteTreeItem(),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TreeControlsComponent));