import {DIALOG} from "../../store/AppActions";

export function setDialogIsOpen (newValue) { return { type: DIALOG.IS_OPEN, setIsOpen: newValue } }