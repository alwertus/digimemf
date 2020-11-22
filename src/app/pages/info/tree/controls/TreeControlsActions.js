import {TREE} from "../../../../store/AppActions";
import store, {getAuthHeader} from "../../../../store/Store";
import {setTreeDataStatus} from "../TreeActions";

export function setTreeControlsMode (newValue) { return { type: TREE.SET_MODE, newValue: newValue } }
export function setNewItemTitle (newValue) { return { type: TREE.NEW_ITEM_TITLE, newItemTitle: newValue } }
export function saveTreeEditRecordId (newValue) { return { type: TREE.EDIT_RECORD_ID, newValue: newValue } }

export function getElementById(nodes, id) {
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === id) return nodes[i];
        if (nodes[i].children === undefined) continue;
        let res = getElementById(nodes[i].children, id);
        if (res) return res;
    }
    return null;
}
const URL = "/infopages";

export function newTreeItem() {
    let bodyString = JSON.stringify({
        operation: "create",
        title: store.getState().treeNewItemTitle,
        parentId: store.getState().treeSelectedItem
    });

    fetch(URL, {
        method: "POST",
        headers: getAuthHeader(),
        body: bodyString
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            switch (response['Result']) {
                case "OK":
                    store.dispatch(setTreeDataStatus(TREE.STATUS.NONAME));
                    store.dispatch(setTreeControlsMode(TREE.MODE.NORMAL));
                    break;
                default:
                    break;
            }
            return response;
        })
        .catch((e) => {
            console.log("ERROR: " + e);
        });
}

export function editTreeItem_Title() {
    let bodyString = JSON.stringify({
        operation: "update",
        title: store.getState().treeNewItemTitle,
        id: store.getState().treeSelectedItem
    });

    fetch(URL, {
        method: "POST",
        headers: getAuthHeader(),
        body: bodyString
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            switch (response["Result"]) {
                case "OK":
                    store.dispatch(setTreeDataStatus(TREE.STATUS.NONAME));
                    store.dispatch(setTreeControlsMode(TREE.MODE.NORMAL));
                    break;
                default:
                    break;
            }
            return response;
        })
        .catch((e) => {
            console.log("ERROR: " + e);
        });
}

export function editTreeItem_ParentId() {
    let bodyString = JSON.stringify({
        operation: "update",
        parentId: store.getState().treeSelectedItem,
        id: store.getState().treeEditRecordId,
    });

    fetch(URL, {
        method: "POST",
        headers: getAuthHeader(),
        body: bodyString
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            switch (response["Result"]) {
                case "OK":
                    store.dispatch(setTreeDataStatus(TREE.STATUS.NONAME));
                    store.dispatch(setTreeControlsMode(TREE.MODE.NORMAL));
                    break;
                default:
                    break;
            }
            return response;
        })
        .catch((e) => {
            console.log("ERROR: " + e);
        });
}

export function deleteTreeItem() {
    let delId = store.getState().treeSelectedItem;
    if (delId == null || delId === "") return;

    console.log("delete tree item: ", delId);
    let bodyString = JSON.stringify({
        operation: "delete",
        id: delId
    });

    fetch(URL, {
        method: "POST",
        headers: getAuthHeader(),
        body: bodyString
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            switch (response["Result"]) {
                case "OK":
                    store.dispatch(setTreeDataStatus(TREE.STATUS.NONAME));
                    break;
                default:
                    break;
            }
            return response;
        })
        .catch((e) => {
            console.log("ERROR: " + e);
        });
}