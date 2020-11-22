import {combineReducers} from 'redux';

import {paramServerAddress} from "../common/cfg/CfgReducer";
import {loginErrorText, loginStatus, userLogin, userName, userPassword} from "../components/login_form/LoginReducer";
import {
    dataStatus as treeDataStatus,
    errorText as treeErrorText,
    selectedItem as treeSelectedItem,
    treeData
} from "../pages/info/tree/TreeReducer";
import {
    newItemTitle as treeNewItemTitle,
    treeControlsMode,
    treeEditRecordId
} from "../pages/info/tree/controls/TreeControlsReducer";
import {confirmDialogIsOpen} from "../components/confirm_dialog/ConfirmDialogReducer";
import {pgInfoHtml, pgInfoHtmlTemp, pgInfoMode, pgInfoStatus} from "../pages/info/page/PageReducer";
import {doingsCategory} from "../pages/doings/DoingsReducer";
import {ddCursor, ddDataStartDate, ddData, ddShowTaskDetailsDialog, ddCurrentTaskId} from "../pages/doings/category/day/DDReducer";
import {imgLister_Images, imgLister_Cursor, imgLister_Show} from "../components/image_lister/ImgListerReducer";

export default combineReducers({
    paramServerAddress,

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

    // Page Doings
    doingsCategory,
    ddCursor,
    ddDataStartDate,
    ddData,
    ddShowTaskDetailsDialog,
    ddCurrentTaskId,

    imgLister_Images,
    imgLister_Cursor,
    imgLister_Show,
})