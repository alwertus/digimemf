import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {CFG} from "../../store/AppActions";

export const TmplComp = props => {
    const [count, setCount] = useState(0);
    const server = useSelector(state => state.paramServerAddress);
    const dispatch = useDispatch();

    return <div className={props.className}>
        <ul>
            <li>{"Class=" + props.className}</li>
            <li>{"count=" + count}</li>
        </ul>

        <button onClick={()=>setCount(count + 1)}>Add +1</button>
        <button onClick={()=> dispatch({ type: CFG.SERVER_ADDRESS, newValue: "azaza" })}>set new server</button>
        <p>{server}</p>

    </div>
};