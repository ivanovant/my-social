import './App.css';
import React from 'react';
import Header from "./components/jsx/Header";
import Sidebar from "./components/jsx/leftSidebar";

import './components/css/leftSidebar.css'
import './components/css/Header.css'
import Content from "./components/jsx/Content";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
