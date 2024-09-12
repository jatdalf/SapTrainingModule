import styles from './NotFound.module.css'
import NotFoundImg from '../../Assets/404.png';
import Volver from '../Volver/Volver';

const NotFound = ()=>{
  return(
    <div className={styles.notFoundContainer}>
      <img className={styles.notFoundImg} src={NotFoundImg} alt="error 404 page not found"/>
      <div className={styles.volverButtonContainer}>  
        <Volver />
      </div>
    </div>
  )
}

export default NotFound