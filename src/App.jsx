import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path={'/home'} component={Home} />
      {/* <Route path={'/about'} component={About} />
      <Route path={'/projects'} component={Projects} />
      <Route path={'/skills'} component={Skills} />
      <Route path={'/contacts'} component={Contacts} /> */}
    </BrowserRouter>
  );
}

export default App;
