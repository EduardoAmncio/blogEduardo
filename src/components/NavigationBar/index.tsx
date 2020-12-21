import styled from 'styled-components';
import {Container} from './style'


const NavigationBar: React.FC = () =>{
  return (
    <>
      <Container>
        <div>
          <img src="../../../static/assets/imgs/avatar.jpg" alt="avatar"/>
          <h1>Eduardo Amâncio</h1>
        </div>
        <nav>
          <a rel="stylesheet" href="">Change theme</a>
        </nav>
        
      </Container>
    </>
  );
}


export default NavigationBar;


