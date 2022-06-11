import React from 'react'
import DarkMode from '../DarkMode/DarkMode'
import { NavBar } from './styles'

const Nav = () => {
  return (
    <div>
        <NavBar>
          <DarkMode/>
        </NavBar>
    </div>
  )
}

export default Nav