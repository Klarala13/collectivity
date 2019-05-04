import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import RootwithAut from './components/Router';

//style shits
import './css/style.css';
//import "/node_modules/bootstrap/scss/bootstrap";

render(
  <Router>
    <RootwithAut />
  </Router>,

  document.getElementById('main')
);
