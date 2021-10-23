import styled from '@emotion/styled';

import MacroExample from './MacroSection/MacroExample';

const Container = styled.section({
  display: 'flex',
  flexDirection: 'column',
  '& h2': {
    marginBottom: '1em',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#485460',
    color: 'white',
  },
  '& div': {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default function MacroSection({ result }) {
  return (
    <Container>
      <h2>
        Macro Examples for
        {' '}
        {result}
        kcal
      </h2>
      <div>
        <MacroExample
          name="lowCarbs"
          value={result}
        />
        <MacroExample
          name="highCarbs"
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
