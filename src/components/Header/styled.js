import styled from 'styled-components';
import biggerImage from './header-image.jpg';
import mediumImage from './banner-medium.jpg';
import smallImage from './banner-small.jpg';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    padding: 10px;
  }
  h1 {
    font-size: 45px;
    text-align: center;
    margin: 15px 0;
    @media (min-width: 700px) {
      font-size: 90px;
    }
  }
`;
export const HeaderImage = styled.img`
  width: 100%;
  height: 280px;
  background-image: url(${smallImage});
  @media (min-width: 600px) and (min-width: 1599px) {
    background-image: url(${mediumImage});
  }
  @media (min-width: 1600px) {
    background-image: url(${biggerImage});
    height: 340px;
  }
`;
