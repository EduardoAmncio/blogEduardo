import { info } from 'console';
import {Container} from './style';

const MainInfo: React.FC = () => {
  return (
    <Container>
      <header>
        <img src="../../../static/assets/imgs/avatar.jpg" alt=""/>
        <h1>Eduardo Amâncio</h1>
        <dl>
          <dt>
            <img src="../../../static/assets/imgs/devIcon.svg" alt="Programmer At Salutis Image"/>
            <p>Programmer At Salutis</p>
          </dt>
          <dd>
            <img src="../../../static/assets/imgs/location.svg" alt="Programmer At Salutis Image"/>
            <p>Aldeota</p>
          </dd>
          <dt>
            <img src="../../../static/assets/imgs/education.svg" alt="Programmer At Salutis Image"/>
            <p> - Software Engineering</p>
          </dt>
          <dd>
            <img src="../../../static/assets/imgs/location.svg" alt="Programmer At Salutis Image"/>
            <p>UFC</p>
          </dd>
        </dl>
      </header>
      <div>

      </div>
    </Container>
  );
}

export default MainInfo;