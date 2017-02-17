import React from 'react';
import NavBar from 'components/NavBar/navbar.container';


class Main extends React.Component{

getChildContext() {
    return {
      location: this.props.location
    }
  }

render(){
      return  (
        <div>       
          <NavBar location={this.props.location} />
          {this.props.children}
        </div>
      );
  }
}

Main.childContextTypes = {
    location: React.PropTypes.object
}

export default Main;
