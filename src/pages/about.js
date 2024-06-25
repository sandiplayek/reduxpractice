import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "./store/store";
export const About=()=>{
    const [count, setCount]= useState(0);
    const abc= useSelector(abc=>abc.counter)

    useEffect(()=>{
    setCount(abc);

       // updateState();
       // store.subscribe(updateState)
    },[abc])

    function updateState(){
        const bcd= store.getState();
        console.log('bcd==',bcd)
        setCount(bcd.counter)
    }

return (<>About {count}</>);
}