import React from 'react';
class Header extends React.Component {
  render() {
    return (
      <div className='container'>
        <div id='header'>
          <h3> Welcome to Collectivity</h3>
          <p className='text-center'>
            Collectivity is a platform that tries to promote a collective
            lifestyle that alienates us from capitalism. You can become a member
            and actively share and participate, or you can donate or request
            something as a one time thing. We encourage you to try it out and
            find the joy in sharing.
          </p>
        </div>
      </div>
    );
  }
}
export default Header;
