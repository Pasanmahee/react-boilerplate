/*import React from 'react';

const App = () => {
    return (
        <div>HDDKMKSMdkasd</div>
    );
}

export default App;*/

import React, { Component } from "react";

class App extends Component {
    constructor(){
        super();

        this.state={
            type: 'initial state'
        }
    }

    onSelectTypeChange(event){
        this.setState({
            type: event.target.value
        })
    }



    render(){
        console.log('this is the state', this.state)


        return(
            <div className="container">
                <div>
                <h1>Pokemon gotta catch em all</h1>
                <form action="">
                    <label htmlFor="">Select Your Pokemon</label>
                    <select name="" id="" onChange={this.onSelectTypeChange.bind(this)}>
                        <option value="1">Water</option>
                        <option value="2">Fighting</option>
                        <option value="3">Flying</option>
                    </select>
                    <button className="btn btn-success">Select the type</button>
                </form>
                </div>
            </div>
        )
    }
}

export default App;