import styled from 'styled-components';

export const Container = styled.div`

display: flex;
flex-direction: column;
box-sizing: border-box;
//background: #2426;
width: 56rem;
min-width: 22rem;
max-width: 56rem;
height: 35rem;

//padding: 1rem;

margin-left: 1rem;
margin-right: 1rem;

@media (max-width: 50rem) {
  margin-top: 1rem;
  width: 30rem;
  max-width: 100%;
  margin-left: 2rem;
  margin-right: 2rem;
}

div {
  background: #242630;
  padding: 1rem;

  & + div {
    margin-top: 1rem;
  }

  h2 {
    color: ${params => params.theme.dark.colors.primary};
    margin-bottom: 1rem;
  }

  span {
    color: ${params => params.theme.dark.colors.text_secondary};
    font-weight: 400;
    text-align: justify;
    text-justify: inter-word;
  }

  
}

`