import { getQuest, getQuests, setStatus } from './quest-data/quest-data.js';
import {api, store} from './index'
import { errorHandle } from 'services/error-handle.js';
import { APIRoute, Status } from 'consts.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const MESSAGE = 'Заявка успешно отправлена';
const theme = {
  theme: "dark"
};

const ApiActionType = {
  FetchQuests: 'data/fetchQuests',
  FetchQuest: 'data/fetchQuest',
  PostOrder: 'user/postOrder',
};

const fetchQuestsAction = createAsyncThunk(
  ApiActionType.FetchQuests,
  async () => {
      try {
        const {data} = await api.get(APIRoute.Quests);
        store.dispatch(getQuests(data));
      } catch (error) {
        errorHandle(error);
}})

const fetchQuestAction = createAsyncThunk(
  ApiActionType.FetchQuest,
    async (id) => {
      try {
        const {data} = await api.get(`${APIRoute.Quests}/${id}`);
        store.dispatch(getQuest(data));
      } catch (error) {
        store.dispatch(setStatus(Status.IsNotloaded));
      }
  });

const postOrderAction = createAsyncThunk(
  ApiActionType.PostOrder,
  async (order) => {
    try {
      await api.post(`${APIRoute.Orders}`, order)
      toast.success(MESSAGE, theme);
    } catch (error) {
      errorHandle(error);
}})

export {
  fetchQuestsAction,
  fetchQuestAction,
  postOrderAction,
};
