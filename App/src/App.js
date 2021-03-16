import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import DashboardPage from './views/DashboardPage';


class App extends Component {
  render() {
    return (
      <DashboardPage />
    );
  }
}

export default App;
