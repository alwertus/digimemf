import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import "./ImgListerComponent.scss";
import {IMG_LISTER} from "../../store/AppActions";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';

class ImgListerComponent extends Component {

    constructor(props) {
        super(props);

        this.onClick_DarkScreen = this.onClick_DarkScreen.bind(this);
        this.onClick_Back = this.onClick_Back.bind(this);
        this.onClick_Forward = this.onClick_Forward.bind(this);

        this.imgRef = React.createRef();
    }

    onClick_DarkScreen(val) {
        if (val.target.className !== 'darkscreen') return;
        this.props.setShow(false);
    }

    onClick_Back() {
        if (this.props.cursor < 1) return;
        this.props.setCursor(this.props.cursor - 1);
    }

    onClick_Forward() {
        if (this.props.cursor >= this.props.images.length - 1) return;
        this.props.setCursor(this.props.cursor + 1);
    }

    componentDidMount() {
        console.log("ref", this.imgRef.current === null ? "NULL" : this.imgRef.current.width + " - " + this.imgRef.current.height);
    }

    render() {
        if (!this.props.show ||
            this.props.cursor < 0 ||
            this.props.images.length < 1)
            return <div/>

        let curImgSrc = this.props.images[this.props.cursor];

        return <div className="darkscreen" onClick={this.onClick_DarkScreen}>
            <div className="back"><IconButton onClick={this.onClick_Back}><ArrowBackIosIcon/></IconButton></div>
            <div className="image_wrapper">
                <img src={curImgSrc} alt="" ref={this.imgRef}/>
            </div>
            <div className="forward"><IconButton onClick={this.onClick_Forward}><ArrowForwardIosIcon/></IconButton></div>
        </div>
    }
}
const mapStateToProps = (state) => {
    return {
        images : state.imgLister_Images,
        show : state.imgLister_Show,
        cursor : state.imgLister_Cursor,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setShow : (newValue) => dispatch({ type: IMG_LISTER.SHOW, newValue: newValue }),
        setCursor : (newValue) => dispatch({ type: IMG_LISTER.CURSOR, newValue: newValue }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImgListerComponent));