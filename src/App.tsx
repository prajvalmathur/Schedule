import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Hero/Menu';

function App() {
  return (
    <div className="App">
      <Menu onNavigate={function (route: string): void {
        throw new Error('Function not implemented.');
      } } /> {/* Changed from Hero to MyComponent */}
    </div>
  );
}

export default App;
