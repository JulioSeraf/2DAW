import Cabecera from './components/Cabecera'
import Formulario from './components/Formulario'
import ContadorParticipantes from './components/ContadorParticipantes'
import ListaParticipantes from './components/ListaParticipantes'
import participantes from './js/participantes.js';


const App = () => {
 
  return (
    <>
      <Cabecera />
      <Formulario />
      <ContadorParticipantes contador={participantes.length} />
      <ListaParticipantes lista={participantes}/>
       
    </>
  )
}

export default App
