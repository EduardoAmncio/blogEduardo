import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  box-sizing: border-box;
  padding: 2rem;
  
  align-items: center;
  justify-content: center;
  /* background: rgba(0, 0, 255, 0.9);  */
  width: 100%;
 // height: 50rem;
  height: 100%;
  margin-top: -5rem;

 // 750

 @media (max-width: 50rem){
   flex-direction: column;
 }

  header {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    flex-direction: column;
    background: #242630;
    width: 30rem;
    max-width: 30rem;
    min-width: 22rem;
    
    height: 35rem;
    margin-left: 1rem;
    padding: 1rem;

    @media (max-width: 50rem){
      max-width: 100%;
      margin-right: 1rem;
    }

    

    img {
      width: 15rem;
      height: 15rem;    
      margin-top: 1rem;
      border-radius: 50%;
      
      border: 1rem solid;
      border-color: #222229;
    }

    h1 {
      font-weight: 800;
      font-size: 2.5rem;
    }

    dl {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      margin-left: -3rem;
  
      dt {
        display: flex;
        align-items: center;
        justify-content: left;

        img {
          width: 2rem;
          height: 2rem;
          align-self: auto;
          border: 0;
        }
        p {
          margin-top: 1rem;
          margin-left: 0.5rem;
          align-self: center;
          color: ${params => params.theme.dark.colors.text_secondary}
        }
      }   
    }
  }

  /* div {
    display: flex;
    box-sizing: border-box;
    background: #242630;
    width: 56rem;
    min-width: 22rem;
    max-width: 56rem;
    height: 35rem;
    padding: 1rem;

    margin-left: 1rem;
    margin-right: 1rem;

    @media (max-width: 50rem) {
      margin-top: 1rem;
      width: 30rem;
      max-width: 100%;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  } */

`