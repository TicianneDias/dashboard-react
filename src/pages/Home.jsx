import React from 'react'
import Nav from '../components/Nav/Nav'
import DashboardBar from '../components/DashboardBar/DashboardBar'
import DashboardScatter from '../components/DashboardScatter/DashboardScatter'
import { Dashboards, FilterButton, HomeContainer } from './styles'
import { FaFilter } from 'react-icons/fa'
import GlobalStyles from '../styles/GlobalStyles'

const Home = () => {
  return (
    <>
      <Nav/>
      <GlobalStyles/>
      <HomeContainer>
        <h1>Dashboard</h1>
        <h3 id='subtitle'>Desafio Técnico FrontEnd</h3>
        <FilterButton>
          <div>
            <FaFilter id='filterIcon'/>
          </div>
          <div>
            <h3>Filtrar</h3>
          </div>
        </FilterButton>
      </HomeContainer>
      <Dashboards>
          <DashboardBar/>
          <DashboardScatter/>
      </Dashboards>
    </>
  )
}

export default Home