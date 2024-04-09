import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClubList = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    axios.get('/clubpost')
      .then(response => {
        setClubs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#34568B', padding: '20px' }}>
      {clubs.map((club, index) => (<>
        <div key={index} style={{ border: '2px solid #4E7AC7', borderRadius: '8px', padding: '15px', marginBottom: '20px', backgroundColor: '#92A8D1', maxWidth: '400px', margin: '0 auto' }}>
          <h2 style={{ color: '#333', fontSize: '18px', marginBottom: '10px', textAlign: 'left', paddingLeft: '10px' }}>{club.clubName}</h2>
          <div style={{ textAlign: 'left', paddingLeft: '10px' }}>
            <img src={`data:image/jpeg;base64,${arrayBufferToBase64(club.posterImage.data)}`} alt="Poster" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', display: 'block', margin: '0 auto', marginBottom: '10px' }} />
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px', textAlign: 'left' }}>Type: {club.type}</p>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px', textAlign: 'left' }}>Description: {club.description}</p>
            <a href={club.googleFormLink} style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px', marginRight: '10px' }}>Google Form Link</a>
          </div>
        </div>
        <br></br></>
      ))}
    </div>
  );
};

export default ClubList;
