import React from 'react'
import Nav from '../components/Nav/Nav'
import DashboardBar from '../components/DashboardBar/DashboardBar'
import DashboardScatter from '../components/DashboardScatter/DashboardScatter'

const Home = () => {
  return (
    <>
      <Nav/>
      <DashboardBar/>
      <DashboardScatter/>
    </>
  )
}

export default Home