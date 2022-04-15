import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import App from './app';
const { configureMockStore } = require("@jedmao/redux-mock-store");
const { Types, Menu, Status, AppRoute } = require("consts");
const { makeFakeOrder, makeFakeQuest } = require("util/mock");

const moskOrder = makeFakeOrder();
const moskQuest = makeFakeQuest();

const history = createMemoryHistory();

const store = configureMockStore({
  User: {
    order: moskOrder,
    type: Types.ALL.type,
    currentMenu: Menu.QUESTS.route
  },
  Data: {
    quests: [moskQuest, makeFakeQuest()],
    quest: moskQuest,
    isLoaded: Status.Unknown,
  }
});

const fakeApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(/квесты в Санкт-Петербурге/i)).toBeInTheDocument();
  });

  it('should render "Beginners" when user navigate to "/beginners"', () => {
    history.push(AppRoute.Beginners);

    render(fakeApp);

    expect(screen.getByText(/Страница в разработке/i)).toBeInTheDocument();
  });
  it('should render "Reviews" when user navigate to "/reviews"', () => {
    history.push(AppRoute.Reviews);

    render(fakeApp);

    expect(screen.getByText(/Страница в разработке/i)).toBeInTheDocument();
  });
  it('should render "Stocks" when user navigate to "/stocks"', () => {
    history.push(AppRoute.Stocks);

    render(fakeApp);

    expect(screen.getByText(/Страница в разработке/i)).toBeInTheDocument();
  });
  it('should render "Quest" when user navigate to "/detailed-quest/:id"', () => {
    history.push(AppRoute.Quest);

    render(fakeApp);

    expect(screen.getByText(/забронировать/i)).toBeInTheDocument();
  });
  it('should render "Contacts" when user navigate to "/contacts"', () => {
    history.push(AppRoute.Contacts);

    render(fakeApp);

    expect(screen.getByText(/Контакты/i)).toBeInTheDocument();
  });
});
