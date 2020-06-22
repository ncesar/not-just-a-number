import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Homepage } from './layout/Homepage';
import { AboutPage } from './layout/About';
import './index.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={AboutPage} />
    </Router>
  );
}

export default App;
