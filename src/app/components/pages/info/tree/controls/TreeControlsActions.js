import { TREE } from "../../../../../store/AppActions";
import store from "../../../../../store/Store";
import { setTreeDataStatus } from "../TreeActions";
import { getAuthHeader } from "../../../../../store/Store";

export function setShowAddPopup (newValue) { return { type: TREE.CONTROLS.ADD_SHOW_POPUP, showAddPopup: newValue } }
export function setNewItemTitle (newValue) { return { type: TREE.NEW_ITEM_TITLE, newItemTitle: newValue } }

export function newTreeItem() {
    console.log("add tree item");
    let bodyString = JSON.stringify({
        operation: "create",
        title: store.getState().treeNewItemTitle,
        parentId: store.getState().treeSelectedItem
    });

    fetch("/infopages", {
        method: "POST",
        headers: getAuthHeader(),
        body: bodyString
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            switch (response.Result) {
                case "OK":
                    store.dispatch(setTreeDataStatus(TREE.STATUS.NONAME));
                    store.dispatch(setShowAddPopup(false));
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

    fetch("/infopages", {
        method: "POST",
        headers: getAuthHeader(),
        body: bodyString
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            switch (response.Result) {
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