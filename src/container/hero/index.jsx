import style from './Hero.module.css';
import imgHero from '../hero/heroImg.png';

const Hero = () => {
    return (
        <>
        <header className='hero'>
            <div className='container'>
                <img className={style.imgHero} src={imgHero} alt="" />
                <h1 className={style.heroTitle}>IMC: O QUE É?</h1>
            </div>
        </header>
        <section>
            <div className='container'>
                <h1 className={style.title}>Índice de Massa Corporal (IMC)</h1>
                <hr className={style.hr}/>
                <p className={style.paragrafo}>
                    O Índice de Massa Corporal (IMC) é uma medida amplamente utilizada para avaliar se uma pessoa está dentro de um peso saudável para sua altura. Ele é calculado dividindo o peso da pessoa em quilogramas pela altura ao quadrado em metros (IMC = peso / altura^2).
                </p>
                <h4 className={style.subTitle}>Uso e Limitações do IMC:</h4>
                <ul className={style.lista}>
                    <li className={style.lista__item}>
                        <p className={style.paragrafo}>
                            <strong>Facilidade de Cálculo:</strong> O IMC é fácil de calcular e pode ser feito rapidamente com as informações básicas de peso e altura.
                        </p>
                    </li>
                    <li className={style.lista__item}>
                        <p className={style.paragrafo}>
                            <strong>Indicador Geral de Saúde:</strong> Serve como um indicador geral de peso saudável, mas não leva em consideração a distribuição de gordura corporal nem a composição corporal (como a proporção de músculo versus gordura).
                        </p>
                    </li>
                    <li className={style.lista__item}>
                        <p className={style.paragrafo}>
                            <strong>Variações Étnicas e Individuais:</strong> Pessoas de diferentes grupos étnicos podem ter diferentes proporções de gordura corporal para um mesmo IMC. Além disso, atletas e pessoas com alta massa muscular podem ter um IMC mais alto sem serem excessivamente gordas.
                        </p>
                    </li>
                    <li className={style.lista__item}>
                        <p className={style.paragrafo}>
                            <strong>Recomendações Clínicas:</strong> Apesar de ser amplamente utilizado, o IMC deve ser interpretado com cautela, especialmente em casos individuais complexos. Consultas com profissionais de saúde são importantes para uma avaliação mais completa da saúde.
                        </p>
                    </li>
                </ul>
                <hr className={style.hr}/>
            </div>

        </section>
        </>

    )
}

export default Hero