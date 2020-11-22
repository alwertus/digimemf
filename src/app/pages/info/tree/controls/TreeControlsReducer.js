import {TREE} from "../../../../store/AppActions";

/*export function showAddPopup(state = false, action) {
    switch (action.type) {
        case TREE.CONTROLS.ADD_SHOW_POPUP:
            return action.showAddPopup;
        default:
            return state;
    }
}*/

export function newItemTitle(state = "", action) {
    switch (action.type) {
        case TREE.NEW_ITEM_TITLE:
            return action.newItemTitle;
        default:
            return state;
    }
}

export function treeControlsMode(state = TREE.MODE.NORMAL, action) {
    switch (action.type) {
        case TREE.SET_MODE:
            return action.newValue;
        default:
            return state;
    }
}

export function treeEditRecordId(state = "", action) {
    switch (action.type) {
        case TREE.EDIT_RECORD_ID:
            return action.newValue;
        default:
            return state;
    }
}