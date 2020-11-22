import {CFG} from "../../store/AppActions";
import {getStorageItem, setStorageItem} from "../LocalStorage";

export function paramServerAddress(state = getStorageItem("ServerAddress", "localhost"), action) {
    return action.type === CFG.SERVER_ADDRESS
        ? setStorageItem("ServerAddress", action.newValue)
        : state;
}