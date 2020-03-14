import React, { Component } from "react";

import PokemonList from './PokemonList'

class App extends Component {
    constructor() {
        super();

        this.state = {
            type: '1',
            pokemonList: []
        }
    }

    onSelectTypeChange(event) {
        this.setState({
            type: event.target.value
        })
    }

    onButtonClick(event) {
        event.preventDefault(); // to emit default value and replace the second value
        //console.log(this.state.type + 'Do valuable thing');

        const API_URL = `https://pokeapi.co/api/v2/type/${this.state.type}/`;

        fetch(API_URL)
            .then(result => {
                return result.json()
            }).then(data => {
                this.setState({ pokemonList: data.pokemon })
            })
    }



    render() {
        //console.log('this is the state', this.state)


        return (
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
                        <button className="btn btn-success"
                            onClick={this.onButtonClick.bind(this)}
                        >Select the type</button>

                        <PokemonList pokemonResult={this.state.pokemonList} />
                    </form>
                </div>
            </div>
        )
    }
}

export default App;