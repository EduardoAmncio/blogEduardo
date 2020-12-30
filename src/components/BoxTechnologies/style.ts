import { StringifyOptions } from 'querystring';
import styled from 'styled-components';

interface BoxTechnologies {
  imgName: string;
}

export const Container = styled.div`
  background: #242630;
  padding: 1rem;

  & + div {
    margin-top: 1rem;
    
  }

  ul {
    display: flex;
    list-style: none;
  }
`;

export const ListItem = styled.li<BoxTechnologies>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-image: url(${params => params.imgName});
  background-size:cover;
  
  width: 2.5rem;
  height: 2.5rem;   
  transition: 0.3s;

  & + li {
    margin-left: 0.5rem;
  }

  :hover {
    transform: scale(1.5);
    box-shadow: 0 0 1rem 0.2rem black;
    border-radius: 0.5rem;
    div {
      background: rgba(0,0,0,1);
      transform: translate(0, 1.9rem);
      border-radius: 0.5rem;
    }

    p {
      color: rgba(255,255,255,1);
    }
  }

   > div {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 1rem;   
    background: rgba(0,0,0,0.0);
    transition: 0.3s;

     > p {
      font-stretch: condensed;
      font-weight: bold;
      font-size: 0.5rem;
      color: rgba(0,0,0,0.0);
    }
  }
`