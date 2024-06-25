import { useSelector, useDispatch } from 'react-redux';
import { CheckRedux } from './components/checkredux';
import { store } from './store/store';
import { useEffect, useState } from 'react';
import { Increment, Decrement } from './Actions/counterActions';

export default function Contact(){
    //const count = useSelector(state=> state.counter);
    //this count also get updated value but cannot be assigned to any state like useCount(count)
    //const dispatch = useDispatch();
    const [count, setCount]=useState(0)
    useEffect(()=>{
        updateState();
        store.subscribe(updateState);
    })

    function updateState(){
        const state = store.getState();
        setCount(state.counter);
    }
    
    function onIncrement(){
         //store.dispatch({'type':'INCREMENT'})
         store.dispatch(Increment(2))
    }
    
    function onDecrement(){
         //store.dispatch({'type':'DECREMENT'});
         store.dispatch(Decrement(1))
    }

    return (<>
    Redux count: 
    {count}
    <p><button onClick={onIncrement}>Increment</button></p>
    <p><button onClick={onDecrement}>Decrement</button></p>
    <CheckRedux />
</>)
}