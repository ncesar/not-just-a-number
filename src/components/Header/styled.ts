import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
  @media (min-width: 600px) {
    padding: 10px 100px;
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
export const TextWrapper = styled.div`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;
