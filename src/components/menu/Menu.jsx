import React from 'react'
import Category from './Category'
import Search from './Search'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {MdRestaurantMenu} from 'react-icons/md'

function Menu() {
  return (
    <div>
      <Nav>
        <MdRestaurantMenu />
        <Logo to={"/"}>Explore Food</Logo>
      </Nav>
      <Search />
      <Category />
    </div>
  )
}

const Logo = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 1.5rem;
  }
`;

export default Menu
