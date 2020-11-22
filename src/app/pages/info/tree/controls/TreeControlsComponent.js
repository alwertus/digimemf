import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import "./TreeControlsComponent.scss";

import SelectNoneIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import AddIcon from '@material-ui/icons/ControlPointRounded';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/EditRounded';
import TextField from '@material-ui/core/TextField';
import OkIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import CancelIcon from '@material-ui/icons/BlockOutlined';
import MoveToIcon from '@material-ui/icons/SubdirectoryArrowLeftRounded';
import {setSelectedItem} from "../TreeActions";
import {
    deleteTreeItem,
    editTreeItem_Title,
    getElementById,
    newTreeItem,
    saveTreeEditRecordId,
    setNewItemTitle,
    setTreeControlsMode,
    editTreeItem_ParentId
} from "./TreeControlsActions";
import {setDialogIsOpen} from "../../../../components/confirm_dialog/ConfirmDialogActions";
import ConfirmDialogComponent from "../../../../components/confirm_dialog/ConfirmDialogComponent";
import {TREE} from "../../../../store/AppActions";
import ControlButton from "../../../../components/buttons/ControlButton";

class TreeControlsComponent extends Component {


    constructor(props) {
        super(props);
        this.onClick_Select_None = this.onClick_Select_None.bind(this);
        this.onClick_AddItem = this.onClick_AddItem.bind(this);
        this.onClick_EditItem = this.onClick_EditItem.bind(this);
        this.onClick_DeleteItem = this.onClick_DeleteItem.bind(this);
        this.onClick_MoveItem = this.onClick_MoveItem.bind(this);

        this.onClick_Cancel = this.onClick_Cancel.bind(this);
        this.onClick_OK = this.onClick_OK.bind(this);

        this.onKeyPress_Title = this.onKeyPress_Title.bind(this);
        this.onChangeText_Title = this.onChangeText_Title.bind(this);

        this.confirmDialogResult_OK = this.confirmDialogResult_OK.bind(this);
        this.confirmDialogResult_Cancel = this.confirmDialogResult_Cancel.bind(this);

        this.icons = {
            select_none:<SelectNoneIcon className={"svg_none"}/>,
            add:<AddIcon/>,
            edit:<EditIcon/>,
            moveto:<MoveToIcon/>,
            delete:<DeleteIcon/>,
            ok:<OkIcon className={"svg_ok"}/>,
            cancel:<CancelIcon className={"svg_cancel"}/>,
        };
    }

    onClick_Select_None() { this.props.setSelectedItem(""); }

    onChangeText_Title(event) {
        this.props.setNewItemTitle(event.target.value);
    }

    onKeyPress_Title(event) {
        if (event.key === 'Enter')
            this.onClick_OK();
        if (event.key === 'Escape')
            this.onClick_Cancel();//
    }

    onClick_MoveItem() {
        if (!this.props.treeSelectedItem) return;
        this.props.saveTreeEditRecordId(this.props.treeSelectedItem);
        this.props.setTreeControlsMode(TREE.MODE.MOVE);
    }

    // edit record - show dialog
    onClick_EditItem() {
        if (!this.props.treeSelectedItem) return;
        this.props.saveTreeEditRecordId(this.props.treeSelectedItem);
        this.props.setNewItemTitle(getElementById(this.props.treeData, this.props.treeSelectedItem)["title"]);
        this.props.setTreeControlsMode(TREE.MODE.EDIT);
    }

    // new record - show dialog
    onClick_AddItem() {
        this.props.setNewItemTitle("");
        this.props.setTreeControlsMode(TREE.MODE.ADD);
    }

    // cancel "new record"
    onClick_Cancel() { this.props.setTreeControlsMode(TREE.MODE.NORMAL); }

    // add new record
    onClick_OK() {
        switch (this.props.treeControlsMode) {
            case TREE.MODE.ADD:
                if (this.props.newItemTitle === "") return;
                this.props.newTreeItem();
                break;
            case TREE.MODE.EDIT:
                if (this.props.newItemTitle === "") return;
                this.props.editTreeItem_Title()
                break;
            case TREE.MODE.MOVE:
                if (this.props.treeEditRecordId === this.props.treeSelectedItem) return;
                this.props.editTreeItem_ParentId();
                break;
            default:

        }
    }

    // onClick button "delete"
    onClick_DeleteItem() {
        if (!this.props.treeSelectedItem) return;
        this.props.setDialogIsOpen(true);
    }

    // result confirm dialog = OK
    confirmDialogResult_OK() {
        this.props.setDialogIsOpen(false);
        this.props.deleteTreeItem();
    }

    // result confirm dialog = Cancel
    confirmDialogResult_Cancel() {
        this.props.setDialogIsOpen(false);
    }

    render() {
        let show_ButtonAdd = false;
        let show_ButtonEdit = false;
        let show_AddEditPopup = false;
        let show_ButtonMove = false;
        let show_ButtonDelete = false;
        let show_ButtonOkCancel = false;
        switch (this.props.treeControlsMode) {
            case TREE.MODE.NORMAL:
                show_ButtonAdd = true;
                show_ButtonEdit = true;
                show_ButtonDelete = true;
                show_ButtonMove = true;
                break;
            case TREE.MODE.ADD:
                show_AddEditPopup = true;
                show_ButtonOkCancel = true;
                break;
            case TREE.MODE.EDIT:
                show_AddEditPopup = true;
                show_ButtonOkCancel = true;
                break;
            case TREE.MODE.MOVE:
                show_ButtonOkCancel = true;
                break;
            default:
        }
        let secondaryPanel = show_AddEditPopup
            ? <div className="panel-add">
                <TextField
                    id="outlined-basic"
                    label="Заголовок"
                    variant="outlined"
                    size="small"
                    onChange={this.onChangeText_Title}
                    onKeyDown={this.onKeyPress_Title}
                    value={this.props.newItemTitle}
                    autoFocus={true}
                />
                </div>
            : null;

        return <div className="control-panel">

            <ConfirmDialogComponent
                title="Подтверждение"
                text={"Вы точно хотите удалить выбранную запись?" }
                handleOK={this.confirmDialogResult_OK}
                handleCancel={this.confirmDialogResult_Cancel}
            />

            <div className="buttons-group">
                <ControlButton onClick={this.onClick_Select_None} icon={this.icons.select_none} show={true}/>
                <ControlButton onClick={this.onClick_Cancel} icon={this.icons.cancel} show={show_ButtonOkCancel} />
                <ControlButton onClick={this.onClick_OK} icon={this.icons.ok} show={show_ButtonOkCancel} />
                <ControlButton onClick={this.onClick_AddItem} icon={this.icons.add} show={show_ButtonAdd} />
                <ControlButton onClick={this.onClick_EditItem} icon={this.icons.edit} show={show_ButtonEdit} />
                <ControlButton onClick={this.onClick_MoveItem} icon={this.icons.moveto} show={show_ButtonMove} />
                <ControlButton onClick={this.onClick_DeleteItem} icon={this.icons.delete} show={show_ButtonDelete} />
            </div>
            <div className="panel-secondary">
                {secondaryPanel}
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        treeControlsMode: state.treeControlsMode,
        newItemTitle: state.treeNewItemTitle,
        treeSelectedItem: state.treeSelectedItem,
        treeData: state.treeData,
        treeEditRecordId: state.treeEditRecordId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedItem: (val) => dispatch(setSelectedItem(val)),
        setTreeControlsMode: (val) => dispatch(setTreeControlsMode(val)),
        setNewItemTitle: (val) => dispatch(setNewItemTitle(val)),
        setDialogIsOpen: (val) => dispatch(setDialogIsOpen(val)),
        saveTreeEditRecordId: (val) => dispatch(saveTreeEditRecordId(val)),
        newTreeItem: () => newTreeItem(),
        editTreeItem_Title: () => editTreeItem_Title(),
        editTreeItem_ParentId: () => editTreeItem_ParentId(),
        deleteTreeItem: () => deleteTreeItem(),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TreeControlsComponent));