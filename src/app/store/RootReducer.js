import { combineReducers } from 'redux';

import { userLogin, loginStatus, userPassword, loginErrorText, userName/*, setUserRoles */} from "../components/login_form/LoginReducer";
import { dataStatus as treeDataStatus, treeData, errorText as treeErrorText, selectedItem as treeSelectedItem} from "../components/pages/info/tree/TreeReducer";
import { showAddPopup as treeShowAddPopup, newItemTitle as treeNewItemTitle } from "../components/pages/info/tree/controls/TreeControlsReducer";
import { isDebug } from "../components/debug/DebugReducer";
import { confirmDialogIsOpen } from "../components/confirm_dialog/ConfirmDialogReducer";
import { pgInfoHtml, pgInfoHtmlTemp, pgInfoMode, pgInfoStatus} from "../components/pages/info/page/PageReducer";

export default combineReducers({
    isDebug,

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
    treeShowAddPopup,
    treeNewItemTitle,

    confirmDialogIsOpen,

    // Page Info
    pgInfoHtml,
    pgInfoStatus,
    pgInfoMode,
    pgInfoHtmlTemp,
})