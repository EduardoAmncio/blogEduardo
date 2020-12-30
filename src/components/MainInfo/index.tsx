
import {Container} from './style';
import DetailBlock from '../DetailsBlock';

const MainInfo: React.FC = () => {
  return (
    <Container>
      <header>
        <img src="../../../static/assets/imgs/avatar.jpg" alt=""/>
        <h1>Eduardo Amâncio</h1>
        <dl>
          <dt>
            <img src="../../../static/assets/imgs/devIcon.svg" alt="Programmer At Salutis Image"/>
            <p>Software Engineering</p>
          </dt>
          <dt>
            <img src="../../../static/assets/imgs/devIcon.svg" alt="Programmer At Salutis Image"/>
            <p>JavaScript Full Stack Developer</p>
          </dt>
          <dt>
            <img src="../../../static/assets/imgs/location.svg" alt="Programmer At Salutis Image"/>
            <p>Fortaleza, homeOffice</p>
          </dt>
        </dl>
      </header>
      <DetailBlock></DetailBlock>
      
      
    </Container>
  );
}

export default MainInfo;