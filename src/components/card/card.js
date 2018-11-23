import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorder';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import styles from './card.module.scss';

class Card extends React.Component {
  state = {
    isDescriptionOpen: false,
  };

  openDescription = () => this.setState({ isDescriptionOpen: true });
  closeDescription = () => this.setState({ isDescriptionOpen: false });

  deleteCard = (e) => {
    e.stopPropagation();
    this.props.onDelete();
  };

  likeCard = (e) => {
    e.stopPropagation();
    this.props.toggleLike();
  }

  render() {
    const { imageSrc, title, description, isLiked, isMine, likesCount } = this.props;
    const imageStyle = { backgroundImage: `url(${imageSrc})`};
    return (
      <React.Fragment>
        <div className={styles.card} onClick={this.openDescription}>
          <div className={styles.overlay} />
          <div className={styles.imageContainer}>
            <div className={styles.image} style={imageStyle} />
          </div>
          <div className={styles.likes} onClick={this.likeCard}>
            {isLiked ? <FavoriteIcon className={likesCount > 0 ? styles.liked : ''} /> : <NotFavoriteIcon className={likesCount > 0 ? styles.liked : ''} />} 
            <span>{likesCount}</span>
          </div>
          <div className={styles.footer}>
            <div className={styles.title}>{title}</div>
            {isMine && <DeleteIcon className={styles.delete} onClick={this.deleteCard} />}
          </div>
        </div>
        <Modal open={this.state.isDescriptionOpen} onClose={this.closeDescription}>
          <div className={styles.modal}>
            <div className={styles.description}>
              {description}
            </div>
            <div className={styles.close}>
              <Button variant="outlined" className={styles.button} onClick={this.closeDescription}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withTheme()(Card);