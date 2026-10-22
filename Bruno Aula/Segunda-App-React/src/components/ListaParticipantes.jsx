import Participante from "./Participante";
const ListaParticipantes = ({ lista, titulo }) => {
    return (
        <> 
        <h3>{titulo}</h3>
        {
            
            (lista.length == 0) ? <p>NO HAY PARTICIPANTES!</p> :
                <ul>
                    {lista.map(participante =>
                        <Participante key={participante.id}
                            nombre={participante.nombre} email={participante.email}>
                        </Participante>
                    )}
                </ul>
        }
        </>
    )
}

export default ListaParticipantes