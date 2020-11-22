import { DOINGS } from "../../../../store/AppActions";
import { addDays, zeroTime } from "../../../../common/dateformat";

export function ddCursor(state = zeroTime(new Date()), action) {
    if (action.type === DOINGS.DAY.SET_CURSOR) {
        return action.newValue;
    }
    return state;
}

export function ddDataStartDate(state = addDays(zeroTime(new Date()), -7), action) {
    if (action.type === DOINGS.DAY.DATA.SET_START_DATE)
        return action.newValue;
    return state;
}

export function ddData(state = [], action) {
    if (action.type === DOINGS.DAY.DATA.SET_ITEMS) {
        return action.newValue;
    }
    return state;
}

export function ddDataTask(state = {}, action) {

}

export function ddShowTaskDetailsDialog(state = true, action) {
    if (action.type === DOINGS.DAY.SHOW_TASK_DETAILS_DIALOG) {
        return action.newValue;
    }
    return state;
}

export function ddCurrentTaskId(state = -1, action) {
    if (action.type === DOINGS.DAY.CURRENT_TASK_ID) {
        return action.newValue;
    }
    return state;
}