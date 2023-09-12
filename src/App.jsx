 import { useState } from 'react'
import Bologs from './components/Bologs'
import Booksmark from './components/Booksmark'
import Navbar from './components/Navbar'
import SpandTime from './components/SpandTime'

function App() {
 const [mark, setMark] =useState([])
 const handleMark = (data) =>{
     const newMark = [...mark, data]
     setMark(newMark)
  }

  
  return (
    <>
    <div className='container mx-auto  px-10'>
      <Navbar/>
      <div className='md:flex'>
      <Bologs  handleMark={ handleMark }/>
       <Booksmark mark={mark}/>
      </div>
    </div>
    
    </>
  )
}

export default App
