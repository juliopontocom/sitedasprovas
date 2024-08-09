import styles from './styles.module.css'

const Cadeira = ( props ) => {
    return (
        <>
            <div className={styles.cadeira}>
                <div className={styles.nome}>
                    {props.nome}
                </div>
            </div>
        </>
    )
}

export default Cadeira;