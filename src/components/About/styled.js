import styled from 'styled-components';

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    padding: 10px;
  }
  h1 {
    font-size: 30px;
    text-align: center;
    margin: 15px 0;
    @media (min-width: 700px) {
      font-size: 50px;
    }
  }
`;
