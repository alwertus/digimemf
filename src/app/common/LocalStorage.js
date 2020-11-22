export function getStorageItem(item, def = "") {
    return localStorage.getItem(item) == null
        ? def
        : localStorage.getItem(item)
}
export function setStorageItem(item, val) {
    localStorage.setItem(item, val);
    return val;
}