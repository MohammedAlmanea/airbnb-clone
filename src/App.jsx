/* eslint-disable react/jsx-key */
import { NavBar } from './components/navbar'
import { Hero } from './components/Hero'
import Card from './components/Card'
import data from './data'
import './App.css'


function App() {
  
  const dataElement = data.map(data => {
    return (
  <Card
   key={data.id}
   data={data}
   /> 
    )
})

  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className='cards-list'>
      {dataElement}
      </div>
    </div>
  )
}

export default App
