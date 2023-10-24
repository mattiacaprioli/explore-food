import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecipesInformationService } from '../service/recipes.service';
import Loader from '../components/ui/Loader';
import styled from 'styled-components';

const Detail = () => {
  
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const tabArray = ['instructions','ingredients']

    const [tab, setTab] = useState(tabArray[0]);

    const myTabVerify = (name) => {
        return name === tab
    }

    const getClassActive = (name) => {
        return myTabVerify(name) ? 'active' : ''
    }

    useEffect(() => {
        const getDetail = async() => {
            setLoading(true);
            const data = await getRecipesInformationService( id );
            if(data){
                setDetail(data);
            }
            setLoading(false);
        }
        getDetail()
    },[id]);

  return (
    <div>
        {loading && <Loader />}

        {!loading && detail && 
            <DetailWrapper>
                <div>
                    <h2>{detail.title}</h2>
                    <img src={detail.image} alt={detail.title} />
                </div>

                <Info>
                    <Button 
                        onClick={() => setTab(tabArray[0])}
                        className={getClassActive(tabArray[0])}
                    >
                        Instructions
                    </Button>
                    <Button 
                        onClick={() => setTab(tabArray[1])}
                        className={getClassActive(tabArray[1])}
                    >
                        Ingredients
                    </Button>

                    {myTabVerify(tabArray[0]) && <div>
                        <h3 dangerouslySetInnerHTML={{__html : detail.summary}}></h3>
                        <h3 dangerouslySetInnerHTML={{__html : detail.instructions}}></h3>
                    </div>}
                    {myTabVerify(tabArray[1]) && <div>
                        <ul>
                            {detail.extendedIngredients.map((ing) =>{
                                return <li key={ing.id}>
                                    {ing.original}
                                </li>
                            })}
                        </ul>
                    </div>}
                </Info>
            </DetailWrapper>
        }
    
    </div>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #66ffcc, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
    }
    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Detail
