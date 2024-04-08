import { useState , useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard'


const App = () => {
  const [token, setToken] = useState(false)

  useEffect(() => {
    if (token) {
      const expiration = new Date()
      expiration.setTime(expiration.getTime() + 1 * 60 * 60 * 1000)
      const expires = 'expires=' + expiration.toUTCString()
      document.cookie = `token=${token}; ${expires}; path=/`
    }
  }, [token])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}  />
        {/* <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<Signup />} />
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
