import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import {useAppSelector} from '../../../../hooks/index';
import {getAdventuresQuests,
  getDetectiveQuests,
  getHorrorQuests,
  getMysticQuests,
  getSciFiQuests,
  loadQuests
} from '../../../../store/quest-data/selectors';
import QuestElement from '../quest/quest-element';
import { v4 as uuidv4 } from 'uuid';
import { Types } from '../../../../consts';
import { getType } from '../../../../store/user-process/selectors';
import { setType } from '../../../../store/user-process/user-process';
import {store} from '../../../../store/index'
import { Quest } from '../../../../types/quest';
import styled, { css } from 'styled-components';

const ActiveLink = styled(S.TabBtn)<{$isActive: boolean}>`
${({ $isActive }) =>
$isActive &&
css`
    border-bottom: 2px solid ${({ theme }) => theme.color.tangerine};
  `}
`;

const renderIcon = (type: string) => {
  switch (type) {
    case Types.ADVENTURES.type:
      return <IconAdventures />;
    case Types.HORROR.type:
      return<IconHorrors />
    case Types.MYSTIC.type:
      return <IconMystic />
    case Types.DETECTIVE.type:
      return <IconDetective />
    case Types.SCI_FI.type:
      return <IconScifi />
    default:
    return <IconAllQuests />
  }
};

const filterQuests = (quests: Quest[], type: string) => {
  switch (type) {
    case Types.ADVENTURES.type:
      return getAdventuresQuests(store.getState());
    case Types.DETECTIVE.type:
      return getDetectiveQuests(store.getState());
    case Types.HORROR.type:
      return getHorrorQuests(store.getState());
    case Types.MYSTIC.type:
      return getMysticQuests(store.getState());
    case Types.SCI_FI.type:
      return getSciFiQuests(store.getState());
    default:
      return quests;
  }
};

const QuestsCatalog = (): JSX.Element => {
  const currentType = useAppSelector(getType);
  const quests: Quest[] = useAppSelector(loadQuests);
  const handleTypeClick = (type: string) => {store.dispatch(setType(type))};

  return (
    <>
    <S.Tabs>
      {
        Object.values(Types).map(
          (type) => {
            return (<S.TabItem key={uuidv4()}>
              <ActiveLink
                $isActive={type.type === currentType}
                onClick={() => handleTypeClick(type.type)}
              >
                {renderIcon(type.type)}
                <S.TabTitle>{type.name}</S.TabTitle>
              </ActiveLink>
            </S.TabItem>)
        })
      }
    </S.Tabs>

    <S.QuestsList>
      {filterQuests(quests, currentType).map((quest: Quest) => <QuestElement key={uuidv4()} quest={quest} />)}
    </S.QuestsList>
</>
)}

export default QuestsCatalog;
