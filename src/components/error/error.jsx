import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import * as S from './contacts.styled';

const Error = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>404</PageTitle>
          <PageSubtext>Not Found</PageSubtext>
        </S.PageHeading>
        <S.Contacts>
          <S.ContactsList>
            <S.Link $isActiveLink to="/"> Квесты </S.Link>
          </S.ContactsList>
        </S.Contacts>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default Error;
