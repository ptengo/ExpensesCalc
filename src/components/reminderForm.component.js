import React, { Component } from 'react'

export default class ReminderForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onAddReminder}>
        <input type="text" placeholder="Enter Title" name="title" />
        <input type="text" placeholder="Enter Description" name="description" />
        <input type="submit" value="Save" />
      </form>
    );
  }
}