import Head from 'next/head'
import {ContainerHome} from '../styles/pages/Home'
import NavigationBar from '../components/NavigationBar'
import MainInfo from '../components/MainInfo'
import GameBlock from '../components/GameBlock'


const Home: React.FC = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <ContainerHome>      
        <header>        
          <img src="../../static/assets/imgs/chip.svg" alt=""/>
        </header>
        
      </ContainerHome>
      <MainInfo></MainInfo>
      <GameBlock></GameBlock>
      
      
    </>
  )
}
export default Home;