import React from 'react';

class Footer extends React.Component {
  componentDidMount() {
    document.title = 'Footer';
  }
  render() {
    return <div className='container'>Footer</div>;
  }
}

export default Footer;
