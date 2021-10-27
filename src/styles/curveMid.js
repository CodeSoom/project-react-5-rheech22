import styled from '@emotion/styled';

const CurveMid = styled.div({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  overflow: 'hidden',
  lineHeight: '0',
  zIndex: '1',
  '& svg': {
    position: 'relative',
    display: 'block',
    width: 'calc(120% + 1.5px)',
    height: '300px',
  },

  '& path': {
    fill: '#7295AE',
  },
});

export default CurveMid;
