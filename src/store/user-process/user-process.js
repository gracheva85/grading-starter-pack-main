import {createSlice} from '@reduxjs/toolkit';
import {Menu, NameSpace, Types} from '../../consts';

const initialState = {
  order: {},
  type: Types.ALL.type,
  currentMenu: Menu.QUESTS.route,
};

const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    postOrder: (state, action) => {
      state.order = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setMenu: (state, action) => {
      state.currentMenu = action.payload;
    },
  },
});

const {postOrder, setType, setMenu} = userProcess.actions;

export {userProcess, postOrder, setType, setMenu};
