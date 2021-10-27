import styled from '@emotion/styled';

const Button = styled.button({
  fontSize: '1em',
  display: 'block',
  border: 'none',
  borderRadius: '.5em',
  padding: '.7em 1.2em',
  backgroundImage: 'linear-gradient(to right, #CEF6FF 0%, #9CADBC  51%, #CEF6FF 100%)',
  backgroundSize: '200% auto',
  boxShadow: '0 0 .5em #9CADBC',
  color: 'black',
  textTransform: 'uppercase',
  textAlign: 'center',
  transition: '0.5s',
  cursor: 'pointer',
  '&:hover': {
    backgroundPosition: 'right center',
    textDecoration: 'none',
  },
});

export default Button;
