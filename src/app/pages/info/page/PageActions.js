import {PGINFO} from "../../../store/AppActions";
import store, {getAuthHeader} from "../../../store/Store";

export function setPgInfoData(newValue) { return { type: PGINFO.DATA, newValue: newValue } }
export function setPgInfoDataTemp(newValue) { return { type: PGINFO.DATA_TEMP, newValue: newValue } }
export function setPgInfoStatus(newValue) { return { type: PGINFO.SET_STATUS, newValue: newValue } }

const debugPage = "<h2>DEBUG PAGE</h2>"

export function updatePageData() {
    let dispatch = store.dispatch;

    if (store.getState().isDebug === 'true') {
        dispatch(setPgInfoData(debugPage));
        dispatch(setPgInfoStatus(PGINFO.STATUS.SUCCESS));
        return;
    }

    let id = store.getState().treeSelectedItem;
    if (id === null || id === "") {
        console.log("selected id is null");
        dispatch(setPgInfoStatus(PGINFO.STATUS.ERROR));
        return;
    }

    dispatch(setPgInfoStatus(PGINFO.STATUS.LOADING));

    fetch("/infopage", {
        method: "POST",
        headers: getAuthHeader(),
        body: JSON.stringify({
            operation: "get",
            id: id
        })
    })
        .then((response) => response.json())
        .then((response) => {
            switch (response.Result) {
                case "OK":
                    dispatch(setPgInfoData(response.html));
                    dispatch(setPgInfoStatus(PGINFO.STATUS.SUCCESS));
                    break;
                case "Error":
                    dispatch(setPgInfoData("ERROR" + response.Error));
                    dispatch(setPgInfoStatus(PGINFO.STATUS.ERROR));
                    break;
                default:
                    dispatch(setPgInfoData("ERROR Unknown error"));
                    dispatch(setPgInfoStatus(PGINFO.STATUS.ERROR));
            }
            return response;
        })
        .catch(() => {
            dispatch(setPgInfoStatus(PGINFO.STATUS.ERROR));
            dispatch(setPgInfoData("ERROR Проблемы соединения"));
        });
}

export function savePageTempData() {
    let dispatch = store.dispatch;
    let id = store.getState().treeSelectedItem;
    let html = store.getState().pgInfoHtmlTemp;

    // no changes -> exit
    if (html === store.getState().pgInfoHtml) return;

    if (id === null || id === "") {
        console.log("selected id is null");
        return;
    }


    fetch("/infopage", {
        method: "POST",
        headers: getAuthHeader(),
        body: JSON.stringify({
            operation: "set",
            id: id,
            html: html
        })
    })
        .then((response) => response.json())
        .then((response) => {
            console.log("response", response);

            switch (response.Result) {
                case "OK":
                    console.log("save=OK");
                    dispatch(setPgInfoStatus(PGINFO.STATUS.NONAME));
                    break;
                case "Error":
                    console.log("Error", response.Error);
                    break;
                default:
                    console.log("Unknown error");
            }
            return response;
        })
        .catch((e) => {
            console.log("ERROR: " + e);
        });
}