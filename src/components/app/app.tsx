import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';

import * as S from './app.styled';
import Error from '../error/error';
import { AppRoute } from '../../consts';
import { useEffect } from 'react';
import { fetchQuestsAction } from '../../store/api-actions';
import StubPage from '../stub-page/stub-page';
import { useAppDispatch } from '../../hooks/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { appTheme } from './common';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  return (
  <ThemeProvider theme={appTheme}>
    <ToastContainer />
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.Quest} >
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Beginners}>
          <StubPage />
        </Route>
        <Route exact path={AppRoute.Reviews}>
          <StubPage />
        </Route>
        <Route exact path={AppRoute.Stocks}>
          <StubPage  />
        </Route>
        <Route exact path={AppRoute.Root}>
          <Home />
        </Route>
        <Route >
          <Error />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
)}

export default App;
