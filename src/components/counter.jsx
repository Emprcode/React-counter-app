import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    
      
    
    };
   handleOnIncrement = (product)=> {
    console.log(product);
        this.setState ({count: this.state.count + 1})
        };
    render() { 

        let classes = this.getBgClasses();

        return (
        <div>
            <span className= {this.getBgClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleOnIncrement(product)} className='btn btn-success'>Increment</button>
        </div>
        );
    }
    getBgClasses() {
        let classes = "bg m-2 rounded fw-bold bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

   formatCount () {
        const{count} = this.state;
        return count === 0 ? 'zero' : count;
    }
}
 
export default Counter;