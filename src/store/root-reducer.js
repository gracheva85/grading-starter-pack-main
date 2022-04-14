import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {questData} from './quest-data/quest-data';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: questData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
