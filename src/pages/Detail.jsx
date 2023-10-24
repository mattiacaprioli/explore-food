import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipesInformationService } from '../service/recipes.service';
import Loader from '../components/ui/Loader';
import styled from 'styled-components';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const tabArray = ['instructions', 'ingredients'];
  const [tab, setTab] = useState(tabArray[0]);

  useEffect(() => {
    const getDetail = async () => {
      setLoading(true);
      const data = await getRecipesInformationService(id);
      if (data) {
        setDetail(data);
      }
      setLoading(false);
    };
    getDetail();
  }, [id]);

  return (
    <DetailContainer>
      {loading && <Loader />}
      {!loading && detail && (
        <>
          <Header>
            <HeaderInfo>
              <h2>{detail.title}</h2>
              <p>{detail.readyInMinutes} mins preparation</p>
            </HeaderInfo>
            <HeaderImage>
              <img src={detail.image} alt={detail.title} />
            </HeaderImage>
          </Header>

          <Tabs>
            <Button
              onClick={() => setTab(tabArray[0])}
              className={tab === tabArray[0] ? 'active' : ''}
            >
              Instructions
            </Button>
            <Button
              onClick={() => setTab(tabArray[1])}
              className={tab === tabArray[1] ? 'active' : ''}
            >
              Ingredients
            </Button>
          </Tabs>

          {tab === tabArray[0] && (
            <Section>
              <h3 dangerouslySetInnerHTML={{ __html: detail.summary }} />
              <h3 dangerouslySetInnerHTML={{ __html: detail.instructions }} />
            </Section>
          )}

          {tab === tabArray[1] && (
            <Section>
              <ul>
                {detail.extendedIngredients.map((ing) => (
                  <li key={ing.id}>{ing.original}</li>
                ))}
              </ul>
            </Section>
          )}
        </>
      )}
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  margin: 5rem 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const HeaderInfo = styled.div`
  flex: 1;
`;

const HeaderImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
`;

const Tabs = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0.3rem;

  &.active {
    background: linear-gradient(35deg, #66ffcc, #313131);
    color: white;
  }
`;

const Section = styled.div`
  h3 {
    margin: 2rem 0;
  }

  p {
    color: #313131;
    font-weight: 400;
  }

  li {
    font-size: 1.2rem;
  }
`;

export default Detail;
