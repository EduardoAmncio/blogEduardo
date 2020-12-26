import {Container, ListItem} from './style';

interface technology {
  nameTech: string;
  imgName: string;
}

interface Technologies {
  title: string;
  technologies: technology[];
}

const BoxTechnologies: React.FC<Technologies> = (params) => {

  const {title, technologies} = params;

  return (
    <Container>
      <h2>{title}</h2>
      <ul>
        {technologies.map( tech => {
          
          return (
            <ListItem key={tech.nameTech} imgName={tech.imgName}>
            <div>
              <p>{tech.nameTech}</p>
            </div>
          </ListItem>);
        })}
      </ul>
    </Container>
  );
}

export default BoxTechnologies;
