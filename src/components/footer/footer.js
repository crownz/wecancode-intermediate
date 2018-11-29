import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

import styles from './footer.module.scss';

class Footer extends React.Component {

  // can add some actions in AppBar

  render() {
    return (
      <AppBar position="fixed" color="secondary" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          {this.props.children}
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
};

export default Footer;