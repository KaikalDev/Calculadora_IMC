/* eslint-disable react/prop-types */
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
    let resposta1 = style.resposta
    let resposta2 = style.resposta
    let resposta3 = style.resposta
    let resposta4 = style.resposta

    if (imc > 0 && imc < 18.5) {
        resposta1 += ' ' + 'active'
        resposta2 += ' ' + 'unactive'
        resposta3 += ' ' + 'unactive'
        resposta4 += ' ' + 'unactive'
    } else if (imc >= 18.5 && imc <= 24.99) {
        resposta1 += ' ' + 'unactive'
        resposta2 += ' ' + 'active'
        resposta3 += ' ' + 'unactive'
        resposta4 += ' ' + 'unactive'        
    } else if (imc > 25 && imc <= 29.99) {
        resposta1 += ' ' + 'unactive'
        resposta2 += ' ' + 'unactive'
        resposta3 += ' ' + 'active'
        resposta4 += ' ' + 'unactive'        
    } else if (imc >= 30){
        resposta1 += ' ' + 'unactive'
        resposta2 += ' ' + 'unactive'
        resposta3 += ' ' + 'unactive'
        resposta4 += ' ' + 'active'        
    } else {
        resposta1 += ' ' + 'unactive'
        resposta2 += ' ' + 'unactive'
        resposta3 += ' ' + 'unactive'
        resposta4 += ' ' + 'unactive'   
    }

    return (
        <div className="container">
            <section className={style.sectionTabela}>
                <table className={style.tabela}>
                    <thead>
                        <tr className={style.linha}>
                            <th className={style.celulaHeder}>Valor do IMC</th>
                            <th className={style.celulaHeder}>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={style.linha}>
                            <td className={style.celula}>Menor que 18,5</td>
                            <td className={style.celula}>Baixo peso</td>
                        </tr>
                        <tr className={style.linha}>
                            <td className={style.celula}>De 18,5 a 24,99</td>
                            <td className={style.celula}>Normal</td>
                        </tr>
                        <tr className={style.linha}>
                            <td className={style.celula}>De 25 a 29,99</td>
                            <td className={style.celula}>Sobrepeso</td>
                        </tr>
                        <tr className={style.linha}>
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
            </section>
            <div className={resposta1}>
                <h1 className={style.title}>Subpeso</h1>
                <p className={style.paragrafo}>
                    Subpeso é uma condição em que uma pessoa apresenta um Índice de Massa Corporal (IMC) abaixo do valor considerado saudável para sua altura. Isso significa que a pessoa está abaixo do peso ideal para a sua estrutura corporal.
                </p>
                <p className={style.paragrafo}>
                    Portanto, uma pessoa com IMC abaixo de 18,5 é considerada estar com subpeso. Isso pode ser resultado de diversos fatores, como dieta inadequada, condições médicas, metabolismo acelerado, ou mesmo problemas emocionais que afetem o apetite.
                </p>
                <p className={style.paragrafo}>
                    É importante destacar que o subpeso também pode estar associado a riscos para a saúde, incluindo maior vulnerabilidade a infecções, deficiências nutricionais, fragilidade óssea, e em casos extremos, problemas no funcionamento dos órgãos. Pessoas com subpeso podem necessitar de acompanhamento médico para determinar as causas e tratamentos adequados, como ajustes na alimentação e, em alguns casos, intervenções terapêuticas para promover o ganho de peso de forma saudável.
                </p>
            </div>
            <div className={resposta2}>
                <h1 className={style.title}>Peso normal</h1>
                <p className={style.paragrafo}>
                    No contexto do Índice de Massa Corporal (IMC), que é uma medida amplamente utilizada para avaliar se o peso de uma pessoa está dentro de uma faixa saudável para sua altura, o peso normal é geralmente definido como um IMC entre 18,5 e 24,9. Isso significa que, se o IMC de uma pessoa está dentro dessa faixa, ela é considerada ter um peso normal em relação à sua altura.
                </p>
                <p className={style.paragrafo}>
                    Além do IMC, outros fatores como a distribuição de gordura corporal, condições de saúde subjacentes, estilo de vida, nível de atividade física e características genéticas também desempenham um papel importante na determinação do peso saudável para uma pessoa.
                </p>
                <p className={style.paragrafo}>
                    Em resumo, peso normal refere-se a um estado de peso que é considerado saudável e adequado para uma pessoa específica, com base em uma variedade de fatores que vão além do simples número na balança ou do IMC.
                </p>
            </div>
            <div className={resposta3}>
                <h1 className={style.title}>Sobrepeso</h1>
                <p className={style.paragrafo}>
                    Sobrepeso é uma condição em que uma pessoa possui um excesso de peso corporal em relação ao que é considerado saudável para sua altura, idade e estrutura física. De acordo com os critérios da Organização Mundial da Saúde (OMS) e outras organizações de saúde, a faixa de IMC que indica sobrepeso está entre 25,0 e 29,9. Isso significa que, se o IMC de uma pessoa está dentro dessa faixa, ela é considerada estar com sobrepeso.                
                </p>
                <p className={style.paragrafo}>
                    Em resumo, sobrepeso refere-se a um excesso de peso corporal que pode resultar em riscos à saúde. É importante abordar essa condição com medidas adequadas de estilo de vida e, se necessário, orientação médica para prevenir complicações de saúde associadas.               
                </p>
            </div>
            <div className={resposta4}>
                <h1 className={style.title}>Obesidade</h1>
                <p className={style.paragrafo}>
                    Obesidade é uma condição médica em que há um acúmulo excessivo de gordura corporal, resultando em um aumento significativo de peso. É geralmente diagnosticada através do Índice de Massa Corporal (IMC), onde um IMC igual ou superior a 30 indica obesidade. Esta condição pode resultar de fatores genéticos, dieta desequilibrada, falta de atividade física e outros. A obesidade está associada a riscos aumentados de diversas doenças graves, como diabetes tipo 2, doenças cardíacas, hipertensão e problemas ortopédicos, entre outros. O tratamento geralmente envolve mudanças no estilo de vida, incluindo dieta saudável e exercícios físicos, e em casos severos, intervenções médicas como medicamentos ou cirurgia bariátrica podem ser consideradas.                
                </p>
            </div>
        </div>
    )

}

export default Tabela