import React from 'react'
import Project from '../components/cp/Project'
import Hero1 from '../components/hero1/Hero1'
import Hero2 from '../components/hero2/Hero2'
import Vid from '../components/vid/Vid'
import News from '../components/news'

const index = () => {
  return (
    <>
        <Hero1 />
        <Hero2 />
        <Project />
        <Vid />
        <News />
    </>
  )
}

export default index