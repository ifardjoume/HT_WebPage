import React from 'react';
import GlobalStyle from './globalStyles';
import {Footer} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home';
import SignIn from './pages/Sign-in/Sign-in';
import AppEng from './pages/Eng/Eng';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/en' component={AppEng} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
