import {DIALOG} from "../../store/AppActions";

export function confirmDialogIsOpen(state = false, action) {
    switch (action.type) {
        case DIALOG.IS_OPEN:
            return action.setIsOpen;
        default:
            return state;
    }
}