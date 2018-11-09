import React from 'react';

import styles from './card.module.scss';

const Card = ({ imageSrc, title, isLiked, }) => {
  const imageStyle = { backgroundImage: `url(${imageSrc})`};
  return (
    <div className={styles.card}>
      <div className={styles.overlay} />
      <div className={styles.imageContainer}>
        <div className={styles.image} style={imageStyle} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;