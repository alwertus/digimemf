import React, { Component} from "react";
import IconButton from "@material-ui/core/IconButton";

class ControlButton extends Component {
    render() {
        if (this.props.show)
            return <div><IconButton size="small" onClick={ this.props.onClick }>{this.props.icon}</IconButton></div>
        else
            return null;
    }
}

export default ControlButton;