import styled from 'styled-components';
import { Container } from '../common/common';


const Main = styled(Container)`
  max-width: 556px;
  margin-top: 149px;
  margin-bottom: 149px;
  margin-left: 43.92vw;
`;

const PageText = styled.p`
  margin: 0;
  margin-bottom: 9px;
  padding: 0;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 144%;
  color: ${({ theme }) => theme.color.whiteSmoke};
`;

export {
  Main,
  PageText
};
