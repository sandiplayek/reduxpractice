export const Increment =(val) =>{
    return {'type': 'INCREMENT', 'payload' : val}
}

export const Decrement =(val) =>{
    return {'type': 'DECREMENT', 'payload' : val}
}