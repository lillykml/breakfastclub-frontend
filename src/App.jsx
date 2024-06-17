import { useEffect, useState, useRef } from 'react'
import './App.css'
import Brunch from './components/Brunch'
import Hero from './components/Hero'
import NewBrunch from './components/NewBrunch'
import Login from './components/Login'
import User from './components/User'
import Toggleable from './components/Toggleable'
import Notification from './components/Notification'
import brunchService from './services/brunches'
import loginService from './services/login'


function App() {

  const [brunches, setBrunches] = useState([])
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState('')

  const brunchFormRef = useRef()
  

  useEffect(() => {
    brunchService
    .getAll()
    .then(initialBrunches => {
      setBrunches(initialBrunches)
    })
  }, [])

  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const loggedInUser = JSON.parse(loggedUserJSON)
      setUser(loggedInUser)
      brunchService.setToken(loggedInUser.token)
    }
  }, [])


  const createBrunch = (brunch) => {
    brunchFormRef.current.toggleVisibility()
    brunchService
    .create(brunch)
    .then(response => {
      setBrunches(brunches.concat(response))
      successMessage('Added a new brunch')
    })
  }

  const loginUser = (credentials) => {
    loginService
    .login(credentials)
    .then(response => {
      setUser(response)
      brunchService.setToken(response.token)
      window.localStorage.setItem('loggedInUser', JSON.stringify(response))
    })
    .catch(() => errorMessage('wrong username or password'))
  }

  const signUpUser = async (brunchID) => {
    const savedBrunch = await brunchService.signup(brunchID)
    setBrunches(brunches.map(brunch => brunch.id !== brunchID ? brunch : savedBrunch))
    successMessage('You have successfully signed up for the brunch')
  }

  const logoutUser = () => {
    setUser(null)
    brunchService.setToken(null)
    window.localStorage.removeItem('loggedInUser')
    successMessage('Logged out user')
  }

  const errorMessage = (message) => {
    setNotification(message)
    setNotificationType('error')
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const successMessage = (message) => {
    setNotification(message)
    setNotificationType('success')
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  return (
    <div className='h-screen -mx-0'>
      <Hero />
      <Notification message={notification} type={notificationType} />
      <div className='flex flex-col items-center'>
      {user && 
        <>
          <User logout={logoutUser} user={user} /> 
          <Toggleable buttonLabel={'organize a new brunch'} ref={brunchFormRef}><NewBrunch create={createBrunch}/></Toggleable>
        </>
      }
      <div className='my-9'>
        <h2 className='text-4xl mb-9'>Next brunches happening</h2>
        {brunches.map(brunch => <Brunch key={brunch.id} brunch={brunch} user={user} signup={() => signUpUser(brunch.id)}/>)}
      </div>
      {!user && <Toggleable buttonLabel={"login"}><Login login={loginUser} /></Toggleable>}
      </div>
    </div>
  )
}

export default App
