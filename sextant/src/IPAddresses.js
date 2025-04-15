import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IPAddresses = () => {
  const [ipv4, setIPv4] = useState('');
  const [ipv6, setIPv6] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch IPv4
    axios.get('https://api.ipify.org?format=json')
      .then(response => setIPv4(response.data.ip))
      .catch(err => setError('Could not fetch IPv4 address.'));

    // Fetch IPv6
    axios.get('https://api64.ipify.org?format=json')
      .then(response => setIPv6(response.data.ip))
      .catch(err => setError('Could not fetch IPv6 address.'));
  }, []);

  return (
    <div>
      <h2>IP Address Info</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p><strong>IPv4:</strong> {ipv4 || 'Loading...'}</p>
      <p><strong>IPv6:</strong> {ipv6 || 'Loading...'}</p>
    </div>
  );
};

export default IPAddresses;
