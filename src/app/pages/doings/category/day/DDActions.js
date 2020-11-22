import store from "../../../../store/Store";
import {DOINGS} from "../../../../store/AppActions";
import {zeroTime, addDays} from "../../../../common/dateformat";

export function setDDCursor (inc) {
    let newValue = new Date(store.getState().ddCursor.getTime());
    newValue.setDate(newValue.getDate() + (inc >= 0 ? 1 : -1));
    return { type: DOINGS.DAY.SET_CURSOR, newValue: newValue }
}
export function setDDData (newValue) { return { type: DOINGS.DAY.DATA.SET_ITEMS, newValue: newValue } }
export function setDDDataStartDate (newValue) { return { type: DOINGS.DAY.DATA.SET_START_DATE, newValue: newValue } }
export function setDDShowTaskDetailsDialog (newValue) { return { type: DOINGS.DAY.SHOW_TASK_DETAILS_DIALOG, newValue: newValue } }
export function setDDCurrentTaskId (newValue) { return { type: DOINGS.DAY.CURRENT_TASK_ID, newValue: newValue } }

let debugItems = [];
let tasklistDay0 = [
    { id : 1, type : "market", name : "Покупки", completed : 40, timepassed : 0, timestart : 0, execstatus : "PAUSE" },
    { id : 2, type : "market2", name : "Продукты", completed : 80, timepassed : 0, timestart : 0, execstatus : "PAUSE" },
    { id : 3, type : "health", name : "Зарядка", completed : 100, timepassed : 0, timestart : 0, execstatus : "PAUSE" },
];

export function ddUpdateData(forceUpdate = false) {
    let startPos = 7
    let daysCount = startPos * 3;
    let dCursor = store.getState().ddCursor;
    let dStart = store.getState().ddDataStartDate;
    let dEnd = addDays(dStart, daysCount);
    let dUpdStart = addDays(dStart, 2);
    let dUpdEnd = addDays(dEnd, -2);


    console.log(`START << [${dateOut(dStart)}] UPD[${dateOut(dUpdStart)}] <NOW[${dateOut(dCursor)}]> UPD[${dateOut(dUpdEnd)}] [${dateOut(dEnd)}] >> END`);
    if (!forceUpdate && dCursor > dUpdStart && dCursor < dUpdEnd) return;

    console.log("UPDATE");

    // FETCH HERE (START_DATE, DAY_COUNT)

    let dispatch = store.dispatch;

    debugItems = [];
    for (let i = 0; i < daysCount; i++) {

        let d = addDays(dCursor, i - startPos);
        debugItems.push({ date : d,
            tasks : d.getTime() === zeroTime(new Date()).getTime() ? tasklistDay0 : []
        })
    }

    dispatch(setDDData(debugItems));
    dispatch(setDDDataStartDate(addDays(dCursor, - startPos)));
}

function dateOut(d) {
    return d.toDateString();
}
