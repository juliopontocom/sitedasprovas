import styles from './styles.module.css'
import Semestre from '../semestre';

const Container = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.titulo}>Site das <br></br>Provas</div>
                <div className={styles.botoes}>
                    <div className={styles.botaoCurso}>Engenharia de Software</div>
                    <div className={styles.botaoSemestre}>semestre 1</div>
                </div>
                <Semestre></Semestre>
            </div>
        </>
    )
}

export default Container;