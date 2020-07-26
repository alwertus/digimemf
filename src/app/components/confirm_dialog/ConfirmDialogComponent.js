import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";

class ConfirmDialogComponent extends Component {

    constructor(props) {
        super(props);
        this.handleOK = props.handleOK.bind(this);
        this.handleCancel = props.handleCancel.bind(this);
        this.title = props.title;
        this.text = props.text;
    }

    render() {
        return <Dialog
            open={this.props.confirmDialogIsOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{this.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {this.text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleCancel} color="primary">
                    Отмена
                </Button>
                <Button onClick={this.handleOK} color="primary" autoFocus>
                    Да
                </Button>
            </DialogActions>
        </Dialog>
    }
}

const mapStateToProps = (state) => {
    return {
        confirmDialogIsOpen: state.confirmDialogIsOpen,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ConfirmDialogComponent));