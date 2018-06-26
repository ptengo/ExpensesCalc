import React, { Component } from 'react'

export default class ButtonForm extends Component {



  render() {
    return (
      <button onClick={this.props.handleButtons}>
        {this.props.buttonData.name}
      </button>
    );
  }
}