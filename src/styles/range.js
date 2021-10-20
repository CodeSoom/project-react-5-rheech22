import styled from '@emotion/styled';

export const Range = styled.input({
  width: '25em',
  height: '2em',
  borderRadius: '1em',
  background: '#D3D3D3',
  opacity: '0.5',
  outline: 'none',
  webkitAppearance: 'none',
  appearance: 'none',
  webkitTransition: '.2s',
  transition: 'opacity .2s',
  cursor: 'pointer',
  '&:hover': {
    opacity: '1',
  },
  '&::-webkit-slider-thumb': {
    width: '2em',
    height: '2em',
    borderRadius: '50%',
    background: '#2ecc71',
    webkitAppearance: 'none',
    appearance: 'none',
  },
  '&::-moz-range-thumb': {
    width: '2em',
    height: '2em',
    borderRadius: '50%',
    background: '#2ecc71',
    cursor: 'pointer',
  },
});

export const Ticks = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '20em',
  padding: '0 .3em',
  '& p': {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '.1em',
    margin: '0 0 1em 0',
    height: '.5em',
    background: '#D3D3D3',
    textAlign: 'center',
    lineHeight: '4em',
  },
});
