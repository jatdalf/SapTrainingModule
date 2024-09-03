import styles from './Lt12.module.css'
import trxImage from '../../Assets/Lt12-01.png';
import Volver from '../Volver/Volver';
import React, { useState } from 'react';

const Lt12 = ()=>{
    interface TrxLt12 {
        id: number;
        imagen: string;
        explicacion: string;
      }
    
      const [trxLt12] = useState<TrxLt12[]>([
        { id: 1, imagen:'../../Assets/Lt12-01.png', explicacion: 'El primer campo a completar es el "Número de OT" donde ingresamos el numero de Orden de trabajo a confirmar' },
        { id: 2, imagen:'../../Assets/Lt12-01.png',explicacion: 'En segundo lugar ingresamos el "Número de almacén" correspondiente a la Orden de trabajo que vamos a confirmar\nLuego presionamos &#10094;ENTER&#10095;' },
        { id: 3, imagen:'../../Assets/Lt12-01.png',explicacion: '3' },
        { id: 4, imagen:'../../Assets/Lt12-01.png',explicacion: '4' },
        { id: 5, imagen:'../../Assets/Lt12-01.png',explicacion: '5' },
        { id: 6, imagen:'../../Assets/Lt12-01.png',explicacion: '6' },
        { id: 7, imagen:'../../Assets/Lt12-01.png',explicacion: '7' },
        { id: 8, imagen:'../../Assets/Lt12-01.png',explicacion: '8' }
      ]);
    
      const [currentStep, setCurrentStep] = useState<number>(1);
    
      const handleNext = () => {
        if (currentStep < trxLt12.length) {
          setCurrentStep(currentStep + 1);
        }
      };
    
      const handlePrevious = () => {
        if (currentStep > 1) {
          setCurrentStep(currentStep - 1);
        }
      };


    return(
      <div>
        <img src={trxImage} className={styles.trxImage} alt="imagen de la transacción" />
        <fieldset className={styles.StepContainer}>
        <legend>Paso {currentStep}</legend>
        <p dangerouslySetInnerHTML={{ __html: trxLt12[currentStep - 1]?.explicacion.replace(/\n/g, '<br />') }} />
        
        </fieldset>
        <div className={styles.buttonsContainer}>
            <button className={styles.leftArrow} onClick={handlePrevious}>&#10148;</button>
            <span className={styles.stepNumber}>PASO {currentStep}</span>
            <button className={styles.rightArrow} onClick={handleNext}>&#10148;</button>
            <div className={styles.volverContainer}>
            <Volver />
            </div>
        </div>
      </div>
    )
}

export default Lt12