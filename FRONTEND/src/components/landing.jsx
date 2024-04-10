import React from 'react';
import { Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreateIcon from '@mui/icons-material/Create';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from 'react-router-dom';
import {Link } from 'react-router-dom';
function Landing() {
  const navigate = useNavigate();

  const handleMakeProject = () => {
    navigate('/makeproj');
  };
  const handleProfile = () => {
    navigate('/userpage');
  };

  const handleListings = () => {
    navigate('/listings');
  };
  const clubpost = () => {
    navigate('/clubpost');
  };
  const handleimgclick=()=>{
    navigate('/landing')
  }
  

  return (
    <div>
      <div className="flex flex-col">
            <div className="main  flex justify-between items-center w-screen h-[7rem] bg-gray-800">
              <img className="h-[7rem]" onClick={handleimgclick} src="https://findlogovector.com/wp-content/uploads/2022/05/vellore-institute-of-technology-vit-logo-vector-2022.png" alt="VIT Logo" />
              <h1 className="Title text-4xl font-bold text-white">
                Vellore Institute Of Technology
              </h1>
              <div></div>
              <div></div>
            </div>
          </div>
      <br/><br/><br/><br/>
      <div className='flex flex-wrap justify-center gap-4 p-4'>
      <Link to='/clubpost'><button className='bg-blue-400 p-4 text-white hover:bg-blue-500 rounded-lg w-52' onClick={clubpost}>
          <NotificationsIcon fontSize="large" className="mr-2" />
          Clubs
        </button></Link>
        <button className='bg-blue-400 p-4 text-white hover:bg-blue-500 rounded-lg w-52' onClick={handleListings}>
          <ListIcon fontSize="large" className="mr-2" />
          Project Listings
        </button>
        <button className='bg-blue-400 p-4 text-white hover:bg-blue-500 rounded-lg w-52' onClick={handleMakeProject}>
          <CreateIcon fontSize="large" className="mr-2" />
          Host
        </button>
        <button className='bg-blue-400 p-4 text-white hover:bg-blue-500 rounded-lg w-52'>
          <HistoryIcon fontSize="large" className="mr-2" />
          History
        </button> 
        <button className='bg-blue-400 p-4 text-white hover:bg-blue-500 rounded-lg w-52' onClick={handleProfile}>
          <PersonIcon fontSize="large" className="mr-2" />
          Profile
        </button>
      </div>
    </div>
  );
}

export default Landing;
