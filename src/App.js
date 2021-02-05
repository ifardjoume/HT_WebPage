import React,{useState,useEffect} from 'react';
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
import JavierC from './pages/Cofounders/JavierC';
import IvanF from './pages/Cofounders/IvanF';
import EmilianoB from './pages/Cofounders/EmilianoB';
import ThisSystemPage from './pages/ThisSystemPage/ThisSystemPage';
import LoadingScreen from './components/loadingPage/LoadingPage';

function setCookies(){
  Cookies.set('locale', "es");
  return "es"
}


const App = () => {
  const [loading, setLoading] = useState(true)
  const locale = Cookies.get('locale') ? Cookies.get('locale') : setCookies();
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])
  return (
    <>
    {loading === false ? (
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
          <Route exact path='/this' component={ThisSystemPage} />
          <Route exact path='/IvanFardjoume' component={IvanF} />
          <Route exact path='/JavierCuello' component={JavierC} />
          <Route exact path='/EmilianoBuitrago' component={EmilianoB} />
          <GuardedRoute path='/user-area' component={UserPage}/>
          <GuardedRoute path='/reports' component={Reports}/>  
          <GuardedRoute path='/settings' component={Settings}/>         
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </IntlProvider>
     ) : (<LoadingScreen />
     )}
    </>
  )
}

export default App;
