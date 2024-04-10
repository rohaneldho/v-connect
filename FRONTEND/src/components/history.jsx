import React, { useState, useEffect } from 'react';
import axios from 'axios';

function History() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch user project history from backend
    axios.get('/history')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching user project history:', error);
      });
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <h1>User Project History</h1>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            <h3>{project.name}</h3>
            <p>Description: {project.desc}</p>
            <p>Number of People: {project.num}</p>
            <p>Type: {project.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
