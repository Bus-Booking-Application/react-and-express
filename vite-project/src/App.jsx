import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import BusBooking from './components/BusDetailPage'
import Header from './pages/Header'
import Footer from './pages/Footer'
import About from './pages/About'
import Login from './components/Login'
import Contact from './pages/Contact'

function App (){
  return(
    
    <div className="flex flex-col min-h-screen ">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bus-booking' element={<BusBooking/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    <Footer/>
    </div>

  )
}

export default App