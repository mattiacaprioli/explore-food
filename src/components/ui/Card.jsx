import styled from "styled-components";

const Card = styled.div`
  min-height: 16rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
  }

  &:hover img {
    transform: scale(1.05);
  }

  p {
    position: absolute;
    z-index: 10;
    left: 5%;
    bottom: 0%;
    transform: translateY(-50%, 0%);
    color: white;
    display: flex;
    width: 100%;
    text-align: start;
    font-weight: 600;
    font-size: 0.6rem;
    height: 23%;
    max-width: 70%;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1rem; /* Imposta la dimensione desiderata per desktop */
    }
  }
`;

export default Card;
