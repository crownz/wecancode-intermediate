import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './tweet-form.module.scss';

class TweetForm extends React.Component {
  state = {
    title: '',
    description: '',
    imageUrl: '',
    errors: {
      title: false,
      description: false,
      imageUrl: false,
    }
  };

  handleChange = name => event => {
    const errors = {
      ...this.state.errors,
      [name]: !event.target.value,
    };

    this.setState({
      [name]: event.target.value,
      errors,
    });
  };

  handleSave = () => {
    const { title, description, imageUrl } = this.state;
    if (!title || !description || !imageUrl) {
      const errors = {
        title: !title,
        description: !description,
        imageUrl: !imageUrl
      };
      this.setState({ errors });
      return;
    }
  };

  render() {
    const { isOpen, onClose } = this.props;

    return (
      <Modal
        open={isOpen}
        onClose={onClose}
      >
        <div className={styles.modal}>
          <div className={styles.form}>
            <TextField
              label="Title"
              error={this.state.errors.title}
              className={styles.input}
              value={this.state.title}
              onChange={this.handleChange('title')}
              variant="outlined"
              required
            />
            <TextField
              label="Description"
              error={this.state.errors.description}
              multiline
              rows="4"
              className={styles.input}
              value={this.state.description}
              onChange={this.handleChange('description')}
              variant="outlined"
              required
            />
            <TextField
              label="Image url"
              error={this.state.errors.imageUrl}
              className={styles.input}
              value={this.state.imageUrl}
              onChange={this.handleChange('imageUrl')}
              variant="outlined"
              required
            />
          </div>
          <div className={styles.actions}>
            <Button variant="outlined" className={styles.button} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="outlined" color="primary" className={styles.button} onClick={this.handleSave}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TweetForm;