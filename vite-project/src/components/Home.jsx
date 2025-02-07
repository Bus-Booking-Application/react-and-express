import React from 'react'
import Heading from '../pages/Heading'
import Trending from '../pages/Trending'
import Government from '../pages/Government'
import Why from '../pages/Why'
import Ready from '../pages/Ready'
import About from '../pages/About'
import Contact from '../pages/Contact'


const Home = () => {
  return (
    <div>
      <Heading/>
      <Trending/>
      <Government/>
      <Why/>
      <Ready/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home