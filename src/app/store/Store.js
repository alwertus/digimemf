import configureStore from "./ConfigureStore";

const store = configureStore();

export default store;

export function getAuthHeader() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json;charset=utf-8");
    headers.append("Authorization", 'Basic ' + Buffer.from(store.getState().userLogin + ":" + store.getState().userPassword).toString('base64'));
    return headers;
}