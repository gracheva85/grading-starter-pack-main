import { useEffect, useState } from 'react';
import { LoadingScreen, MainLayout } from '../common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import BookingModal from './components/booking-modal/booking-modal';
import { useAppSelector } from '../../hooks/index';
import { translateLevel } from '../../common';
import { getLoadedStatus, loadQuest } from '../../store/quest-data/selectors';
import { Status, Types } from '../../consts';
import { useParams } from 'react-router-dom';
import { fetchQuestAction } from '../../store/api-actions';
import Error from '../error/error';
import {store} from '../../store/index'

const translateType = (type: string) => {
  switch (type) {
    case Types.ADVENTURES.type:
      return Types.ADVENTURES.name.toLowerCase();
    case Types.HORROR.type:
      return Types.HORROR.name.toLowerCase();
    case Types.MYSTIC.type:
      return Types.MYSTIC.name.toLowerCase();
    case Types.DETECTIVE.type:
      return Types.DETECTIVE.name.toLowerCase();
    default: return Types.SCI_FI.name.toLowerCase();
  }
};

const DetailedQuest = (): JSX.Element => {
  const id =  Number(useParams<{id: string}>().id);
  const isLoaded = useAppSelector(getLoadedStatus);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const quest = useAppSelector(loadQuest);

  useEffect(()=>{
    store.dispatch(fetchQuestAction(id));
  }, [id]);

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
          src={`/grading-starter-pack-main/${quest.coverImg}`}
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
                <S.FeatureTitle>{quest.duration} ??????</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${quest.peopleCount[0]} - ${quest.peopleCount[1]}`} ??????</S.FeatureTitle>
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
              ??????????????????????????
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseBtnClick={setIsBookingModalOpened} peopleCounts={quest.peopleCount} />}
      </S.Main>
    </MainLayout>
  )};

export default DetailedQuest;
