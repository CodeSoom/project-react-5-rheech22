import styled from '@emotion/styled';

const Cruve = styled.div({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  overflow: 'hidden',
  lineHeight: '0',

  '& svg': {
    position: 'relative',
    display: 'block',
    width: 'calc(126% + 1.3px)',
    height: '172px',
  },

  '& path': {
    fill: '#7295AE',
  },
});

export default Cruve;
