import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import DashboardBar from '../components/DashboardBar/DashboardBar'
import DashboardScatter from '../components/DashboardScatter/DashboardScatter'
import { Dashboards, FilterButton, HomeContainer, LabelContainer } from './styles'
import { FaFilter } from 'react-icons/fa'

const Home = () => {
  const[filter, setFilter] = useState(false)
  const[showBar, setShowBar] = useState(true)
  const[showScatter, setShowScatter] = useState(true)
  
  const handleClick = () => {
    setFilter(visible => !visible)
  }

  const handleClickBar = () => {
    setShowBar(visible => !visible)
  }

  const handleClickScatter = () => {
    setShowScatter(visible => !visible)
  }

  return (
    <>
      <Nav/>
      <HomeContainer>
        <h1>Dashboard</h1>
        <h3 id='subtitle'>Desafio Técnico Front-End</h3>
        <FilterButton
          onClick={handleClick}
            >
          <div>
            <FaFilter id='filterIcon'/>
          </div>
          <div>
            <h3>Filtrar</h3>
          </div>
        </FilterButton>
        {filter && (
        <LabelContainer>
          <label>
            <h5>Barras</h5>
            <input 
                type="checkbox" 
                name="checkBar" 
                id="checkBar" 
                onClick={handleClickBar}
                checked={showBar}
                />
          </label>
          <label>
            <h5>Scatter</h5>
            <input 
                type="checkbox" 
                name="checkScatter" 
                id="checkScatter" 
                onClick={handleClickScatter}
                checked={showScatter}
                />
          </label>
        </LabelContainer>
        )}
      </HomeContainer>
      <Dashboards>
        {showBar && (
          <DashboardBar/>
        )}
        {showScatter && (
          <DashboardScatter/>
        )}
      </Dashboards>
    </>
  )
}

export default Home