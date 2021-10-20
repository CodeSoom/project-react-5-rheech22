import styled from '@emotion/styled';

import { Range, Ticks } from './styles/range';

import { getActivityDescription } from './utils';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: '3em',
  alignItems: 'center',
  '& div:first-of-type': {
    display: 'flex',
    fontSize: '1.5em',
    '& label': {
      marginRight: '.5em',
    },
  },
});

const Description = styled.p({
  width: '18em',
  height: '3em',
  textAlign: 'center',
  wordBreak: 'keep-all',
});

export default function ActivityLevel({ onChange, activity }) {
  const { level, description } = activity;

  const id = 'input-activity';

  const handleChange = (event) => {
    const { target: { name, value } } = event;
    onChange({
      name,
      value: {
        level: value,
        description: getActivityDescription(value),
      },
    });
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
