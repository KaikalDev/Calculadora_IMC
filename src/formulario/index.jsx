import { useState } from "react";

import style from './Formulario.module.css'

const Formulario = ({ setImc }) => {
    
    const [peso,setPeso] = useState(0)
    const [altura,setAltura] = useState(0)

    const calculaIMC = (e) => {
        e.preventDefault();
        const alturaEmMetros = parseFloat(altura);
        const pesoEmKg = parseFloat(peso);
        setImc((pesoEmKg / (alturaEmMetros * alturaEmMetros)).toFixed(2)); 
    };

    return (
        <div className="container">
            <form onSubmit={calculaIMC} className={style.form}>
                <div>
                    <label className={style.label} htmlFor="peso">Informe seu peso: </label>
                    <input className={style.input} id="peso" type="number" step="0.01" onChange={(e) => setPeso(e.target.value)}/>
                </div>
                <div>
                    <label className={style.label} htmlFor="altura">Informe sua altura: </label>
                    <input className={style.input} id="altura" type="number" step="0.01" onChange={(e) => setAltura(e.target.value)}/>
                </div>
                <button>Calcular</button>
            </form>
        </div>
    )
}

export default Formulario;