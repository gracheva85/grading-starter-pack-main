import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import Error from 'components/error/error';
import { AppRoute } from 'consts';
import { useEffect } from 'react';
import { fetchQuestsAction } from 'store/api-actions.js';
import StubPage from 'components/stub-page/stub-page';
import { useAppDispatch } from 'hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
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
