import { useState } from "react";
import Formulario from "./formulario/index.jsx"
import Tabela from "./tabela/index.jsx"

function App() {
  const [imc, setImc] = useState(0);

  return (
    <>
      <Formulario setImc={setImc}/>
      <Tabela imc={imc}/>
    </>
  )
}

export default App
