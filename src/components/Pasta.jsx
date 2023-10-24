import React, { useEffect, useState } from 'react'
import { getPopularService } from '../service/recipes.service';
import styled from 'styled-components';

import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import Card from './ui/Card';
import Gradient from './ui/Gradient';
import { Link } from 'react-router-dom';


const Pasta = () => {

    const localstorageKey = "pasta"

    const [paste, setPaste] = useState([]);

    useEffect(() => {
      getPaste()
    },[])

    const getPaste = async() => {
      const localStore = localStorage.getItem(localstorageKey)

      if(localStore){
        setPaste(JSON.parse(localStore)) 
      }else{
        const data = await getPopularService(10, 'pasta')
        if(data && data.recipes){
          localStorage.setItem(localstorageKey,JSON.stringify(data.recipes))
          setPaste(data.recipes) 
        }   
      }
    }


  return (
    <Wrapper>
      <h3>Pasta</h3>

      <Splide 
        aria-label='Popular'
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "5rem"
        }}
      >
        {paste.map((item,index) =>{
          return (
            <SplideSlide key={index}>
              <Card>
               <Link to={`/detail/${item.id}`}>
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem -8rem;
`;


export default Pasta
