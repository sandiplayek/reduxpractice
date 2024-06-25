const initialstate ={
    counter:1
}

export default function rootReduce(state=initialstate, action){
    switch(action.type){
        case 'INCREMENT': {
            return {...state, counter: state.counter + action.payload}
        }
        case 'DECREMENT' : {
            return {...state, counter: state.counter - action.payload};
        }
        default : return state;
    }
}