import { useState } from "react";
import Formulario from "./container/formulario/index.jsx"
import Tabela from "./container/tabela/index.jsx"
import Hero from "./container/hero/index.jsx";

function App() {
  const [imc, setImc] = useState(0);

  return (
    <>
      <Hero />
      <Formulario setImc={setImc}/>
      <Tabela imc={imc}/>
    </>
  )
}

export default App
