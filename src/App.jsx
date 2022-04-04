import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className='base'>
      <div className='navBar'>
        <Nav />
      </div>
      <>
        <Route path={'/home'} component={Home} />
        {/* <Route path={'/about'} component={About} />
        <Route path={'/projects'} component={Projects} />
        <Route path={'/skills'} component={Skills} />
        <Route path={'/contacts'} component={Contacts} /> */}
      </>
    </div>
  );
}

export default App;
