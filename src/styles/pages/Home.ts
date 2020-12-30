import styled from 'styled-components'

export const ContainerHome = styled.div`
  
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  

  /* scroll-snap-type: y mandatory;
  overflow-y: scroll; */
 
  header {
    display: flex;
    position: inherit;
    width: 100%;
    background: linear-gradient(180deg, #6DC2E7, #1168A7);
    
    img {
      width: 10rem;
      margin-top: 5rem;
      margin-left: 1rem;
    }
  }
`