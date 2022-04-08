import React from 'react';
import styles from '../styles/home.module.css';

class Home extends React.Component {
  constructor() {
    super();

    this.updateDimensions = this.updateDimensions.bind(this);

    this.state = {
      width: window.innerWidth - 64,
      height: window.innerHeight,
    };
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth - 64,
      height: window.innerHeight,
    });
  }

  render() {
    // const backgroundImage = '../images/codeBg.jpg';
    const profilePic = '../images/profilePic.png';
    const { width, height } = this.state;
    return (
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <div>
            <h1 className={styles.title}>Olá, eu sou</h1>
            <h1 className={styles.title}>Caio Mendes</h1>
          </div>
          <div>
            <p className={styles.text}>
              Desenvolvedor Web <span className={styles.blue}>Front-End</span>.
            </p>
            <p className={styles.text}>
              Estudante de desenvolvimento web na{' '}
              <span className={styles.green}>Trybe</span>.
            </p>
          </div>
        </div>
        <img className={styles.pic} src={profilePic} alt='' />
        {/* <canvas
          className={styles.shadow}
          width={width}
          height={height}></canvas> */}
        <canvas
          className={styles.backgroundImage}
          width={width}
          height={height}
        />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
}

export default Home;
