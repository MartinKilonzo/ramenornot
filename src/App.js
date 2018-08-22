import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Contribute from './Contribute/Contribute';
import View from './View/View';

class ViewButton extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.changeView(this.props.view)}>
          {this.props.name}
        </button>
      </div>
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      view: 'view'
    }
  }

  changeView = newView => {
    this.setState({ view: newView })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ramen or Not Ramen?</h1>
        </header>
        <p className="App-intro">
          Send us your ramen or check out previous submissions!
        </p>
        {this.state.view !== 'contribute' && <ViewButton changeView={this.changeView} view='contribute' name='Contribute'></ViewButton>}
        {this.state.view !== 'view' && <ViewButton changeView={this.changeView} view='view' name='View'></ViewButton>}

        {this.state.view === 'contribute' && <Contribute />}
        {this.state.view === 'view' && <View />}

      </div>
    );
  }
}

export default App;
