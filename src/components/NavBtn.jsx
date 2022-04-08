import React from 'react';
import styles from '../styles/navBtn.module.css';

function NavBtn(props) {
  const { name, navBtnHandler, selected } = props;
  const classList =
    selected === name
      ? [styles.navBtn, styles.selected].join(' ')
      : styles.navBtn;

  return (
    <div key={name} id={name} className={classList} onClick={navBtnHandler}>
      <img className={styles.icon} src={`../icons/${name}.svg`} alt={name} />
    </div>
  );
}

export default NavBtn;
