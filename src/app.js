import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import TweetForm from './components/tweet-form';
import TweetList from './components/tweet-list';

import styles from './app.module.scss';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#E91E63',
    }
  },
});
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
      <MuiThemeProvider theme={theme}>
        <div className={styles.app}>
          <TweetList />
          <TweetForm isOpen={this.state.isFormOpen} onClose={this.closeForm} />
          <Button 
            color="primary" 
            variant="fab" 
            classes={{ root: styles.btn }} 
            aria-label="Create"
            onClick={this.openForm} 
          >
            <CreateIcon />
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
