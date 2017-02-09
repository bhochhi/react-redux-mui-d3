require('./page.css');
import React from 'react';

class Page extends React.Component {
 constructor(props) {
    super(props);
 }

  render() {
    const { router } = this.context;
    return (
      <div className="wrap page-content page">{'This is a page '}      
      </div>
    )
  }
}

Page.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Page;