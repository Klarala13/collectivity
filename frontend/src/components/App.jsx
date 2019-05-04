import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <Header />

        <div>
          <button className='btn col-lg-3 btn-outline-dark'>
            Login/Register
          </button>
          <p>OR</p>
          <button className='btn col-lg-3 btn-outline-dark'>
            go to Freebies
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
