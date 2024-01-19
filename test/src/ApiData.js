import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // The empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h2>API Data</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.id}  {user.first_name} {user.last_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;
