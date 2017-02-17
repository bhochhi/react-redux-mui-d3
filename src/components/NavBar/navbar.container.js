require('styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

import FontIcon from 'material-ui/FontIcon';
import {Tabs,Tab} from 'material-ui';

import IconMenu from 'material-ui/IconMenu';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import HomeIcon from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';
import config from 'config';
import is from 'is_js';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash'

const devtools = (() => {
  if (config.appEnv === 'dev') {
    const DevTools = require('components/DevTools').default;    
    return <DevTools />;
  } else {
    return null;
  }
})();


const styles = {
  title: {
    cursor: 'pointer',
  },
  menu:{
  
    padding:'0 20px', 
    height:'64px'
  },
  iconMenu:{
    color:'#CFF',
    padding:'0 20px', 
    height:'64px'
  }
};


const menu =[
  {
    label : "page ",
    link:'page'
  },
   {
    label : "page 1",
    link:'page1'
   },
   {
    label : "page 2",
    link:'page2'
  }
];

class NavBar extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
    open:false,
    value:this.props.location.pathname,
    tabIndex:this.findActiveTab()
    } 
  }
  
  findActiveTab = () => {
    console.log('pathname',this.props.location.pathname);
     switch(this.props.location.pathname){
       case '/':
        return -1;
       case '/page':
        return 0;
       case '/page1':
        return 1;
          case '/page2':
        return 2;
       default:
        return 3;
     }
  }
  handleRequestClose = () => {
      this.setState({
        open: false,
      });
    };
   handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };


changeValue = (tabIdx) => {
  this.setState({tabIndex:tabIdx});
}
  
  toDashBoard = () =>{
    this.setState({tabIndex:-1});    
  }

  render() {
    const { router } = this.context;
  

    var profileMenu = (
      <IconMenu 
          iconButtonElement={<IconButton style={styles.iconMenu}><i className="material-icons">account_circle</i></IconButton>}
          onChange={this.handleChangeSingle}
          anchorOrigin = {{ vertical: 'bottom', horizontal: 'left',}} 
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Profile" />
          <MenuItem value="2" primaryText="Settings" />
          <MenuItem value="4" primaryText="Help" />
          <MenuItem value="5" primaryText="Sign out" />
        </IconMenu>
    )
   
    return (      
      <div id="navBar">         
              {devtools}
              <AppBar showMenuIconButton={false} title={<Link className="title" to="/" onClick={this.toDashBoard} > AppTitle </Link>}>
                <TabMenu menuItems={menu} />
                {profileMenu}
         </AppBar>
        {this.props.children}
     </div>
    )
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NavBar;
