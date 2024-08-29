import styles from './Home.module.css';
import logoOcasa from '../../Assets/LogoOcasaBig.png'
import { Link } from "react-router-dom";

const Home = ()=>{  
  
    return(
        <div className={styles.Home}>
            <img src={logoOcasa} className={styles.HomeLogo} alt="logo" />  
            <div className={styles.Fondo}>
                <Link to='/Transacciones'>
                    <button className={styles.Transacciones}>Transacciones</button>
                </Link>
            </div>
        </div>
    )
}

export default Home