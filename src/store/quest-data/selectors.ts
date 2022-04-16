import { createSelector } from 'reselect';
import {
  NameSpace,
  Types
} from '../../consts';
import { Quest } from '../../types/quest';
import { State } from '../../types/state';

const loadQuests = (state: State): Quest[] => state[NameSpace.Data].quests;
const loadQuest = (state: State): Quest => state[NameSpace.Data].quest;
const getLoadedStatus = (state: State): string => state[NameSpace.Data].isLoaded;

const getAdventuresQuests = createSelector(
  loadQuests,  (quests) => quests.filter((quest) => quest.type ===  Types.ADVENTURES.type));
const getDetectiveQuests = createSelector(
  loadQuests,  (quests) => quests.filter((quest) => quest.type ===  Types.DETECTIVE.type));
const getHorrorQuests = createSelector(
  loadQuests,  (quests) => quests.filter((quest) => quest.type ===  Types.HORROR.type));
const getMysticQuests = createSelector(
  loadQuests,  (quests) => quests.filter((quest) => quest.type ===  Types.MYSTIC.type));
const getSciFiQuests = createSelector(
  loadQuests,  (quests) => quests.filter((quest) => quest.type ===  Types.SCI_FI.type));


export {
  loadQuests,
  loadQuest,
  getLoadedStatus,
  getAdventuresQuests,
  getDetectiveQuests,
  getHorrorQuests,
  getMysticQuests,
  getSciFiQuests
};
