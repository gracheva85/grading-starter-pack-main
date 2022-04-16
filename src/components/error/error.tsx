import { MainLayout, PageTitle, PageSubtext, Link } from '../common/common';
import * as S from './error.styled';

const Error = (): JSX.Element => {
  return (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>404</PageTitle>
          <PageSubtext>Not Found</PageSubtext>
        </S.PageHeading>
        <S.Container>
          <Link to="/"> Перейти на главную страницу </Link>
        </S.Container>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
)}

export default Error;
