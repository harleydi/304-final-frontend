import { useEffect, useState } from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import { getUserToken } from './Auth/authLocalStorage'
import { validateUser } from './utils/apiHelper'

function App() {
  const [userToken, setUserToken] = useState(null)
  const [refreshToken, setRefreshToken] = useState(false)
  const [activeUser, setActiveUser] = useState(false)
  const [activeUserProfile, setActiveUserProfile] = useState()
  const [selectedCase, setSelectedCase] = useState()
  
  useEffect(() => {
    const token = getUserToken()

    setUserToken(token)
  }, [refreshToken])

  useEffect(() => {
    const verifyUser = async () => {
      const verifyResult = await validateUser(userToken)
      if (verifyResult.success) {
        setActiveUserProfile(verifyResult.user)
        setActiveUser(true)
      } else {
        setActiveUser(false)
        setActiveUserProfile(null)
      }
    }
    if (userToken) verifyUser()
  }, [userToken])

  

  return (
    <div className='bg-[#10172A] h-screen w-screen m-0 p-0' >
      <Navbar activeUser={activeUser} activeUserProfile={activeUserProfile} />
      <Outlet context={{ selectedCase, setSelectedCase, setActiveUser, setActiveUserProfile, setUserToken, setRefreshToken, activeUserProfile }} />
    </div>
  )
}

export default App
