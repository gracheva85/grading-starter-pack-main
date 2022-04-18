import { Status } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getLoadedStatus } from '../../store/quest-data/selectors';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../common/common';
import { LoadingScreen } from '../detailed-quest/components/components';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

const Home = (): JSX.Element => {
  const isLoading = useAppSelector(getLoadedStatus);

  if (isLoading === Status.Unknown) {
    return (
      <LoadingScreen />
    );
  }

  return (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>Выберите тематику</PageTitle>
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </PageHeading>
      <QuestsCatalog />
    </S.Main>
  </MainLayout>
)}

export default Home;
