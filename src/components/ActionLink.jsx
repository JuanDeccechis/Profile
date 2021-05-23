import React, { Component } from "react";

class ActionLink extends Component {

    render() {
        return (
            <a href={this.props.to} target="_blank" rel="noreferrer">
                {this.props.linkText}
            </a>
        );
    };
}

export default ActionLink;