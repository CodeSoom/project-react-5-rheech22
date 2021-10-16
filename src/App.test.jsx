import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders page title', () => {
    const { container } = render((
      <App />
    ));
    expect(container).toHaveTextContent('TDEE');
  });

  it('renders inputs', () => {
    const { queryByLabelText } = render((
      <App />
    ));

    expect(queryByLabelText('남성')).not.toBeNull();
    expect(queryByLabelText('여성')).not.toBeNull();
    expect(queryByLabelText('나이')).not.toBeNull();
    expect(queryByLabelText('키')).not.toBeNull();
    expect(queryByLabelText('몸무게')).not.toBeNull();
    expect(queryByLabelText('활동량')).not.toBeNull();
  });
});
