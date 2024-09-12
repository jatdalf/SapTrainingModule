import styles from './Home.module.css';
import logoOcasa from '../../Assets/LogoOcasaBig.png'
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Home = ()=>{  
    useEffect(() => {
        window.scrollTo(0, 0);  // Mueve el scroll a la posición (0, 0)
      }, []);  // Solo se ejecuta la primera vez que se carga el componente
  
  
    return(
        <div className={styles.Home}>
            <img src={logoOcasa} className={styles.HomeLogo} alt="logo" />  
            <div className={styles.Fondo}>
              <div className={styles.transactionsButtonContainer}>
                <Link to='/Transacciones'>
                    <button className={styles.Transacciones}>Transacciones</button>
                </Link>
              </div>
              <div className={styles.processButtonContainer}>
                <Link to='/Procesos'>
                    <button className={styles.Transacciones}>Procesos</button>
                </Link>
              </div>
            </div>
        </div>
    )
}

export default Home