import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgba(0, 0, 0, 0.1); */
  width: 100%;
  
  margin-top: -3rem;
  
  h1 {
    color: ${params => params.theme.dark.colors.text_primary}
  }

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #242630;
    width: 500px;
    height: 700px;

    margin-left: 1rem;
    margin-right: 1rem;

    img {
      width: 10rem;
      height: 10rem;
      margin-top: 1rem;
      border-radius: 50%;
      
      border: 1rem solid;
      border-color: #000000;
    }

    dl {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      margin-left: -5rem;

      dt {
        display: flex;
        align-items: center;
        margin-top: 1rem;

        img {
          width: 2rem;
          height: 2rem;
          align-self: auto;
          border: 0;
        }
        p {
          margin-top: 2rem;
          margin-left: 1rem;
          align-self: center;
          color: ${params => params.theme.dark.colors.text_primary}
        }
      }

      dd {
        display: flex;
        align-items: center;
        margin-top: -0.5rem;

        img {
          width: 1rem;
          height: 1rem;
          align-self: auto;
          border: 0;
        }
        p {
          margin-top: 1.4rem;
          margin-left: 1rem;
          align-self: center;
          color: ${params => params.theme.dark.colors.text_secondary}
        }
      }
    }
  }

  div {
    margin-left: 1rem;
    background: #242630;
    width: 900px;
    height: 700px;

    margin-left: 1rem;
    margin-right: 1rem;
  }

`