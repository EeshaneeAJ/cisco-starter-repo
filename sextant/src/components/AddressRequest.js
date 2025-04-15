import React, { useEffect, useState } from 'react';

function AddressRequest({ version }) {
  const [ip, setIp] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      version === 'v6'
        ? 'https://api64.ipify.org?format=json'
        : 'https://api.ipify.org?format=json';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setIp(data.ip))
      .catch((err) => {
        setError('Unable to fetch IP address');
        console.error(err);
      });
  }, [version]);

  return (
    <div className="ip-card">
      <h3>{version === 'v6' ? 'IPv6' : 'IPv4'} Address</h3>
      <p>{error ? error : ip}</p>
    </div>
  );
}

export default AddressRequest;
