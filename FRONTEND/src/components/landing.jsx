import React from 'react';
import { Container, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreateIcon from '@mui/icons-material/Create';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from 'react-router-dom';

function CustomContainer({ icon, text }) {
  return (
    <div className="w-1/4 p-4 border border-gray-300 rounded-lg bg-white shadow-md flex items-center justify-center">
      <div className="mr-4">
        {icon}
      </div>
      <Typography variant="h5">{text}</Typography>
    </div>
  );
}

function Landing() {
  
  const navigate = useNavigate();
  const handlemakeproj = async(e) => {
    e.preventDefault();
    navigate('/makeproj')
  };

  const handlelistings = async(e)=>{
    e.preventDefault();
    navigate('/listings');
  }
  return (
    <div>
      <div className="hcon flex items-center justify-center h-32 bg-blue-500 text-white font-bold text-3xl">
        Vellore Institute of Technology
      </div>
      <br/><br/><br/><br/>
        <div>
          <button >
          <NotificationsIcon fontSize="large" />
          Notifications
          </button>
          <button onClick={handlelistings} >
          <ListIcon fontSize="large" />
          Project Listings
          </button>

          <button onClick={handlemakeproj}>
          <CreateIcon fontSize="large" />
          Host
          </button>

          <button>
          <HistoryIcon fontSize="large" />
          History
          </button>

          <button>
          <PersonIcon fontSize="large" />
          Profile
          </button>

        </div>
        {/* <CustomContainer icon={} text="Host" />
        <CustomContainer icon={} text="History" />
        <CustomContainer icon={} text="Profile" /> */}
    </div>
  );
}

export default Landing;
