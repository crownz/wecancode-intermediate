import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorder';

import styles from './card.module.scss';

const Card = ({ imageSrc, title, isLiked, isMine, likesCount, onDelete, toggleLike }) => {
  const imageStyle = { backgroundImage: `url(${imageSrc})`};
  return (
    <div className={styles.card}>
      <div className={styles.overlay} />
      <div className={styles.imageContainer}>
        <div className={styles.image} style={imageStyle} />
      </div>
      <div className={styles.likes} onClick={toggleLike}>
        {isLiked ? <FavoriteIcon className={styles.liked} /> : <NotFavoriteIcon className={styles.liked} />} {likesCount}
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>{title}</div>
        {isMine && <DeleteIcon className={styles.delete} onClick={onDelete} />}
      </div>
    </div>
  );
};

export default Card;