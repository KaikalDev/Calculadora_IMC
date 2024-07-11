import { useEffect, useState } from 'react'
import style from './Tabela.module.css'

const Tabela = ({ imc }) => {
    const [valorimc, setValorimc] = useState(false)

    useEffect(() => {
        if (imc > 0) {
            setValorimc(true);
        } else {
            setValorimc(false);
        }
    }, [imc]);

    let linha1Class = style.linha1
    let linha2Class = style.linha2
    let linha3Class = style.linha3
    let linha4Class = style.linha4

    if (imc > 0 && imc < 18.5) {
        linha1Class += ' ' + style.active
        linha2Class += ' ' + style.unactive
        linha3Class += ' ' + style.unactive
        linha4Class += ' ' + style.unactive
    }else if (imc >= 18.5 && imc <= 24.99) {
        linha1Class += ' ' + style.unactive
        linha2Class += ' ' + style.active
        linha3Class += ' ' + style.unactive
        linha4Class += ' ' + style.unactive
    }else if (imc >= 25 && imc <= 29.99) {
        linha1Class += ' ' + style.unactive
        linha2Class += ' ' + style.unactive
        linha3Class += ' ' + style.active
        linha4Class += ' ' + style.unactive
    }else if (imc >= 30) {
        linha1Class += ' ' + style.unactive
        linha2Class += ' ' + style.unactive
        linha3Class += ' ' + style.unactive
        linha4Class += ' ' + style.active
    }


    return (
        <div className="container">
            <table className={style.tabela}>
                <thead>
                    <tr className={style.linha}>
                        <th>Valor do IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={linha1Class}>
                        <td className={style.celula}>Menor que 18,5</td>
                        <td className={style.celula}>Baixo peso</td>
                    </tr>
                    <tr className={linha2Class}>
                        <td className={style.celula}>De 18,5 a 24,99</td>
                        <td className={style.celula}>Normal</td>
                    </tr>
                    <tr className={linha3Class}>
                        <td className={style.celula}>De 25 a 29,99</td>
                        <td className={style.celula}>Sobrepeso</td>
                    </tr>
                    <tr className={linha4Class}>
                        <td className={style.celula}>Maior que 30</td>
                        <td className={style.celula}>Obesidade</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        {valorimc && (
                            <td>Valor do IMC: {imc}</td>
                        )}
                    </tr>
                </tfoot>
            </table>
        </div>
    )

}

export default Tabela