import React, { Component } from 'react';

class Counter extends Component {
    constructor (props){
        super(props)
        this.state ={
            count : 0
        }
    }


countNum = () => {
   this.setState  ({ count: this.state.count + 1 })
//    this.setState({ count: this.state.count + 1 }); 

}


    render(){
        return(
            <>
            <div>
                {this.state.count}
            </div>
                <button onClick={this.countNum}>
                    Count
                </button>
                </>
        )
    }


}

export default Counter;