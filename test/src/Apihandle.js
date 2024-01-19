import React, { useState, useEffect } from 'react';

const ApiDataExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state to true when starting the request
        setLoading(true);
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); 
        // Check if the response is successful (status code in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json(); // Parse the JSON data
        // Update state with the fetched data
        setData(jsonData);
        setLoading(false); // Set loading state to false when the request is complete
      } catch (error) {
        // Handle errors
        setError(error.message);
        setLoading(false); // Set loading state to false when an error occurs
      }
    };
    fetchData(); // Call the fetchData function
  }, []);

  return (
    <div>
      <h2>API Data Example</h2>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title} {item.completed}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiDataExample;
