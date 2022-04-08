import React, { useState } from 'react';
import NavBtn from './NavBtn';
import style from '../styles/nav.module.css';
import { useHistory } from 'react-router-dom';

function Nav(props) {
  const [selected = 'home', setSelected] = useState();
  const navigate = useHistory();
  const navBtnHandler = (e) => {
    const { id: location } = e.target;
    setSelected(location);
    navigate.push(location);
  }

  return (
    <div className={style.navBar}>
      <NavBtn
        name={'home'}
        navBtnHandler={navBtnHandler}
        selected={selected}
      />
      <NavBtn
        name={'about'}
        navBtnHandler={navBtnHandler}
        selected={selected}
      />
      <NavBtn
        name={'skills'}
        navBtnHandler={navBtnHandler}
        selected={selected}
      />
      <NavBtn
        name={'projects'}
        navBtnHandler={navBtnHandler}
        selected={selected}
      />
      <NavBtn
        name={'contacts'}
        navBtnHandler={navBtnHandler}
        selected={selected}
      />
    </div>
  );
}

export default Nav;
