import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { store } from '../src/store/index';
import { Provider } from 'react-redux';

render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
