import {styled} from 'styled-components'
import EstilosGlobais from './componentes/EstilosGlobais'
import Cabecalho from './componentes/Cabecalho'
import BarraLateral from './componentes/BarraLateral'
import Banner from './componentes/Banner'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  height: 100vh;
  width: 100%;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
      <Banner texto={'A galeria mais completa de fotos do espaço!'}/>
    </FundoGradiente>
  )
}

export default App
