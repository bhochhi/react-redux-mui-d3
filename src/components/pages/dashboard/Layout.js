require('styles/App.scss');
import React from 'react';

class Layout extends React.Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (      
      <div id="main-dashboard">     
        {this.props.children}
     </div>
    )
  }
}

export default Layout;
