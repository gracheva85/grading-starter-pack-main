import request from 'axios';
import {toast, ToastOptions} from 'react-toastify';
import { ErrorType } from '../types/error';

const BAD_REQUEST = 400;

const theme: ToastOptions<{}> = {
  theme: "dark"
};

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case BAD_REQUEST:
        toast.info(response.data.error, theme);
        break;
      default:
        toast.info(response.data.error, theme);
        break;
    }
  }
};
