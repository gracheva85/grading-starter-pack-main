import browserHistory from '../../services/browser-history.js';
import {ActionType} from '../action.js';

export const redirect =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
