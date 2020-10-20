import React, { Component } from "react";
import DisplayName from "./DisplayName";

class ShowInformation extends Component {
    render() {
        return (
            <div>
                <h1>From Child Component</h1>
                <DisplayName
                    name={this.props.full_name}
                />
            </div>
        )
    }
}

export default ShowInformation;