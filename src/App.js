import './App.css';
import Navbar from './components/navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SignIn from './pages/sign-in';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product' component={Home} />
        <Route path='/about' component={Home} />
        <Route path='/contact' component={Home} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
    </Router>
  )
}

export default App;
