import React, {Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./TreeComponent.scss";
import {TREE} from "../../../../store/AppActions";
import { updateTreeData, setSelectedItem } from "./TreeActions";

class TreeComponent extends Component {

    constructor(props, context) {
        super(props, context);
        this.onSelect = this.onSelect.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.renderTreeChild = this.renderTreeChild.bind(this);
        // this.expandedItems = localStorage.getItem("treeExpandedItem") == null ? ['root'] : localStorage.getItem("treeExpandedItem").split("%");
    }

    onSelect = (e, id) => {
        this.props.setSelectedItem(id);
    }

    onToggle = (e, IDs) => {
        // console.log("SAVE:",IDs.join("%"));
        // localStorage.removeItem("treeExpandedItem");
        // localStorage.setItem("treeExpandedItem", IDs.join("%"));
    }

    renderTreeChild = (nodes) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.title}>
            {Array.isArray(nodes.children) ? nodes.children.map((node) => this.renderTreeChild(node)) : null}
        </TreeItem>
    )

    render() {
        if (this.props.dataStatus === TREE.STATUS.NONAME)
            this.props.updateTreeData();

        switch (this.props.dataStatus) {
            case TREE.STATUS.LOADING:
                return <div> LOADING </div>
            case TREE.STATUS.ERROR:
                return <div> {this.props.treeError} </div>
            case TREE.STATUS.SUCCESS:
                return <TreeView
                    className = { "root-element" }
                    defaultCollapseIcon = { <ExpandMoreIcon/> }
                    // defaultExpanded={['root']}
                    // defaultExpanded={this.expandedItems}
                    defaultExpandIcon = { <ChevronRightIcon/> }
                    onNodeSelect = { this.onSelect }
                    onNodeToggle = { this.onToggle }
                    selected = { this.props.selectedItem } // multiSelect
                    >
                        {this.props.treeData.map((item) => (this.renderTreeChild(item)))}
                    </TreeView>
            default:
                return (
                    <div>ERROR {this.props.dataStatus}</div>
                );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dataStatus: state.treeDataStatus,
        treeData: state.treeData,
        treeError: state.treeErrorText,
        loginStatus: state.loginStatus,
        selectedItem: state.treeSelectedItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTreeData: () => updateTreeData(),
        setSelectedItem: (val) => dispatch(setSelectedItem(val)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TreeComponent));