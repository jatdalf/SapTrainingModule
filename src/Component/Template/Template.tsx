import styles from './Template.module.css'
import Volver from '../Volver/Volver';
import imgVariante from '../../Assets/traerVariante.png'
import ejecutar from '../../Assets/iconoEjecutar.png'
import React, { useState } from 'react';


const Template = ()=>{
    interface template {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen1: string= ""
      const imagen2: string= ""
      const imagen3: string= ""
      const imagen4: string= ""
      const imagen5: string= ""
      const imagen6: string= ""
      const imagen7: string= ""
      const imagen8: string= ""    

      const [transaction] = useState<template[]>([
        { id: 1, imagen:imagen1, explicacion: 'reloj ', extraImg: imgVariante },
        { id: 2, imagen:imagen2, explicacion: '&#10094;ENTER&#10095;' },
        { id: 3, imagen:imagen3, explicacion: 'Tanto' },
        { id: 4, imagen:imagen4, explicacion: '"&#10004;" (tilde verde)' },
        { id: 5, imagen:imagen5, explicacion: '"&#10006;" (cruz roja)' },
        { id: 6, imagen:imagen6, explicacion: 'Volveremos ', extraImg: ejecutar },
        { id: 7, imagen:imagen7, explicacion: 'El sistema ' },
        { id: 8, imagen:imagen8, explicacion: 'Por último' }
         ]);
    
      const [currentStep, setCurrentStep] = useState<number>(1);
    
      const handleNext = () => {
        if (currentStep < transaction.length) {
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
        <img src={transaction[currentStep - 1].imagen} className={styles.trxImage} alt="imagen de la transacción" />
        <fieldset className={styles.StepContainer}>
            <legend>Paso {currentStep}</legend>
            <p dangerouslySetInnerHTML={{ __html: transaction[currentStep - 1]?.explicacion.replace(/\n/g, '<br />') }} />

            {transaction[currentStep - 1].extraImg && (
            <img src={transaction[currentStep - 1].extraImg} className={styles.inlineImage} alt="Imagen adicional" />
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
            className={`${styles.rightArrow} ${currentStep === transaction.length ? styles.disabledButton : ''}`}
            onClick={handleNext}
            disabled={currentStep === transaction.length} // Deshabilita si estamos en el último paso
            >&#10148;
          </button>
          <div className={styles.volverContainer}>
            <Volver />
          </div>
        </div>

      </div>
    )
}
    
export default Template