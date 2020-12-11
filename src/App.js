import GlobalStyle from './globalStyles';
import {Navbar, Footer} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home';
import SignIn from './pages/Sign-in/Sign-in'
function App() {
  return (
    <Router>
       <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Home} />
        <Route path='/about' component={Home} />
        <Route path='/contact' component={Home} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
