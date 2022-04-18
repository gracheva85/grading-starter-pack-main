import {PageTitle} from '../common';
import * as S from './loading-screen.styled';

const LoadingScreen = (): JSX.Element => {
  return (
    <S.Main forwardedAs="main">
      <PageTitle>Loading...</PageTitle>
    </S.Main>
  );
};

export default LoadingScreen;
