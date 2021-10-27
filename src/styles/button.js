import styled from '@emotion/styled';

const Button = styled.button({
  fontSize: '1em',
  display: 'block',
  border: 'none',
  borderRadius: '.5em',
  padding: '.7em 1.2em',
  backgroundImage: 'linear-gradient(to right, #9CADBC 0%, #FFECCC  51%, #9CADBC 100%)',
  backgroundSize: '200% auto',
  boxShadow: '0 0 .5em #9CADBC',
  color: 'black',
  textTransform: 'uppercase',
  textAlign: 'center',
  transition: '0.5s',
  cursor: 'pointer',
  zIndex: '10',
  '&:hover': {
    backgroundPosition: 'right center',
    textDecoration: 'none',
  },
});

export default Button;
