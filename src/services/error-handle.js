import request from 'axios';
import {toast} from 'react-toastify';

const BAD_REQUEST = 400;

const theme = {
  theme: "dark"
};

export const errorHandle = (error) => {
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
