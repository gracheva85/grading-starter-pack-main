import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal} from './components/components';
import {useAppSelector} from '../../hooks/index';
import { translateLevel } from 'common';
import { getLoadedStatus, loadQuest, loadQuests } from 'store/quest-data/selectors';
import { IncomingType, Status } from 'consts';
import { useParams } from 'react-router-dom';
import { fetchQuestAction } from 'store/api-actions.js';
import Error from 'components/error/error';
import {store} from '../../store/index'
import LoadingScreen from './loading-screen/loading-screen';

const TranslatedType = {
  Adventures: 'Приключения',
  Horror: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
};

const translateType = (type) => {
  switch (type) {
    case IncomingType.Adventures:
      return TranslatedType.Adventures;
    case IncomingType.Horror:
      return TranslatedType.Horror;
    case IncomingType.Mystic:
      return TranslatedType.Mystic;
    case IncomingType.Detective:
      return TranslatedType.Detective;
    default: return type;
  }
};

const DetailedQuest = () => {
  const {id} = useParams();
  const isLoaded = useAppSelector(getLoadedStatus);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const quests = useAppSelector(loadQuests);
  const quest = useAppSelector(loadQuest);
  const currentQuest = quests.find(item => item.id === Number(id));

  useEffect(()=>{
    store.dispatch(fetchQuestAction(id));
  }, [id]);

  console.log('isLoaded', isLoaded);
  console.log('quest', quest);

  if (isLoaded===Status.IsNotloaded) {
    return <Error />;
  }

  if (isLoaded===Status.Unknown) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${quest.coverImg}`}
          alt={quest.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{translateType(quest.type)}</S.PageSubtitle>
          </S.PageHeading>
           <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${quest.peopleCount[0]} - ${quest.peopleCount[1]}`} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{translateLevel(quest.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>
             <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseBtnClick={setIsBookingModalOpened} peopleCount={currentQuest.peopleCount} />}
      </S.Main>
    </MainLayout>
  )};

export default DetailedQuest;
