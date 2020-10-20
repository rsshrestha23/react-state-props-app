import React, { Component } from "react";
import ShowInformation from "./ShowInformation";


export default class DisplayName extends Component {
    render() {
        return (
            <div>
                <h1>Display Name</h1>
                <p>Your name: {this.props.name}</p>
            </div>
        )
    }
}
