import {LOGIN, PGINFO, TREE} from "../../../../store/AppActions";
import store, {getAuthHeader} from "../../../../store/Store";
import {setPgInfoStatus} from "../page/PageActions";

export function setTreeDataStatus (newValue) { return { type: TREE.SET_STATUS, treeDataStatus: newValue } }
export function setTreeData(newValue) { return { type: TREE.SET_DATA, treeData: newValue } }
export function setErrorText(newValue) { return { type: TREE.ERROR_TEXT, errorText: newValue } }
export function setSelectedItem(newValue) {
    store.dispatch(setPgInfoStatus(PGINFO.STATUS.NONAME));
    return { type: TREE.SET_SELECTED_ITEM, selectedItem: newValue } }
/*const debugData = [
    { id: '1', title: 'Parent 1', children: [
        { id: '11', title: '1 Child - 1', },
        { id: '12', title: '1 Child - 2', children: [
            { id: '121', title: '12 Child - 1', }, ], }, ], },
    { id: '2', title: 'Parent 2', children: [
        { id: '21', title: '2 Child - 1' } ] },
    { id: '3', title: 'Parent 3' } ];*/

export function updateTreeData() {
    let dispatch = store.dispatch;
    // uncomment below if debug
    // dispatch(setTreeData(debugData)); dispatch(setTreeDataStatus(TREE.STATUS.SUCCESS)); return;

    // if user not login in
    // eslint-disable-next-line
    if (store.getState().loginStatus !== LOGIN.STATUS.SUCCESS) {
        dispatch(setErrorText("Login required"));
        dispatch(setTreeDataStatus(TREE.STATUS.ERROR));
        return;
    }

    dispatch(setTreeDataStatus(TREE.STATUS.LOADING));

    fetch("/infopages", {
        method: "POST",
        headers: getAuthHeader(),
        body: JSON.stringify({
            operation: "get"
        })
    })
        .then((response) => response.json())
        .then((response) => {
            console.log("response", response);
            switch (response.Result) {
                case "OK":
                    let result = JSON.parse(response.List);
                    dispatch(setTreeData(result));
                    dispatch(setTreeDataStatus(TREE.STATUS.SUCCESS));
                    break;
                case "Error":
                    console.log("Error", response.Error);
                    dispatch(setErrorText(response.Error));
                    dispatch(setTreeDataStatus(TREE.STATUS.ERROR));
                    break;
                default:
                    console.log("Unknown error");
                    dispatch(setErrorText("Unknown error"));
                    dispatch(setTreeDataStatus(TREE.STATUS.ERROR));

            }
            return response;
        })
        .catch((e) => {
            console.log("ERROR: " + e);
            dispatch(setTreeDataStatus(TREE.STATUS.ERROR));
            dispatch(setErrorText("Проблемы соединения"));
        });
}