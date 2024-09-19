
export const MyFirstComponents = () => {

  const name = "Jhonny Montoya";
  const github_Profile = "https://github.com/JhonnyMontoya16";
  const studen = {
    name:"Diana",
    last_name: "Arevalo",
    mobil: "30000000",
    linkedin_Profile: "https://www.linkedin.com/in/diana-arevalo-168b0925b/"
  }

  return (
    <>
        <div>MyFirstComponents</div>
        <div className="container bg-warning-subtle mt-4">
          <h1>Temas de React</h1>
          <ul>
              <li>Componentes</li>
              <li>Eventos</li>
              <li>Estados Hooks</li>
              <li>Props</li>
          </ul>
        </div>
        <div className="container bg-success-subtle py-2 ">
          <h1>Datos del Docente</h1>
          <p>Nombre: <strong>{ name }</strong></p>
          <p>GitHub: { github_Profile }</p>
        </div>
        <div className="container bg-success-subtle py-2 ">
          <h1>Datos del Estudiante</h1>
          <p>Nombre: <strong>{ studen.name }</strong></p>
          <p>Apellido: { studen.last_name }</p>
          <p>Celular: { studen.mobil }</p>
          <p>LinkedIn: <a href={ studen.linkedin_Profile }>{ stuen.linkedin_Profile }</a></p>
        </div>
        <div>
          <h1>objeto Completo</h1>
          {/* <pre>{JSON.stringify(studen)}</pre> */}
        </div>
    </>
  )
}
