// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.coincap.io/v2/assets/');
      setCryptos(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Top Cryptocurrencies</h2>
      <ul>
        {cryptos.map(crypto => (
          <li key={crypto.id}>
            <Link to={`/coin/${crypto.id}`}>{crypto.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
