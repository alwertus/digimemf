import {TREE} from "../../../store/AppActions";

export function dataStatus(state = TREE.STATUS.NONAME, action) {
    if (action.type === TREE.SET_STATUS)
        return action.treeDataStatus;
    else
        return state;
}

export function treeData(state = [], action) {
    if (action.type === TREE.SET_DATA)
        return action.treeData;
    else
        return state;
}

export function errorText(state = "", action) {
    if (action.type === TREE.ERROR_TEXT)
        return action.errorText;
    else
        return state;
}

export function selectedItem(state = "", action) {
    if (action.type === TREE.SET_SELECTED_ITEM) {
        return action.selectedItem;
    }
    else
        return state;
}