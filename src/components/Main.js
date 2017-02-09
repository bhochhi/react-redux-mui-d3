import React from 'react';
import NavigationBar from './NavigationBar';


class Main extends React.Component{

getChildContext() {
    return {
      location: this.props.location
    }
  }

render(){
      return  (
        <div>       
          <NavigationBar location={this.props.location} />
          {this.props.children}
        </div>
      );
  }
}

Main.childContextTypes = {
    location: React.PropTypes.object
}

export default Main;
