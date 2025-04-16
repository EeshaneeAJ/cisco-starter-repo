import React, { useEffect, useState } from 'react';

function Latency() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:55455");

    socket.onopen = () => {
      console.log("WebSocket connection established ✅");
    };

    socket.onmessage = (event) => {
      const serverTime = parseInt(event.data); // or Number(event.data)
      const now = Date.now();
      setLatency(now - serverTime);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error ❌:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed ❌");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="latency-card">
      <h3>Network Latency</h3>
      <p>{latency !== null ? `${latency} ms` : "Waiting for data..."}</p>
    </div>
  );
}

export default Latency;
