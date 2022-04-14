import {PageTitle} from 'components/common/common';
import * as S from './loading-screen.styled';

const LoadingScreen = () => {
  return (
    <S.Main forwardedAs="main">
      <PageTitle>Loading...</PageTitle>
    </S.Main>
  );
};

export default LoadingScreen;
