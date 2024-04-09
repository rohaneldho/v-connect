import React from 'react';
import { Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreateIcon from '@mui/icons-material/Create';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <div className="hcon flex items-center justify-center h-32 bg-blue-500 text-white font-bold text-3xl rounded-t-lg">
        Vellore Institute of Technology
      </div>
      <br/><br/><br/><br/>
      <div className='flex flex-wrap justify-center gap-4 p-4'>
      <button className='bg-blue-400 p-4 text-white hover:bg-blue-500 rounded-lg w-52' onClick={handleListings}>
          <NotificationsIcon fontSize="large" className="mr-2" />
          Notifications
        </button>
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
