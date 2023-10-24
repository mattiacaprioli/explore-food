import React from 'react'
import styled from 'styled-components'

// icons
import {FiHome} from 'react-icons/fi'
import {FaPizzaSlice} from 'react-icons/fa'
import {FaHamburger} from 'react-icons/fa'
import {GiChopsticks} from 'react-icons/gi'

import { NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <List>
        <Slink to={"/"}>
            <FiHome/>
            <h4>Home</h4>
        </Slink>
        <Slink to={"/cuisine/italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={"/cuisine/american"}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>

        <Slink to={"/cuisine/japanese"}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 0rem;
`

const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 0.5rem;
    text-decoration: none;
    background: linear-gradient(35deg, #66ffcc, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.7);

    h4{
        color: white;
        font-size: 0.9rem;
    }

    svg{
        color: white;
        font-size: 1.9rem;
    }

    &.active{
        background: linear-gradient(35deg, #313131, #66ffcc);

        h4{
            color: white;
            font-size: 0.8rem;
        }

        svg {
            color: white;
            font-size: 1.8rem;
        }
    }
`

export default Category
