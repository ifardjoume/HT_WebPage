import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home';
import SignIn from './pages/Sign-in/Sign-in';
import AppEng from './pages/Eng/Eng';
import Samples from './pages/Services/Samples';
import Vaccinations from './pages/Services/Vaccinations';
import Organs from './pages/Services/Organs';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/en' component={AppEng} />
        <Route path='/samples' component={Samples} />
        <Route path='/vaccinations' component={Vaccinations} />
        <Route path='/organs' component={Organs} />
      </Switch>
    </Router>
  )
}

export default App;
