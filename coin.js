// Coin.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Coin = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
      setCoinData(response.data.data);
    };
    fetchData();
  }, [id]);

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{coinData.name}</h2>
      <p>Symbol: {coinData.symbol}</p>
      <p>Price: ${coinData.priceUsd}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Coin;
