import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import {Calculator} from './components/calculator';

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
