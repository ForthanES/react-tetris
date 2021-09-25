import styled from 'styled-components';
import bgImage from '../../img/bg1.jpg';

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  height: 80vh;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
