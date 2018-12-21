// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
// import Drawer from '@material-ui/core/Drawer'
// import { Link } from 'gatsby'

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// }

// class ButtonAppBar extends Component {
//   constructor(props) {
//     super(props)
//     // const { classes } = this.props;
//   }

//   render() {
//     const { classes } = this.props
//     console.log(this.props)
//     return (
//       <div className={classes.root}>
//         <AppBar position="static" onClick={this.props.handleToggle}>
//           <Toolbar>
//             <IconButton
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="Menu"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" color="inherit" className={classes.grow}>
//               Menu
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <div>
        
//         </div>
//         <Drawer
//           open={this.props.open}
//           onRequestChange={open => this.setState({ open })}
//         >
//           <Link
//             to="/page-2"
//             activeStyle={{
//               color: 'red',
//             }}
//           >
//             Strona domowa
//           </Link>
//           <Link
//             to="/"
//             activeStyle={{
//               color: 'red',
//             }}
//           >
//             O nas
//           </Link>
//         </Drawer>
//       </div>
//     )
//   }
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

// export default withStyles(styles)(ButtonAppBar)



import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  list: {
    width: 250,
    paddingTop:100
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginLeft: 10,
    marginRight: 20,
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Home','O nas', 'Oferta', 'Kontakt'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );


    return (
      <div style={{
        position: 'fixed',
        zIndex: 3000,
        background:'#fff',
        width:'69px'}}>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
            <MenuIcon />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);

