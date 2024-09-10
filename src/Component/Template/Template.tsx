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

      const [trxYupdcontimas] = useState<template[]>([
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
    
export default Template