import Cabecera from './components/Cabecera'
import Formulario from './components/Formulario'
import ContadorParticipantes from './components/ContadorParticipantes'
import ListaParticipantes from './components/ListaParticipantes'
import participantes from './js/participantes.js';


const App = () => {
  const ListaParticipantesComprobados = participantes.filter(com => com.comprobado);
  return (
    <>
      <Cabecera />
      <Formulario />
      <ContadorParticipantes contador={participantes.length} />
      <ListaParticipantes lista={ListaParticipantesComprobados} titulo={"Lista de participantes comprobados"}/>
      <ListaParticipantes lista={ListaParticipantesComprobados} titulo={"Lista de participantes No comprobados"}/>
       
    </>
  )
}

export default App
