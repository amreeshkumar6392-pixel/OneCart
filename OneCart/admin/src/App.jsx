import React, { useContext } from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Lists from './pages/Lists'
import { AdminDataContext } from './context/AdminContext'

function App() {
  const {adminData} = useContext(AdminDataContext)
  return (
   <>
  { !adminData ? <Login/> : <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/lists' element={<Lists/>}/>
   </Routes>
   </>
   }
   </>
   
  )
}

export default App