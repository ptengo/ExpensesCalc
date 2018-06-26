import React, { Component } from 'react';
import ReminderList from './components/reminderList.component';
import ReminderForm from './components/reminderForm.component';
import ButtonForm from './components/button-form.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      reminders: [
        { id: 1, title: "title1", description: "desc1" },
        { id: 2, title: "title2", description: "desc2" }
      ],
      buttonData: { name: 'Delete All' }
    };
  }

  buttonsHandler(event) {
    event.preventDefault();
    this.setState({ reminders: [] })
  }

  handleOnAddReminder(event) {
    event.preventDefault();
    let reminder = {
      title: event.target.title.value,
      description: event.target.description.value
    };
    this.setState({
      reminders: this.state.reminders.concat([reminder])
    });
  }

  render() {
    return (
      <div>
        <ReminderList reminders={this.state.reminders} />
        <ReminderForm onAddReminder={this.handleOnAddReminder.bind(this)} />
        <ButtonForm buttonData={this.state.buttonData} handleButtons={this.buttonsHandler.bind(this)} />
      </div>
    );
  }
}

export default App;