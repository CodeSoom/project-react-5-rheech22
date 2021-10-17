import styled from '@emotion/styled';

export const Range = styled.input({
  webkitAppearance: 'none',
  appearance: 'none',
  width: '45%',
  height: '2em',
  borderRadius: '1em',
  background: '#D3D3D3',
  outline: 'none',
  opacity: '0.7',
  webkitTransition: '.2s',
  transition: 'opacity .2s',
  '&:hover': {
    opacity: '1',
  },
  '&::-webkit-slider-thumb': {
    webkitAppearance: 'none',
    appearance: 'none',
    width: '2em',
    height: '2em',
    borderRadius: '50%',
    background: '#FF0000',
    cursor: 'pointer',
  },
  '&::-moz-range-thumb': {
    width: '2em',
    height: '2em',
    borderRadius: '50%',
    background: '#FF0000',
    cursor: 'pointer',
  },
});

export const Ticks = styled.div({
  display: 'flex',
  width: '45%',
  justifyContent: 'space-between',
  padding: '0 .7em',
  '& p': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '.1em',
    height: '.5em',
    background: '#D3D3D3',
    lineHeight: '4em',
    margin: '0 0 1em 0',
  },
});
