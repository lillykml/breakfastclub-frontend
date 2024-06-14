import { useEffect, useState } from 'react'
import './App.css'
import Brunch from './components/Brunch'
import Hero from './components/Hero'
import NewBrunch from './components/NewBrunch'
import Login from './components/Login'
import User from './components/User'
import brunchService from './services/brunches'
import loginService from './services/login'


function App() {

  const [brunches, setBrunches] = useState([])
  const [user, setUser] = useState(null)
  

  useEffect(() => {
    brunchService
    .getAll()
    .then(initialBrunches => {
      setBrunches(initialBrunches)
    })
  }, [])


  const createBrunch = (brunch) => {
    brunchService
    .create(brunch)
    .then(response => {
      setBrunches(brunches.concat(response))
    })
  }

  const loginUser = (credentials) => {
    loginService
    .login(credentials)
    .then(response => {
      setUser(response)
      brunchService.setToken(response.token)
    })
  }

  const logoutUser = () => {
    setUser(null)
  }

  return (
    <>
      <Hero />
      {!user && <Login login={loginUser} />}
      {user && 
        <>
          <User logout={logoutUser} user={user} /> 
          <NewBrunch create={createBrunch}/>
        </>
      }
      {brunches.map(brunch => <Brunch key={brunch.id} brunch={brunch}/>)}
    </>
  )
}

export default App
