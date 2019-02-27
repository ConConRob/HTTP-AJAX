import React, { Component } from 'react';
import Container from './Components/Container';
import {Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/friends/'>See Friends</Link>
        <Route path='/friends' component={Container} />

      </div>
    );
  }
}

export default App;
