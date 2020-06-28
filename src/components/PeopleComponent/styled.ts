import styled from 'styled-components';

export const PeopleWrapper = styled.div``;
export const PeopleContentWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const PeopleImageWrapper = styled.div`
  display: flex;
  @media (min-width: 600px) {
    padding: 10px 30px;
  }
  @media (max-width: 599px) {
    padding: 7px;
  }
`;
export const PeopleImage = styled.img`
  width: 100px;
  height: auto;
`;
export const Counter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #eee;
  height: 40px;
  align-items: center;
  font-size: 25px;
  box-shadow: 0 0px 10px #000000ad;
`;
