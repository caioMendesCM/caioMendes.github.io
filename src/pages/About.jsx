import React from 'react';
import styles from '../styles/about.module.css';

function About() {
  const { content, leftContainer, textBlock, title, text, rightContainer, listBlock } = styles;

  return (
    <div className={content}>
      <div className={leftContainer}>
        <h1 className={title}>Sobre mim:</h1>
        <div className={textBlock}>
          <p className={text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores
          eaque minus, excepturi aperiam odit provident suscipit consectetur
          doloribus iste dolore sunt officiis. Assumenda labore aperiam ullam
          eveniet inventore dignissimos! Fugiat illum libero sit, consectetur ex
          voluptate molestiae, veniam dolores similique ducimus consequatur
          ipsa, beatae mollitia suscipit voluptatem obcaecati quod. Doloribus
          fuga ratione a labore saepe voluptate quae, exercitationem asperiores?
          Eius sint, aut expedita ipsa vel harum non qui iure eveniet adipisci
          accusamus a voluptas laborum consequatur, numquam doloribus
          consequuntur alias ipsum illum soluta veritatis? Est nisi repudiandae
          sequi aut. Doloribus nemo porro sequi, tempora eos nulla, atque ipsa
          dolorem saepe quisquam a rem! Et corrupti tenetur excepturi mollitia
          perspiciatis labore doloremque dolores! Voluptates in explicabo
          corporis necessitatibus repudiandae adipisci. Quos, nihil distinctio?
          Laboriosam voluptatum enim fugit quam, harum placeat excepturi sit
          sequi aspernatur animi at nam a explicabo quod amet quis, voluptatem
          atque quos eum minima quasi error iste!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores
          eaque minus, excepturi aperiam odit provident suscipit consectetur
          doloribus iste dolore sunt officiis. Assumenda labore aperiam ullam
          eveniet inventore dignissimos! Fugiat illum libero sit, consectetur ex
          voluptate molestiae, veniam dolores similique ducimus consequatur
          ipsa, beatae mollitia suscipit voluptatem obcaecati quod. Doloribus
          fuga ratione a labore saepe voluptate quae, exercitationem asperiores?
          Eius sint, aut expedita ipsa vel harum non qui iure eveniet adipisci
          accusamus a voluptas laborum consequatur, numquam doloribus
          consequuntur alias ipsum illum soluta veritatis? Est nisi repudiandae
          sequi aut. Doloribus nemo porro sequi, tempora eos nulla, atque ipsa
          dolorem saepe quisquam a rem! Et corrupti tenetur excepturi mollitia
          perspiciatis labore doloremque dolores! Voluptates in explicabo
          corporis necessitatibus repudiandae adipisci. Quos, nihil distinctio?
          Laboriosam voluptatum enim fugit quam, harum placeat excepturi sit
          sequi aspernatur animi at nam a explicabo quod amet quis, voluptatem
          atque quos eum minima quasi error iste!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores
          eaque minus, excepturi aperiam odit provident suscipit consectetur
          doloribus iste dolore sunt officiis. Assumenda labore aperiam ullam
          eveniet inventore dignissimos! Fugiat illum libero sit, consectetur ex
          voluptate molestiae, veniam dolores similique ducimus consequatur
          ipsa, beatae mollitia suscipit voluptatem obcaecati quod. Doloribus
          fuga ratione a labore saepe voluptate quae, exercitationem asperiores?
          Eius sint, aut expedita ipsa vel harum non qui iure eveniet adipisci
          accusamus a voluptas laborum consequatur, numquam doloribus
          consequuntur alias ipsum illum soluta veritatis? Est nisi repudiandae
          sequi aut. Doloribus nemo porro sequi, tempora eos nulla, atque ipsa
          dolorem saepe quisquam a rem! Et corrupti tenetur excepturi mollitia
          perspiciatis labore doloremque dolores! Voluptates in explicabo
          corporis necessitatibus repudiandae adipisci. Quos, nihil distinctio?
          Laboriosam voluptatum enim fugit quam, harum placeat excepturi sit
          sequi aspernatur animi at nam a explicabo quod amet quis, voluptatem
          atque quos eum minima quasi error iste!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores
          eaque minus, excepturi aperiam odit provident suscipit consectetur
          doloribus iste dolore sunt officiis. Assumenda labore aperiam ullam
          eveniet inventore dignissimos! Fugiat illum libero sit, consectetur ex
          voluptate molestiae, veniam dolores similique ducimus consequatur
          ipsa, beatae mollitia suscipit voluptatem obcaecati quod. Doloribus
          fuga ratione a labore saepe voluptate quae, exercitationem asperiores?
          Eius sint, aut expedita ipsa vel harum non qui iure eveniet adipisci
          accusamus a voluptas laborum consequatur, numquam doloribus
          consequuntur alias ipsum illum soluta veritatis? Est nisi repudiandae
          sequi aut. Doloribus nemo porro sequi, tempora eos nulla, atque ipsa
          dolorem saepe quisquam a rem! Et corrupti tenetur excepturi mollitia
          perspiciatis labore doloremque dolores! Voluptates in explicabo
          corporis necessitatibus repudiandae adipisci. Quos, nihil distinctio?
          Laboriosam voluptatum enim fugit quam, harum placeat excepturi sit
          sequi aspernatur animi at nam a explicabo quod amet quis, voluptatem
          atque quos eum minima quasi error iste!
          </p>
        </div>
      </div>
      <div className={rightContainer}>
        <h1 className={title}>Curiosidades:</h1>
        <div className={listBlock}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
