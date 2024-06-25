import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "../store/store";
export const CheckRedux=()=>{
    //const abc= useSelector(abc=>abc.counter)

    const [count, setCount]= useState(0);
    useEffect(()=>{
        updateState();
        store.subscribe(updateState)
    },[])

    function updateState(){
        const bcd= store.getState();
        console.log('bcd==',bcd)
        setCount(bcd.counter)
    }

return (<>checkredux {count}</>);
}