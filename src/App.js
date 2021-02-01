import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import SignIn from './pages/Sign-in/Sign-in';
import AppEng from './pages/Eng/Eng';
import Samples from './pages/Services/Samples';
import Vaccinations from './pages/Services/Vaccinations';
import Organs from './pages/Services/Organs';
import NoMatchPage from './pages/NoMatchPage/NoMatchPage';
import EngSamples from './pages/Eng/services/Samples';
import EngVaccinations from './pages/Eng/services/Vaccinations';
import EngOrgans from './pages/Eng/services/Organs';
import UserPage from './pages/UserPage/UserPage';
import GuardedRoute from './components/GuardedRoute';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';
import UnderConstructionPage from './pages/NoMatchPage/UnderConstructionPage';

function App() {

  return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path='/sign-in' component={SignIn}/>
          <Route exact path='/en' component={AppEng} />
          <Route exact path='/muestras' component={Samples} />
          <Route exact path='/vacunas' component={Vaccinations} />
          <Route exact path='/organos' component={Organs} />
          <Route exact path='/samples' component={EngSamples} />
          <Route exact path='/vaccinations' component={EngVaccinations} />
          <Route exact path='/organs' component={EngOrgans} />
          <Route exact path='/under-construction' component={UnderConstructionPage} />
          <GuardedRoute path='/user-area' component={UserPage}/>
          <GuardedRoute path='/reports' component={Reports}/>  
          <GuardedRoute path='/settings' component={Settings}/>         
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
  )
}

export default App;
