import styles from './styles.module.css'
import Cadeira from '../cadeira'

const Semestre = () => {
    return (
        <>
            <div className={styles.semestre}>
                <Cadeira nome={"Matemática Discreta"}/>
            </div>
        </>
    )
}

export default Semestre;