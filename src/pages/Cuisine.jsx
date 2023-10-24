import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRecipiesComplexSearchService } from '../service/recipes.service';
import _ from 'lodash'
import Title from '../components/ui/Title';
import styled from 'styled-components';
import Loader from '../components/ui/Loader';

const Cuisine = () => {
  const localstorageKey = "cuisine"

  const {type} = useParams();
  const [cuisine, setCuisine] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCuisine = async() => {
      setLoading(true);
     // const localStore = localStorage.getItem(localstorageKey)
      const localStore = false;
  
      if(localStore){
        setCuisine(JSON.parse(localStore));
      }else{
        const data = await getRecipiesComplexSearchService(10,type)
        if (data && data.results){
          localStorage.setItem(localstorageKey,JSON.stringify(data.results))
          setCuisine(data.results)
        }
      } 
  
      setLoading(false);
    }
    getCuisine();
  },[type])



  return (
    <div>
      <Title>{_.capitalize(type)}</Title>

      {loading && <Loader />}

      {!loading && <Grid>
        {cuisine.map(item => {
          return <Card key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
          }
        )}
      </Grid>}
    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    width: 100%;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine
