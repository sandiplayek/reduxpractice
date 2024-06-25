import {createStore} from 'redux'
import rootReduce from "../../reducer/rootreduce";
export const store = createStore(rootReduce, {counter:5});
