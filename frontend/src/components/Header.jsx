import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header p-5">
          <h3> Welcome to Collectivity</h3>
          <p className="text-center">
            Collectivity is a platform that tries to promote a collective
            lifestyle that alienates us from capitalism. You can share items or
            your skills (know-how) with other users. We encourage you to try it
            out and find the joy in sharing.
          </p>
        </div>
      </div>
    );
  }
}
export default Header;
