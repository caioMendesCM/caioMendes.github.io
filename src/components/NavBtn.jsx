import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navBtn.module.css';

class NavBtn extends React.Component {
  render() {
    const { name, navBtnHandler, selected } = this.props;
    const classList =
      selected === name
        ? [styles.navBtn, styles.selected].join(' ')
        : styles.navBtn;
    return (
      <Link to={`/${name}`}>
        <div key={name} id={name} className={classList} onClick={navBtnHandler}>
          <img
            className={styles.icon}
            src={`../icons/${name}.svg`}
            alt={name}
          />
        </div>
      </Link>
    );
  }
}

export default NavBtn;
