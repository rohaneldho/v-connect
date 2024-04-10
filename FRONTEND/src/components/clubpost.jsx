import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";


const ClubList = () => {
  const navigate=useNavigate();
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
  const handleimgclick=()=>{
    navigate('/landing')
  }
  

  return (
    <>
     <div className="flex flex-col font-open-sans">
            <div className="main  flex justify-between items-center w-screen h-[7rem] bg-gray-800">
              <img onClick={handleimgclick}  className="h-[7rem]" src="https://findlogovector.com/wp-content/uploads/2022/05/vellore-institute-of-technology-vit-logo-vector-2022.png" alt="VIT Logo" />
              <h1 className="Title text-4xl font-bold text-white">
                Vellore Institute Of Technology
              </h1>
              <div></div>
              <div></div>
            </div>
          </div>
    <div className="font-sans bg-blue-50 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
     
      {clubs.map((club, index) => (
        <div key={index} className="border border-blue-300 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
          <div className="bg-blue-200 p-4">
            <h2 className="text-blue-800 text-lg font-semibold">{club.clubName}</h2>
          </div>
          <div className="p-4 relative">
            <a
              href={`data:image/jpeg;base64,${arrayBufferToBase64(club.posterImage.data)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/jpeg;base64,${arrayBufferToBase64(club.posterImage.data)}`}
                alt="Poster"
                className="w-full h-40 md:h-48 lg:h-56 xl:h-64 object-cover cursor-pointer hover:opacity-75 transition duration-300"
              />
            </a>
            <div className="mt-4">
              <p className="text-blue-600 mb-2">Type: {club.type}</p>
              <p className="text-blue-600 mb-2">Description: {club.description}</p>
              <a
                href={club.googleFormLink}
                className="text-blue-500 text-sm mr-2 hover:text-blue-700 hover:underline"
              >
                Google Form Link
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ClubList;
