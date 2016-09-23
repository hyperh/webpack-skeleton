import React, { Component } from 'react';

import styles from './App.scss';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.app}>
        Hello! This is a Webpack skeleton project!
      </div>
    );
  }
}

export default App;
