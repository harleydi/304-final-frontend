import { useEffect, useState } from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import { getUserToken } from './Auth/authLocalStorage'
import { getAllUsers, getCases, validateUser } from './utils/apiHelper'

function App() {
  const [userToken, setUserToken] = useState(null) // 1
  const [refreshToken, setRefreshToken] = useState(false) //2
  const [activeUser, setActiveUser] = useState(false) //3
  const [activeUserProfile, setActiveUserProfile] = useState() //4
  const [selectedCase, setSelectedCase] = useState()  //5
  const [cases, setCases] = useState() // 6
  const [users, setUsers] = useState() //7
  
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

  useEffect(() => {
    const loadCases = async () => {
      const foundCases = await getCases()
      // console.log(cases)
      setCases(foundCases)
    }
    loadCases()
  }, [])

  useEffect(() => {
    const getusers = async () => {
        const response = await getAllUsers()
        setUsers(response.data)
    }
    getusers()
  }, [])

  

  return (
    <div className='bg-[#10172A] h-screen w-screen m-0 p-0' >
      <Navbar activeUser={activeUser} activeUserProfile={activeUserProfile} />
      <Outlet context={{ cases, users, selectedCase, setSelectedCase, setActiveUser, setActiveUserProfile, setUserToken, setRefreshToken, activeUserProfile, activeUser }} />
    </div>
  )
}

export default App
