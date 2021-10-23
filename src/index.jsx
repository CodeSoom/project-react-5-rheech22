import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter basename={process.env.BASE_PATH}>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
