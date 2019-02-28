import React, { Component } from 'react';
import Container from './Components/Container';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledApp = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  nav{
    display:flex;
    justify-content: space-around;
  }
  h1{
    text-align:center;
  }
`
class App extends Component {
  render() {
    return (
      <StyledApp>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/friends/'>See Friends</Link>
          <Route path='/friends/' render={()=>
              <Link to='/friends/add'>Add Friends</Link>
            }
          />
        </nav>
        <Route exact path='/' render={()=><h1>WELLCOME HOME</h1>} />
        <Route path='/friends' component={Container} />

      </StyledApp>
    );
  }
}

export default App;
