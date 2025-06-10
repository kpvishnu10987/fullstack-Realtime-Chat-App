import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./pages/HomePage.jsx"
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import { useAuthStore } from './store/useAuthStore.js'
import {Loader} from "lucide-react"
import { Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import { useThemeStore } from './store/useThemeStore.js'


const App = () => {
  const { authUser, checkAuth ,isCheckingAuth,onlineUsers} = useAuthStore();

  const {theme} =useThemeStore();

  console.log({onlineUsers});

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log({ authUser })

  if (isCheckingAuth&&!authUser){
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
}


  return (
    <div data-theme={theme} className="h-screen flex flex-col overflow-hidden">
  <Navbar />

  <div className="pt-16 flex-1 overflow-hidden">
    <Routes>
      <Route path="/" element={authUser ? <Homepage /> : <Navigate to="/login" />} />
      <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
      <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
    </Routes>
  </div>

  <Toaster />
</div>
  )
}

export default App
