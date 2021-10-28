import styled from '@emotion/styled';

import MacroExample from './MacroSection/MacroExample';

const Container = styled.section({
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  '& h2': {
    fontSize: '2em',
    fontWeight: '600',
    marginBottom: '1em',
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function MacroSection({ result }) {
  return (
    <Container>
      <h2>
        Macro Examples of
        {' '}
        {result}
        kcal
      </h2>
      <div>
        <MacroExample
          name="highCarbs"
          value={result}
        />
        <MacroExample
          name="lowCarbs"
          value={result}
        />
        <MacroExample
          name="highFats"
          value={result}
        />
      </div>
    </Container>
  );
}
