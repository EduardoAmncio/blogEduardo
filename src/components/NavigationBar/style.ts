import styled from 'styled-components';

export const Container = styled.div`
  background: ${params => params.theme.dark.colors.background};
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction:row;
  align-items: center;
  position: fixed;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.5);
  border-bottom:  0.2rem solid;
  border-color: #000;


  div {
    display: flex;
    align-items: center;

    img {
      margin: 0.4rem;
      margin-left: 1rem;
      width: 2rem;
      height: 2rem;
      max-width: 100%;
      border-radius: 50%;
      border: 0.3rem solid;
    }
    h1 {
      font-size: 1.35rem;
      margin-left: 0.2rem;
    }
  }

  nav {
    margin-right: 1rem;

    a {
      text-decoration: none;
      visibility: hidden;
    }
  }

`
