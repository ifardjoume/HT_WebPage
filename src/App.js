import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home';
import SignIn from './pages/Sign-in/Sign-in';
import AppEng from './pages/Eng/Eng';
import Samples from './pages/Services/Samples';
import Vaccinations from './pages/Services/Vaccinations';
import Organs from './pages/Services/Organs';
import NoMatchPage from './pages/NoMatchPage/NoMatchPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/en' component={AppEng} />
        <Route exact path='/samples' component={Samples} />
        <Route exact path='/vaccinations' component={Vaccinations} />
        <Route exact path='/organs' component={Organs} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  )
}

export default App;
