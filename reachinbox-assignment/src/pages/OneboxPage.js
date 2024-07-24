import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Onebox from '../components/Onebox';
import { setAuthToken } from '../api';

const OneboxPage = () => {
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get('token');

    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      setAuthToken(tokenFromUrl);
    }
  }, [location.search]);

  return (
    <div>
      {token ? <Onebox token={token} /> : <p>Loading...</p>}
    </div>
  );
};

export default OneboxPage;
