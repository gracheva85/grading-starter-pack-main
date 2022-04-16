import {store} from '../store/index';
import {Quest} from "./quest";

type UserProcess = {
  order: Record<string, never>,
  type: string,
  currentMenu: string,
};

type QuestData = {
  quests: Quest[],
  quest: Quest,
  isLoaded: string,
};

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {UserProcess, QuestData, State, AppDispatch};
