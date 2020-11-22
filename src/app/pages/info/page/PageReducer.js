import { PGINFO } from "../../../store/AppActions";

export function pgInfoHtml(state = "", action) {
    switch (action.type) {
        case PGINFO.DATA:
            return action.newValue;
        default:
            return state;
    }
}

export function pgInfoStatus(state = PGINFO.STATUS.NONAME, action) {
    switch (action.type) {
        case PGINFO.SET_STATUS:
            return action.newValue;
        default:
            return state;
    }
}

export function pgInfoMode(state = PGINFO.MODE.PAGE, action) {
    switch (action.type) {
        case PGINFO.SET_MODE:
            return action.newValue;
        default:
            return state;
    }
}

export function pgInfoHtmlTemp(state = "", action) {
    switch (action.type) {
        case PGINFO.DATA_TEMP:
            return action.newValue;
        default:
            return state;
    }
}