import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Cookies from 'js-cookie';
import translations from './translations/index';
import Home from './pages/HomePage/Home';
import SignIn from './pages/Sign-in/Sign-in';
import Samples from './pages/Services/Samples';
import Vaccinations from './pages/Services/Vaccinations';
import Organs from './pages/Services/Organs';
import NoMatchPage from './pages/NoMatchPage/NoMatchPage';
import UserPage from './pages/UserPage/UserPage';
import GuardedRoute from './components/GuardedRoute';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';
import UnderConstructionPage from './pages/NoMatchPage/UnderConstructionPage';


const locale = Cookies.get('locale') ? Cookies.get('locale') : 'en';



function App() {
  return (
    <IntlProvider locale={locale} messages={translations[locale]}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path='/sign-in' component={SignIn}/>
          <Route exact path='/samples' component={Samples} />
          <Route exact path='/vaccinations' component={Vaccinations} />
          <Route exact path='/organs' component={Organs} />
          <Route exact path='/under-construction' component={UnderConstructionPage} />
          <GuardedRoute path='/user-area' component={UserPage}/>
          <GuardedRoute path='/reports' component={Reports}/>  
          <GuardedRoute path='/settings' component={Settings}/>         
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </IntlProvider>
  )
}

export default App;
