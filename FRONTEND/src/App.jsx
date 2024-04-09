// import { useState , useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LOGIN from './components/login'
import ProfilePage from './components/userPage'
import SignUp from './components/signUp';
const App = () => {
  // const [token, setToken] = useState(false)

  return (
    <div>
      <Routes>
<<<<<<< HEAD
        
=======
        <Route path="/" element={<ProfilePage />}  />
>>>>>>> 6c6b34e5acdc3688f1bc115ad1fd0be1c49d0ce1
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LOGIN />} />

        {/* <Route path="/login" element={<Login setToken={setToken} />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createSchedule" element={<Createschedule />} />
        <Route path="/history" element={<Task />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/setAdmin" element={<SetAdmin />} />
        <Route path="/remove" element={<Remove />} />
        <Route path="/uploadFile" element={<Upload />} /> */}
      </Routes>
    </div>
  )
}

export default App
