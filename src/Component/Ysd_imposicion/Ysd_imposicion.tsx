import styles from './Ysd_imposicion.module.css'
import Volver from '../Volver/Volver';
import imgVariante from '../../Assets/traerVariante.png'
import ejecutar from '../../Assets/iconoEjecutar.png'
import React, { useState } from 'react';


const Ysd_imposicion = ()=>{
    interface Ysd_imposicion {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen1: string= "https://static.wixstatic.com/media/ef3a14_f78e862272f64b959b66c98d3fafeec8~mv2.png"
      const imagen2: string= "https://static.wixstatic.com/media/ef3a14_b5d1ce51870441e7a127e494deabb31c~mv2.png"
      const imagen3: string= "https://static.wixstatic.com/media/ef3a14_19e273bb6c094f449e2e1a124e89c2bd~mv2.png"
      const imagen4: string= "https://static.wixstatic.com/media/ef3a14_57189a7ed4754d55929d7e550a5843a4~mv2.png"
     

      const [trxYupdcontimas] = useState<Ysd_imposicion[]>([
        { id: 1, imagen:imagen1, explicacion: 'En la pantalla principal ingresaremos el número de guia pre-impresa.\n\nEste numero puede comenzar con ECO o con la letra de la guia del pais \nM para las guias de Miami, N para New York, B para Buenos Aires etc. etc. '},
        { id: 2, imagen:imagen2, explicacion: 'Completamos la cantidad de bultos que compone el envio' },
        { id: 3, imagen:imagen3, explicacion: 'Completamos el Peso real del envío' },
        { id: 4, imagen:imagen4, explicacion: 'Hacemos Click en el icono de "Imponer"', extraImg: ejecutar  },
      ]);
    
      const [currentStep, setCurrentStep] = useState<number>(1);
    
      const handleNext = () => {
        if (currentStep < trxYupdcontimas.length) {
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
        <img src={trxYupdcontimas[currentStep - 1].imagen} className={styles.trxImage} alt="imagen de la transacción" />
        <fieldset className={styles.StepContainer}>
            <legend>Paso {currentStep}</legend>
            <p dangerouslySetInnerHTML={{ __html: trxYupdcontimas[currentStep - 1]?.explicacion.replace(/\n/g, '<br />') }} />

            {trxYupdcontimas[currentStep - 1].extraImg && (
            <img src={trxYupdcontimas[currentStep - 1].extraImg} className={styles.inlineImage} alt="Imagen adicional" />
            )}
        </fieldset>

        <div className={styles.buttonsContainer}>
          <button 
            className={`${styles.leftArrow} ${currentStep === 1 ? styles.disabledButton : ''}`}
            onClick={handlePrevious}
            disabled={currentStep === 1} // Deshabilita si estamos en el primer paso
            >&#10148;
          </button>
          <span className={styles.stepNumber}>PASO {currentStep}</span>
          <button 
            className={`${styles.rightArrow} ${currentStep === trxYupdcontimas.length ? styles.disabledButton : ''}`}
            onClick={handleNext}
            disabled={currentStep === Ysd_imposicion.length} // Deshabilita si estamos en el último paso
            >&#10148;
          </button>
          <div className={styles.volverContainer}>
            <Volver />
          </div>
        </div>

      </div>
    )
}
    
export default Ysd_imposicion