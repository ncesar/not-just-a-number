import styled from 'styled-components';

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
