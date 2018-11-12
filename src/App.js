import React from 'react';
import Button from '@material-ui/core/Button';

import TweetForm from './components/tweet-form';
import TweetList from './components/tweet-list';

import styles from './app.module.scss';

class App extends React.Component {
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
        <TweetList />
        <TweetForm isOpen={this.state.isFormOpen} onClose={this.closeForm} />
      </div>
    );
  }
}

export default App;
