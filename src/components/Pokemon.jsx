import React, { Component } from 'react';

class Pokemon extends Component {

    constructor() {
        super()

        this.state = {
            showValues: false,
            imageURL: '',
            height: 0,
            weight: 0
        }
    }

    onPokemonClick() {
        //console.log(this.props.url)

        fetch(this.props.url)
            .then(result => {
                return result.json()
            }).then(data => {
                console.log(data)

                this.setState({
                    showValues: true,
                    height: data.height,
                    weight: data.weight,
                    imageURL: data.sprites.front_default
                })
            }).catch(e => console.log(e))
    }

    onCloseTile() {
        this.setState({ showValues: false })
    }

    render() {
        console.log(this.state)
        if (!this.state.showValues) {
            return (
                <div className="row" onClick={this.onPokemonClick.bind(this)}>
                    <div className="col-6 offset-3">
                        <li className='card'>
                            <div class="card">
                                <div class="card-header">
                                    <h4>{this.props.name}</h4>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            );
        }

        else if (this.state.showValues) {
            return (
                <div className="row">
                    <div className="col-5 offset-4">
                        <div className="card card-view" onClick={this.onCloseTile.bind(this)}>
                            <img src={this.state.imageURL} class="card-img-top img-view"  alt=" " />
                            <div class="card-body">
                                <h5 class="card-title"> {this.props.name} </h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"> Height: {this.state.height} </li>
                                <li class="list-group-item"> Weight: {this.state.weight} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );

        } else {
            return (
                <div>Loading...</div>
            );
        }
    }
}

export default Pokemon;