import React from 'react'
import Hero from '../Component/Hero'
import Approach from '../Component/Approach'
import Mission from '../Component/Mission'
import About from '../Component/About'
import WhatWeBuild from '../Component/WhatWeBuild'
import Products from '../Component/Product'
import Capabilities from '../Component/Capabilities'
import TechStack from '../Component/TechStack'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Approach/>
        <Mission/>
        <About/>
        <WhatWeBuild/>
        <Products/>
        <Capabilities/>
        <TechStack/>
    </div>
  )
}

export default Home