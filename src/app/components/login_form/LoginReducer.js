import { LOGIN } from "../../store/AppActions";

export function setUserRoles(state = [], action) {
    if (action.type === LOGIN.SET_USERROLES) {
        console.log(action.roles);
        return action.roles;
    } else
        return action;
}

export function userLogin(state = localStorage.getItem("userLogin") == null ? "" : localStorage.getItem("userLogin"), action) {
    if (action.type === LOGIN.USER_SET_LOGIN) {
        if (action.userLogin === "")
            localStorage.removeItem("userLogin")
        else
            localStorage.setItem("userLogin", action.userLogin);
        return action.userLogin;
    } else
        return state;
}

export function userPassword(state = localStorage.getItem("userPassword") == null ? "" : localStorage.getItem("userPassword"), action) {
    if (action.type === LOGIN.USER_SET_PASSWORD) {
        if (action.userPassword === "")
            localStorage.removeItem("userPassword")
        else
            localStorage.setItem("userPassword", action.userPassword);
        return action.userPassword;
    } else
        return state;
}

export function loginStatus(state = localStorage.getItem("userLogin") == null ? LOGIN.STATUS.NONAME : LOGIN.STATUS.SUCCESS, action) {
    if (action.type === LOGIN.SET_STATUS)
        return action.loginStatus;
    else
        return state;
}

export function loginErrorText(state = "", action) {
    if (action.type === LOGIN.SET_ERROR_TEXT)
        return action.errorText;
    else
        return state;
}

export function userName(state = localStorage.getItem("userName") == null ? "" : localStorage.getItem("userName"), action) {
    if (action.type === LOGIN.SET_USERNAME) {
        if (action.userName === "")
            localStorage.removeItem("userName")
        else
            localStorage.setItem("userName", action.userName);
        return action.userName;
    } else
        return state;
}