import {combineReducers} from 'redux';

import {loginErrorText, loginStatus, userLogin, userName, userPassword} from "../components/login_form/LoginReducer";
import {
    dataStatus as treeDataStatus,
    errorText as treeErrorText,
    selectedItem as treeSelectedItem,
    treeData
} from "../components/pages/info/tree/TreeReducer";
import {
    newItemTitle as treeNewItemTitle,
    treeControlsMode,
    treeEditRecordId
} from "../components/pages/info/tree/controls/TreeControlsReducer";
import {confirmDialogIsOpen} from "../components/confirm_dialog/ConfirmDialogReducer";
import {pgInfoHtml, pgInfoHtmlTemp, pgInfoMode, pgInfoStatus} from "../components/pages/info/page/PageReducer";

export default combineReducers({
    userLogin,
    loginStatus,
    userPassword,
    loginErrorText,
    userName,
    // setUserRoles,

    treeDataStatus,
    treeData,
    treeErrorText,
    treeSelectedItem,
    treeControlsMode,
    treeNewItemTitle,
    treeEditRecordId,
    confirmDialogIsOpen,

    // Page Info
    pgInfoHtml,
    pgInfoStatus,
    pgInfoMode,
    pgInfoHtmlTemp,
})