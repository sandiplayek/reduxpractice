import { useSelector, useDispatch } from 'react-redux';
import { CheckRedux } from './components/checkredux';

export default function Index(){
    const count = useSelector(state=> state.counter)
    const dispatch = useDispatch();
    return (<>
    Redux count: {count}
    <p><button onClick={()=>dispatch({'type':'INCREMENT', 'payload':2})}>Increment</button></p>
    <p><button onClick={()=>dispatch({'type':'DECREMENT', 'payload':1})}>Decrement</button></p>
    <CheckRedux />
</>)
}