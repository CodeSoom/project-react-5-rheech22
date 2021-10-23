import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter basename="/project-react-5-rheech22">
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
