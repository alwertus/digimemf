import {TREE} from "../../../../../store/AppActions";

export function showAddPopup(state = false, action) {
    switch (action.type) {
        case TREE.CONTROLS.ADD_SHOW_POPUP:
            return action.showAddPopup;
        default:
            return state;
    }
}

export function newItemTitle(state = "", action) {
    switch (action.type) {
        case TREE.NEW_ITEM_TITLE:
            return action.newItemTitle;
        default:
            return state;
    }
}