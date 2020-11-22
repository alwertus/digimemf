import {PGINFO} from "../../../../store/AppActions";

export function setPgInfoMode(newValue) { return { type: PGINFO.SET_MODE, newValue: newValue } }