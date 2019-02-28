import React, { Component } from 'react';
import Container from './Components/Container';
import {Route, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledApp = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  nav{
    display:flex;
    justify-content: space-around;
    a{text-decoration: none;}
    .active{
      border-bottom: 2px solid lightsalmon;
    }
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
          <NavLink exact to='/'>Home</NavLink>
          <NavLink exact to='/friends/'>See Friends</NavLink>
          <Route path='/friends/' render={()=>
              <NavLink exact to='/friends/add'>Add Friends</NavLink>
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
