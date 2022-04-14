import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, Status} from '../../consts';

const initialState = {
  quests: [],
  quest: {},
  isLoaded: Status.Unknown,
};

const questData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    getQuests: (state, action) => {
      state.quests = action.payload;
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
