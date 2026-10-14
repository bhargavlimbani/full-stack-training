import React from 'react'
import Create from './components/Create'
import { Route, Routes } from 'react-router-dom'
import Read from './components/Read'


function App() {
  return (
    <div className='container'>
        <Routes>
            <Route  path='/' element={<Read />}/>
            <Route  path='/create' element={<Create />}/>
        </Routes>
    </div>
  )
}

export default App