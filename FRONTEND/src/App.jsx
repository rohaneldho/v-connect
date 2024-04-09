// import { useState , useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LOGIN from './components/login'
import ProfilePage from './components/userPage'
import SignUp from './components/signUp';
import Landing from './components/landing'
import MakeProj from './components/createproject';
import Listings from './components/listings';

import ClubListings from './components/clublistings';

import ClubLogin from './components/clublogin';
import Frontpage from './components/frontpage';
const App = () => {
  // const [token, setToken] = useState(false)

  return (
    <div>
      <Routes>
      <Route path="/" element={<Frontpage />} />    
        <Route path="/login" element={<LOGIN />}  />   
         <Route path="/signup" element={<SignUp />} />
        <Route path="/makeproj" element={<MakeProj />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/userpage" element={<ProfilePage />} />

        <Route path="/clublisting" element={<ClubListings />} />

        <Route path="/clublogin" element={<ClubLogin />} />
        {/* <Route path='/listings' element={<} */}
        </Routes>
      

        {/* <Route path="/login" element={<Login setToken={setToken} />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createSchedule" element={<Createschedule />} />
        <Route path="/history" element={<Task />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/setAdmin" element={<SetAdmin />} />
        <Route path="/remove" element={<Remove />} />
        <Route path="/uploadFile" element={<Upload />} /> */}
      
    </div>
  )
}

export default App
