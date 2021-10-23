import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { getActivityDescription } from './utils';

jest.mock('react-redux');

describe('App', () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      bodyStats: {
        gender: '',
        age: 0,
        height: 0,
        weight: 0,
        activity: {
          level: 1,
          description: getActivityDescription(1),
        },
        goalNubmer: 0,
      },
      calories: {
        bmr: 1000,
        tdee: 1500,
        result: 2000,
      },
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('My Cal');
    });
  });

  context('with path /diary', () => {
    it('renders the diary page', () => {
      const { container } = renderApp({ path: '/diary' });

      expect(container).toHaveTextContent('식단 페이지');
    });
  });
});
