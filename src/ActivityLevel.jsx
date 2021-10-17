import styled from '@emotion/styled';

import { Range, Ticks } from './styles/range';

const Container = styled.div({
  width: '100%',
  height: '15em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& div:first-of-type': {
    display: 'flex',
    '& label': {
      marginRight: '.5em',
    },
  },
});

const Description = styled.p({
  width: '30%',
  height: '3em',
  textAlign: 'center',
  wordBreak: 'keep-all',
});

export default function ActivityLevel({ onChange, activity }) {
  const { level, description } = activity;

  const id = 'input-activity';

  const handleChange = (event) => {
    const { target: { name, value } } = event;
    onChange({ name, value });
  };

  return (
    <Container>
      <div>
        <label htmlFor={id}>
          Activity Level
        </label>
        <span>
          {level}
        </span>
      </div>
      <Description>
        {description}
      </Description>
      <Range
        id={id}
        type="range"
        name="activity"
        onChange={handleChange}
        min="1"
        max="5"
        step="1"
        value={activity.level}
        list="ticks"
      />
      <Ticks id="ticks">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </Ticks>
    </Container>
  );
}
