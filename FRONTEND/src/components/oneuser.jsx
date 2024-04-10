import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserDetails({ match }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/userdetails/${match.params.fullName}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [match.params.fullName]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Full Name: {user.fullName}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Instagram: {user.instagram}</p>
      <p>Twitter: {user.twitter}</p>
      <p>LinkedIn: {user.linkedIn}</p>
      <p>Github: {user.github}</p>
      <p>Campus: {user.campus}</p>
      <h2>Skills</h2>
      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2>Projects</h2>
      <ul>
        {user.projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetails;
