import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <AppRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
