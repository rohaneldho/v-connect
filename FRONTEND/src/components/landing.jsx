import React from 'react';
import { Container, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreateIcon from '@mui/icons-material/Create';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';

function CustomContainer({ icon, text }) {
  return (
    <div className="container1 m-4 border-2 border-black w-64 bg-blue-500 text-white flex flex-col items-center justify-center">
      <div className="c1">
        {icon}
        <Typography variant="h5">{text}</Typography>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div>
      <div className="hcon flex items-center justify-center h-32 bg-blue-500 text-white font-bold text-3xl">
        Vellore Institute of Technology
      </div>
      <br/><br/><br/><br/>
      <Container className="container flex flex-wrap justify-center" maxWidth="xl">
        <CustomContainer icon={<NotificationsIcon />} text="Notifications" />
        <CustomContainer icon={<CreateIcon />} text="Host" />
        <CustomContainer icon={<HistoryIcon />} text="History" />
        <CustomContainer icon={<PersonIcon />} text="Profile" />
      </Container>
    </div>
  );
}



export default Landing;