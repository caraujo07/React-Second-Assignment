import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  // Set the initial state with an empty string
  state = {
    userInput: ''
  }

  // Catching the texto from an input form
  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  };

  // Delete a clicked character and update the general text
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {

  // Create a javascript array with the characters from the typed phrase
  const charList = this.state.userInput.split('').map((char, index) => {
    return <Char 
      character={char} 
      key={index}
      clicked={() => this.deleteCharHandler(index)}/>;
  });

    return (
      <div className="App">
        <h1>Second Assignment - Lists and Conditionals</h1>
        <label>Type something: </label>
        <input 
          type="text" 
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>

        {/* Validation component to determine if the text is too short or long enough */}
        <Validation inputLength={this.state.userInput.length} />

        {/* Print on the screen every typed character */}
        {charList}
      </div>
    );
  }
}

export default App;
