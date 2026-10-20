import './App.css';
function App() {
  const inputName = document.querySelector("#alumno");
  const inputCurso = document.querySelector("#curso");
  const inputHoras = document.querySelector("#horas");
  const input = document.querySelector("#buscar");
  const submit = document.querySelector("#submit");

  let matriculado = false;

  let ficha = [];

  ficha.forEach((el) => {
    if (input.value === el) {
      matriculado = true;
    }
  });
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(inputName.value !== "" && inputCurso.value !== "" && inputHoras.value !== ""){
      ficha.push(inputName.value);
      inputName.value = "";
      inputCurso.value = "";
      inputHoras.value = "";
    }
  });
  return (
    <>
      <h1 className="titulo">Ficha</h1>
      <form >
        <label htmlFor="alumno">Alumno:</label>
        <input type="text" id="alumno" />
        <label htmlFor="curso">Curso:</label>
        <input type="text" id="curso" />
        <label htmlFor="horas">Hora semanales</label>
        <input type="text" id="horas" />
        <input id='submit' type="submit" value="Registrar" />
      </form>
      <input type="text" id="buscar" placeholder="Buscar alumno matriculado" />
      <p>{matriculado === true ? "Alta" : "Baja"}</p>

    </>
  );
}

export default App
