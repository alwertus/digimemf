import React, { Component} from "react";
// import { connect } from "react-redux";
import {withRouter} from "react-router";

/*const debugData = [
    {
        id: '1',
        title: 'Parent',
        children: [
            {
                id: '2',
                title: 'Child - 1',
            },
            {
                id: '3',
                title: 'Child - 3',
                children: [
                    {
                        id: '4',
                        title: 'Child - 4',
                    },
                ],
            },
        ],
    },
    {
        id: '11',
        title: 'Parent2',
        children: [
            {
                id: '12',
                title: 'Child12'
            }
        ]
    },
    {
        id: '21',
        title: 'Solo3'
    }
    ];*/

/*
function getElementById(nodes, id) {
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === id) return nodes[i];
        if (nodes[i].children === undefined) continue;
        let res = getElementById(nodes[i].children, id);
        if (res) return res;
    }

    return null;
}*/

class PageHomeComponent extends Component {

    render() {
        // console.log("find result = ", getElementById(debugData, '4s'));
        return (
            <div className="content-container">
                <span>Home Page</span>
            </div>
        );
    }
}
/*
const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};*/

export default /*connect(mapStateToProps, mapDispatchToProps)*/(withRouter(PageHomeComponent));