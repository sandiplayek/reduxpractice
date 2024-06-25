import { Component } from "react";

export default class extends Component{
    constructor(){
        super();
        this.changeName2=this.changeName2.bind(this);
    }
    state ={name: 'sandip', roll : 1, class: 5}
    //es6 arrow function
    changeName1 =(value,role1)=>{
        this.setState({name : value, roll:role1})
     }
     //bind in constructor
     changeName2(value,role2){
        this.setState({name : value, roll:role2})
     }
     //binded while function calling
     changeName3(value,role3){
        this.setState({name : value, roll:role3})
     }
    render(){
        return (<div>
            <h2>Name: {this.state.name}</h2>
            <div><button onClick={()=>this.changeName1('yahoo',100)}>Click it</button></div>
            
            <h2>Roll: {this.state.roll}</h2>
            <div><button onClick={()=>this.changeName2('yahoo2',200)}>Click it</button></div>
            
            <h2>Class: {this.state.class}</h2>
            <div><button onClick={this.changeName3.bind(this,'yahoo3',300)}>Click it</button></div>
            </div>);
    }
}