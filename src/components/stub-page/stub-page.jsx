import {
  MainLayout,
  PageHeading,
} from 'components/common/common';
import * as S from './stub-page.styled';

const StubPage = () => {

  return (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
      </PageHeading>
      <S.PageText>Страница в разработке</S.PageText>
    </S.Main>
  </MainLayout>
)};

export default StubPage;
