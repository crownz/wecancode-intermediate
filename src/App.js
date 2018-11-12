import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Card from './components/card';
import TweetForm from './components/tweet-form';

import styles from './app.module.scss';

class App extends Component {
  state = {
    isFormOpen: false,
  };

  openForm = () => {
    this.setState({ isFormOpen: true });
  };

  closeForm = () => {
    this.setState({ isFormOpen: false });
  };

  render() {
    return (
      <div className={styles.app}>
        <Button color="primary" variant="contained" classes={{ root: styles.btn }} onClick={this.openForm}>Add impression</Button>
        <div className={styles.cardGrid}>
          <div className={styles.cards}>
            <Card imageSrc="https://i.pinimg.com/564x/bb/d6/08/bbd6088f28d31753b1f2a7ba44be0b62.jpg" title="Atostogos kanaruose" />
            <Card imageSrc="https://i.pinimg.com/564x/bf/87/a2/bf87a2d6c831c24c77ad8b4e6be954ef.jpg" title="Atostogos kanaruose" />
            <Card imageSrc="https://i.pinimg.com/564x/ce/ef/0f/ceef0fb6467602a1d31cac561e261f31.jpg" title="Atostogos kanaruose" />
          </div>
          <TweetForm isOpen={this.state.isFormOpen} onClose={this.closeForm} />
        </div>
      </div>
    );
  }
}

export default App;
