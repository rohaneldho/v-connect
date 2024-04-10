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
    <div className="font-sans bg-white-800 p-8">
  {clubs.map((club, index) => (
    <div key={index} className="border-2 border-blue-900 rounded-lg p-6 mb-8 max-w-md mx-auto hover:shadow-lg transition duration-300">
      <h2 className="text-blue-100 text-lg mb-4">{club.clubName}</h2>
      <div className="text-blue-200">
        <img src={`data:image/jpeg;base64,${arrayBufferToBase64(club.posterImage.data)}`} alt="Poster" className="max-w-full h-auto rounded mb-4" />
        <p className="mb-2">Type: {club.type}</p>
        <p className="mb-2">Description: {club.description}</p>
        <a href={club.googleFormLink} className="text-blue-400 text-sm mr-2 hover:underline">Google Form Link</a>
      </div>
    </div>
  ))}
</div>

  );
};

export default ClubList;
