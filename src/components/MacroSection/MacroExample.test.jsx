import { render } from '@testing-library/react';

import MacroExample from './MacroExample';

import macroInfo from '../../data/macroInfo';
import { getMacros } from '../../utils';

describe('MacroExample', () => {
  it('renders an example title depends on given name', () => {
    const { container } = render(
      <MacroExample
        name="lowCarbs"
        value={2000}
      />,
    );

    const data = macroInfo.filter((info) => info.name === 'lowCarbs')[0];

    expect(container).toHaveTextContent(data.title);
  });

  it('renders macro values', () => {
    const { container } = render(
      <MacroExample
        name="lowCarbs"
        value={2000}
      />,
    );

    const macro = getMacros({ name: 'lowCarbs', value: 2000 });

    expect(container).toHaveTextContent(macro.carbs);
    expect(container).toHaveTextContent(macro.protein);
    expect(container).toHaveTextContent(macro.fats);
  });
});
