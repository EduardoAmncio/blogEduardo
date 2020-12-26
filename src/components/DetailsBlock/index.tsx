import { info } from 'console';
import {Container} from './style';
import BoxTechnologies from '../BoxTechnologies';

const DetailsBlock: React.FC = () => {

  const objWork = {
    title: "Working with:",
    tecnologies: [
      
      {
        nameTech: "HTML5",
        imgName: "../../../static/assets/imgs/icons/html5.svg"
      },
      {
        nameTech: "CSS3",
        imgName: "../../../static/assets/imgs/icons/css3.svg"
      },
      {
        nameTech: "JavaScript",
        imgName: "../../../static/assets/imgs/icons/javaScript.svg"
      },
      {
        nameTech: "nodeJs",
        imgName: "../../../static/assets/imgs/icons/nodejs.svg"
      },
    ]
  }

  const objKnow = {
    title: "Know:",
    tecnologies: [
      {
        nameTech: "ReactJs",
        imgName: "../../../static/assets/imgs/icons/reacJs.svg"
      },
      {
        nameTech: "React Native",
        imgName: "../../../static/assets/imgs/icons/reactNative.svg"
      },
      {
        nameTech: "Flutter",
        imgName: "../../../static/assets/imgs/icons/flutter.svg"
      },
      {
        nameTech: "CSS3",
        imgName: "../../../static/assets/imgs/icons/css3.svg"
      },
      {
        nameTech: "HTML5",
        imgName: "../../../static/assets/imgs/icons/html5.svg"
      },
      {
        nameTech: "JavaScript",
        imgName: "../../../static/assets/imgs/icons/javaScript.svg"
      },
      {
        nameTech: "nodeJs",
        imgName: "../../../static/assets/imgs/icons/nodejs.svg"
      },
    ]
  }

  return (
    <Container>
      <div>
        <h2>About me:</h2>
        <span>
          33 anos. Entusiasta em tecnologias web e mobile. Atualmente estudando NextJs e Flutter. 7 anos de experiência no 
          mercado como Analista e Desenvolvedor de Sistemas, atuando na implementação de softwares para web no sistema HRP
          (ERP para planos de saúde). Também um desenvolvedor de jogo por diversão.
        </span>
      </div>
      <BoxTechnologies title={objWork.title} technologies={objWork.tecnologies}></BoxTechnologies>
      <BoxTechnologies title={objKnow.title} technologies={objKnow.tecnologies}></BoxTechnologies>
    </Container>
  );
}

export default DetailsBlock;