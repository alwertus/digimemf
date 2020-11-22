import {IMG_LISTER} from "../../store/AppActions";

export function imgLister_Images(state = [], action) {
    return action.type === IMG_LISTER.IMAGES
        ? action.newValue
        : state;
}
export function imgLister_Cursor(state = 0, action) {
    return action.type === IMG_LISTER.CURSOR
        ? action.newValue
        : state;
}
export function imgLister_Show(state = false, action) {
    return action.type === IMG_LISTER.SHOW
        ? action.newValue
        : state;
}