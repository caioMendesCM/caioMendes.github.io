import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className='base'>
      <div className='navBar'>
        <Nav />
      </div>
      <>
        <Switch>
          <Route exact path='/' component={Home}>
            {<Redirect to='/home' />}
          </Route>
          <Route path={'/home'} component={Home} />
          <Route path={'/about'} component={About} />
          {/* <Route path={'/projects'} component={Projects} />
          <Route path={'/skills'} component={Skills} />
          <Route path={'/contacts'} component={Contacts} /> */}
        </Switch>
      </>
    </div>
  );
}

export default App;
