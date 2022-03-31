import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Base extends Component {
  render() {
    const paths = ['Home', 'About', 'Projects', 'Skills', 'Contacts'];
    return (
    <div className='bar'>
      {paths.map((path) => <Route path={`/${path.toLowerCase()}`} component={path}/>)}
    </div>
    );
  }
}

export default Base;