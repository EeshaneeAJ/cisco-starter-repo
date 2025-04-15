// src/App.js
import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Network Latency Metrics">
        <div className="card">Metric 1</div>
        <div className="card">Metric 2</div>
        <div className="card">Metric 3</div>
      </Exhibit>
      {/* Add more exhibits/components here */}
    </div>
  );
}

export default App;
