import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import Title from '../components/ui/Title';
import Loader from '../components/ui/Loader';
import { getRecipiesComplexSearchService } from '../service/recipes.service';

const Searched = () => {

    const {searchValue} = useParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getSearch = async() => {
        setLoading(true);
        const data = await getRecipiesComplexSearchService(10, "", searchValue);
        if(data && data.results){
            setResults(data.results);
        }
        setLoading(false);
    }
        getSearch()
    },[searchValue]);

  return (
    <div>
    <Title>Stai cercando: {_.capitalize(searchValue)}</Title>

    {loading && <Loader />}

    {!loading && <Grid>
      {results.map(item => {
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

export default Searched
