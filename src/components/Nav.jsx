import React from 'react';
import NavBtn from './NavBtn';
import style from '../styles/nav.module.css';

class Nav extends React.Component {
  constructor() {
    super();
    this.navBtnHandler = this.navBtnHandler.bind(this);
    this.state = {
      selected: 'home',
    };
  }

  navBtnHandler(event) {
    this.setState({
      selected: event.target.id,
    });
  }

  render() {
    const { selected } = this.state;
    return (
      <div className={style.navBar}>
        <NavBtn name={'home'} navBtnHandler={this.navBtnHandler} selected={selected}/>
        <NavBtn name={'about'} navBtnHandler={this.navBtnHandler} selected={selected}/>
        <NavBtn name={'skills'} navBtnHandler={this.navBtnHandler} selected={selected}/>
        <NavBtn name={'projects'} navBtnHandler={this.navBtnHandler} selected={selected}/>
        <NavBtn name={'contacts'} navBtnHandler={this.navBtnHandler} selected={selected}/>
      </div>
    );
  }
}

export default Nav;
