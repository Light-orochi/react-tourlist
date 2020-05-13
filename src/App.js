import React from 'react';
import Navbar from './componnents/navbar/Navbar';
import './App.scss';
import Tourlist from './tourlist/index';


function App() {
  
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
      <div className="row mt-4">
      <Tourlist /><hr/>
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
