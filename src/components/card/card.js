import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorder';
import MaterialCard from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import styles from './card.module.scss';

const Card = ({
  imageSrc,
  title,
  description,
  isLiked,
  isMine,
  likesCount,
  onDelete,
  toggleLike
}) => (
  <MaterialCard className={styles.card}>
    <CardMedia className={styles.media} image={imageSrc} title="Paella dish" />
    <CardContent className={styles.content}>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography component="p">{description}</Typography>
    </CardContent>
    <CardActions className={styles.actions} disableActionSpacing>
      <IconButton onClick={toggleLike}>
        {isLiked ? (
          <FavoriteIcon className={likesCount > 0 ? styles.liked : ''} />
        ) : (
          <NotFavoriteIcon className={likesCount > 0 ? styles.liked : ''} />
        )}
      </IconButton>
      <Typography component="p">{likesCount}</Typography>
      {isMine && (
        <IconButton onClick={onDelete} className={styles.delete}>
          <DeleteIcon />
        </IconButton>
      )}
    </CardActions>
  </MaterialCard>
);

export default withTheme()(Card);
