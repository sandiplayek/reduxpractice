import { Component } from "react"
import { connect } from "react-redux"
import { Increment,Decrement } from "./Actions/counterActions"
import { bindActionCreators } from "redux";

class ClassPage extends Component {
    onIncrementVal(){
        this.props.Increment(2);
    }
    onDecrementVal(){
        this.props.Decrement(1);
    }
    render(){
        return (<><div>Hello {this.props.count}</div>
        <div><button onClick={this.onIncrementVal.bind(this)}>Increment</button></div>
        <div><button onClick={this.onDecrementVal.bind(this)}>Decrement</button></div>
        </>)
    }

}


const mapStateToProps =(state)=>{
    return {
        count: state.counter
    }
}

// const mapDispatchToProps =(dispatch)=>{
//     return {
//         onIncrement : () =>dispatch(Increment(2)),
//         onDecrement : () =>dispatch(Decrement(1)),
//         }
// }

const mapDispatchToProps =(dispatch)=>{
    // return {
    //     onIncrement : () =>dispatch(Increment(2)),
    //     onDecrement : () =>dispatch(Decrement(1)),
    //     }
    return bindActionCreators({Increment,Decrement},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ClassPage);
