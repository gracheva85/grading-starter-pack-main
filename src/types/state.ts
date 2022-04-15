import {store} from '../store/index.js';

import { Quest } from "./quest";

type UserProcess = {
  questId: number,
  order: Record<string, never>,
};

type QuestData = {
  quests: Quest[],
  quest: Quest | null,
};

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {UserProcess, QuestData, State, AppDispatch};
