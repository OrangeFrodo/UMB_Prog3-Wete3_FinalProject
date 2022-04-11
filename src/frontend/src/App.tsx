import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";


import ListEmployee from './components/ListEmployee';

function App() {
  return (
    <div>
      <ListEmployee />
    </div>
  );
}

export default App;
