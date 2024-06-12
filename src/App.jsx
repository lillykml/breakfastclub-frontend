import { useEffect, useState } from 'react'
import './App.css'
import Brunch from './components/Brunch'
import Hero from './components/Hero'
import NewBrunch from './components/NewBrunch'
import brunchService from './services/brunches'


function App() {

  const [brunches, setBrunches] = useState([])

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

  return (
    <>
    <Hero />
    <NewBrunch create={createBrunch}/>
    {brunches.map(brunch => <Brunch key={brunch.id} brunch={brunch}/>)}
    </>
  )
}

export default App
