import React, { PureComponent } from 'react';

import LogInForm from './layout.js';
import './styles.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function showResults(values) {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

class LogIn extends PureComponent {
  render() {
    return (
      <div className="logInPage">
        <h2 className="logInFormTitle">Tic-Tac-Toe Log In</h2>
        <LogInForm onSubmit={showResults} />
      </div>
    );
  }
}

export default LogIn;
