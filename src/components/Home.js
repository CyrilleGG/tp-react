import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Home() {
  const [data, setData] = useState({ hits: []});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://www.omdbapi.com/?apikey=8c71c030&r=json&t=Halloween&plot=short');

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <h3>{ data.Title }</h3>
      <p>Directed by { data.Director }</p>
      <p>Release year: { data.Year }</p>
      <p>Starring { data.Actors }</p>
      <p>The plot: { data.Plot }</p>
    </div>
  )
}

export default Home