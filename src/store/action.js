import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  RedirectToRoute: 'user/redirectToRoute',
};

export const redirectToRoute = createAction(ActionType.RedirectToRoute);
