import {DOINGS} from "../../store/AppActions";

export function setDoingsCategory (newValue) {
    let m = {
        'D': DOINGS.CATEGORY_VAL.DAY,
        'M': DOINGS.CATEGORY_VAL.MONTH,
        'Y': DOINGS.CATEGORY_VAL.YEAR,
        'G': DOINGS.CATEGORY_VAL.GLOBAL,
    }
    return { type: DOINGS.SET_CATEGORY, newValue: m[newValue] }
}
export function setDate (newValue) { return { type: DOINGS.DAY.SET_CURSOR, newValue: newValue } }