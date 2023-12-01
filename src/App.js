import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag: 'CTF{React_is_secure_but_be_careful}', 
      showFlag: false 
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CTF Challenge SIMPLE</h1>
          {this.state.showFlag && <p>{this.state.flag}</p>}
          <button onClick={() => this.setState({ showFlag: true })}>
            Show Hint
          </button>
        </header>
      </div>
    );
  }
}

export default App;
