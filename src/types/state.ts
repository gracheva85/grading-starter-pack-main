import {store} from '../store/index';

import { QuestType } from "./quest-type";

type UserProcess = {
  order: Record<string, never>,
  type: string,
  currentMenu: string,
};

type QuestData = {
  quests: QuestType[],
  quest: QuestType,
  isLoaded: string,
};

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {UserProcess, QuestData, State, AppDispatch};
