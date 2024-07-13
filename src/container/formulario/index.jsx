/* eslint-disable react/prop-types */
import { useState } from "react";

import style from './Formulario.module.css'

const Formulario = ({ setImc }) => {
    
    const [peso,setPeso] = useState('')
    const [altura,setAltura] = useState('')

    const calculaIMC = (e) => {
        e.preventDefault();
        const alturaEmMetros = parseFloat(altura);
        const pesoEmKg = parseFloat(peso);
        setImc((pesoEmKg / (alturaEmMetros * alturaEmMetros)).toFixed(2)); 
    };

    return (
        <div className="container">
            <section className={style.sectionStyle}>
                <form onSubmit={calculaIMC} className={style.form}>
                    <div className={style.formItem}>
                        <label className={style.label} htmlFor="peso">Informe seu peso: </label>
                        <input className={style.input} id="peso" type="number" step="0.01" onChange={(e) => setPeso(e.target.value)}/>
                    </div>
                    <div className={style.formItem}>
                        <label className={style.label} htmlFor="altura">Informe sua altura: </label>
                        <input className={style.input} id="altura" type="number" step="0.01" onChange={(e) => setAltura(e.target.value)}/>
                    </div>
                    <button className={style.button}>Calcular</button>
                </form>
            </section>
        </div>
    )
}

export default Formulario;