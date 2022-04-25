import * as S from './quest.styled';
import {generatePath} from 'react-router-dom';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import { translateLevel } from '../../../../common';
import { AppRoute } from '../../../../consts';
import { Quest } from '../../../../types/quest';

type QuestProps = {
  quest: Quest;
}

const QuestElement = ({quest}: QuestProps): JSX.Element => {

  return (
    <S.QuestItem >
        <S.QuestItemLink to={generatePath(AppRoute.Quest, {id: String(quest.id)})}>
          <S.Quest>
            <S.QuestImage
              src={`/grading-starter-pack-main/${quest.previewImg}`}
              width="344"
              height="232"
              alt={quest.title}
            />

            <S.QuestContent>
              <S.QuestTitle>{quest.title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {`${quest.peopleCount[0]} - ${quest.peopleCount[1]}`} чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {translateLevel(quest.level)}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>
)};

export default QuestElement;
