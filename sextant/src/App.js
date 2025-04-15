// src/App.js
import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddresses from './IPAddresses';
import AddressRequest from './components/AddressRequest';
function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Network Latency Metrics">
        <div className="card">Metric 1</div>
        <div className="card">Metric 2</div>
        <div className="card">Metric 3</div>
        <AddressRequest version="v4" />
        <AddressRequest version="v6" />
      </Exhibit>
      {/* Add more exhibits/components here */}
      <IPAddresses />
    </div>
  );
}

export default App;
