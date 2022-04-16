import { getQuest, getQuests, setStatus } from './quest-data/quest-data';
import {api} from './index'
import { errorHandle } from '../services/error-handle';
import { APIRoute, Status } from '../consts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast, ToastOptions } from 'react-toastify';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Quest } from '../types/quest';
import { Order } from '../types/order';

const MESSAGE = {
  success: 'Заявка успешно отправлена',
  error: 'Что-то пошло не так, попробуйте еще раз'
};
const theme: ToastOptions<{}> = {
  theme: "dark"
};

const ApiActionType = {
  FetchQuests: 'data/fetchQuests',
  FetchQuest: 'data/fetchQuest',
  PostOrder: 'user/postOrder',
};

const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActionType.FetchQuests,
  async (_arg, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get<Quest[]>(APIRoute.Quests);
        dispatch(getQuests(data));
      } catch (error) {
        errorHandle(error);
}})

const fetchQuestAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActionType.FetchQuest,
    async (id: number, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
        dispatch(getQuest(data));
      } catch (error) {
        dispatch(setStatus(Status.IsNotloaded));
      }
  });

const postOrderAction = createAsyncThunk<void, Order, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiActionType.PostOrder,
  async (order: Order) => {
    try {
      await api.post<Order>(`${APIRoute.Orders}`, order)
      toast.success(MESSAGE.success, theme);
    } catch (error) {
      toast.error(MESSAGE.error, theme);
}})

export {
  fetchQuestsAction,
  fetchQuestAction,
  postOrderAction,
};
