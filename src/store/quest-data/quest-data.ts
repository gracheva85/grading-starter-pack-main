import {createSlice} from '@reduxjs/toolkit';
import {defaultQuest, NameSpace, Status} from '../../consts';
import { QuestData } from '../../types/state';

const initialState: QuestData = {
  quests: [],
  quest: defaultQuest,
  isLoaded: Status.Unknown,
};

const questData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    getQuests: (state, action) => {
      state.quests = action.payload;
      state.isLoaded = Status.Isloaded;
    },
    getQuest: (state, action) => {
      state.quest = action.payload;
      state.isLoaded = Status.Isloaded;
    },
    setStatus: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

const {getQuests, getQuest, setStatus} = questData.actions;

export {questData, getQuests, getQuest, setStatus};
