import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import TweetForm from './components/tweet-form';
import TweetList from './components/tweet-list';
import Header from './components/header';
import Footer from './components/footer';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';

import styles from './app.module.scss';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#8bc34a'
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
        <CssBaseline />
        <div className={styles.app}>
          <Header>
            <Typography variant="h5" className={styles.appTitle}>
              WE CAN CODE Dream Destinations
            </Typography>
          </Header>
          <TweetList className={styles.tweetList}/>
          <TweetForm isOpen={this.state.isFormOpen} onClose={this.closeForm} />
          <Footer>
            <Button
              color="primary"
              variant="extendedFab"
              classes={{ root: styles.fabButton }}
              aria-label="Create"
              onClick={this.openForm}
            >
              <CreateIcon classes={{ root: styles.extendedIcon }}/>
              Create new destination
            </Button>
          </Footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
