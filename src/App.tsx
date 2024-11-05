import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Hero/MyComponent'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Hero/Menu';

function App() {
  return (
    <><div className="App">
      <MyComponent /> {/* Changed from Hero to MyComponent */}
    </div><Router>
        <Routes>
          <Route path="/" element={<MyComponent />} />     {/* Default HomePage */}
          <Route path="/menu" element={<Menu onNavigate={function (route: string): void {
            throw new Error('Function not implemented.');
          } } />} /> {/* Navigates to MenuPage */}
        </Routes>
      </Router></>
  );
}


export default App;
