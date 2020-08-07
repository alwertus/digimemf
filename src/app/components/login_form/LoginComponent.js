import React, { Component} from "react";
import { connect } from "react-redux";
import { LOGIN } from "../../store/AppActions";
import {setErrorText, signIn, setUserLogin, setUserPassword, logout} from "./LoginActions";
import Button from '@material-ui/core/Button';
import "./LoginComponent.scss";

class LoginComponent extends Component {


    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onClickLogout = this.onClickLogout.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    availableControls() {
        switch (this.props.loginStatus) {
            case LOGIN.STATUS.NONAME:
                return <div id="Available_Controls">
                    <input className="login-input" name="inputLogin" type="text" placeholder="Имя" onChange={this.onChange} onKeyDown={this.onKeyDown}/>
                    <input className="login-input" name="inputPassword" type="text" placeholder="Пароль" onChange={this.onChange} autoComplete="on" onKeyDown={this.onKeyDown}/>
                    <Button variant="outlined" color="primary" size="small" onClick={this.onClickLogin}>Войти</Button>
                    {/*<button className="login-button" onClick={this.onClickLogin}>Войти</button>*/}
                </div>
            default:
                return <div  id="Available_Controls">
                    {/*<button className="login-button" onClick={this.onClickLogout}>Выйти</button>*/}
                    <Button variant="outlined" color="primary" size="small" onClick={this.onClickLogout}>Выйти</Button>
                </div>
        }
    }

    render() {
        return <div className="login-wrapper">
            <div id="Login-Text_UserName">{ this.props.userName }</div>
            <div id="Login-Controls">{ this.availableControls() }</div>
            <div id="Login_Text_ErrorMsg">{this.props.loginErrorText}</div>
        </div>
    }

    onChange(event) {
        this.props.clearErrorText();
        if (event.target.name === "inputLogin") this.props.changeUserLogin(event.target.value);
        if (event.target.name === "inputPassword") this.props.changeUserPassword(event.target.value);
    }

    onClickLogin() {
        this.props.signIn(this.props.userLogin, this.props.userPassword);
    }

    onKeyDown(e) {
        if (e.keyCode === 13)
            this.onClickLogin();
    }

    onClickLogout() {
        this.props.logout();
    }
}

const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin,
        userPassword: state.userPassword,
        loginStatus: state.loginStatus,
        loginErrorText: state.loginErrorText,
        userName: state.loginStatus === LOGIN.STATUS.NONAME ? "Неизвестный пользователь" : state.userName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUserLogin: (newValue) => dispatch(setUserLogin(newValue)),
        changeUserPassword: (newValue) => dispatch(setUserPassword(newValue)),
        clearErrorText: () => dispatch(setErrorText("")),
        signIn: (userLogin, userPassword) => signIn(dispatch, userLogin, userPassword),
        logout: () => logout(dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);