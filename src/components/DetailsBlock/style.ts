import styled from 'styled-components';

interface SocialMedia {
  socialName: string;
}

const colorBackground = {
  'GitHub': '#0D1117',
  'Linkedin': '#154182',
  'Instagram': '#F16f8f'
}

export const Container = styled.div`

display: flex;
flex-direction: column;
box-sizing: border-box;

width: 56rem;
min-width: 22rem;
max-width: 56rem;
height: 33.8rem;

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
  display: flex;
  flex-direction: column;
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
    margin-bottom: 0.4rem;
  }

}
`

export const ContainerLinks = styled.ul`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`

export const LinkToPage = styled.a<SocialMedia>`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;

  width: 8rem;
  height: 3rem;
  background: ${params => colorBackground[params.socialName] || '#fff'};
  color: ${params => params.theme.dark.colors.text_primary};
  
  & + a {
    margin-left: 1rem;
  }

  transition: 0.2s;

  :hover {
    border-radius: 0.5rem;
    transform: scale(1.1);
    box-shadow: 0 0 0.5rem 0.1rem rgba(0,0,0,0.5);
  }
`;