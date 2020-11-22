import {LOGIN, TREE} from "../../store/AppActions";

export function setUserName (newValue) { return { type: LOGIN.SET_USERNAME, userName: newValue } }
export function setUserRoles (newValue) { return { type: LOGIN.SET_USERROLES, roles: newValue } }
export function setLoginStatus (newValue) { return { type: LOGIN.SET_STATUS, loginStatus: newValue } }
export function setErrorText (newValue) { return { type: LOGIN.SET_ERROR_TEXT, errorText: newValue } }
export function setUserLogin (newValue) { return { type: LOGIN.USER_SET_LOGIN, userLogin: newValue } }
export function setUserPassword (newValue) { return { type: LOGIN.USER_SET_PASSWORD, userPassword: newValue } }
export function setTreeDataStatus (newValue) { return { type: TREE.SET_STATUS, treeDataStatus: newValue } }

export function logout(dispatch) {
    dispatch(setUserName(""));
    dispatch(setUserLogin(""));
    dispatch(setUserPassword(""));
    dispatch(setLoginStatus(LOGIN.STATUS.NONAME));
    dispatch(setTreeDataStatus(TREE.STATUS.NONAME));
}

export function signIn(dispatch, userLogin, userPassw) {
    if (userLogin === "" || userPassw === "") {
        dispatch(setErrorText("Необходимо ввести Имя и Пароль"));
        return;
    }

    dispatch(setLoginStatus(LOGIN.STATUS.LOADING));

    let headers = new Headers();
    headers.append("Content-Type", "application/json;charset=utf-8");
    headers.append("Authorization", 'Basic ' + Buffer.from(userLogin + ":" + userPassw).toString('base64'));

    fetch("https://127.0.0.1:5188/signin", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            operation: "login",
            name: userLogin,
            password: userPassw
        })
    })
        .then((response) => response.json())
        .then((response) => {
            console.log("response", response);
            if (response.status === 200) {
                dispatch(setUserName(response.userName));
                dispatch(setUserRoles(response.roles));
                dispatch(setLoginStatus(LOGIN.STATUS.SUCCESS));
            } else {
                dispatch(setLoginStatus(LOGIN.STATUS.NONAME));
                dispatch(setErrorText("Неверные данные"));
            }
            return response;
        })
        .catch((e) => {
            console.log("ERROR: " + e);
            dispatch(setErrorText("Проблемы соединения"));
            dispatch(setLoginStatus(LOGIN.STATUS.NONAME));
        });
}