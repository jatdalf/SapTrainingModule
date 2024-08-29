import styles from './Volver.module.css'
import { Link } from "react-router-dom";

const Volver = ()=>{
    return(
      <Link to="/Home">
        <button className={styles.volver}><span className={styles.arrow}>&#10148;</span> Volver</button>        
      </Link>
      
    )
}

export default Volver;