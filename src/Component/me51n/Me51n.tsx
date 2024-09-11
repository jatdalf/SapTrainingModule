import styles from './Me51n.module.css';
import trxImage from '../../Assets/me51n-01.png';
import Volver from '../Volver/Volver';
import React, { useState } from 'react';

const Me51n = () => {
  interface TrxMe51n {
    id: number;
    explicacion: string;
  }

  const [TrxMe51n] = useState<TrxMe51n[]>([
    { id: 1, explicacion: 'Iremos completando el formulario, columna a columna.\nEn la primera columna "POS" no introducimos nada\nEn la segunda columna "I" introducimos una "K" para los materiales con centro de Coste o una "A" para los activos fijos' },
    { id: 2, explicacion: 'En la columna "P" no introducimos nada\nEn la columna "MATERIAL" ingresamos el material que corresponda según la siguiente lista: \nOCASA001: BIENES DE USO\nOCASA002: INFORMÁTICA\nOCASA003: INSTITUCIONAL\n OCASA004: LIBRERIA\n OCASA005: LIMPIEZA\n OCASA006: MATERIAL OPERATIVO \n OCASA007: BEBIDAS & SNACKS\n OCASA008: SERVICIOS EN GENERAL\n OCASA009: PROYECTOS & OBRAS \n OCASA010: SEGURIDAD\n OCASA011: OTROS ARTÍCULOS\n OCASA012: OPERACIONES OS \n OCASA013:LICENCIAS SOFTWARE' },
    { id: 3, explicacion: 'En la columna "Texto breve" luego ingresaremos el texto que identifique lo que estamos solicitando, pero por ahora lo dejamos en blanco' },
    { id: 4, explicacion: 'Ingresamos la "Cantidad" en la columna correspondiente\nA la columna "UM" la dejamos en blanco' },
    { id: 5, explicacion: 'Introducimos el valor del ítem (SIN IVA) en el campo "PrecioVal"\nEn la columna siguiente: "Moneda" introducimos lo que corresponda (normalmente ARS que es peso argentino)' },
    { id: 6, explicacion: 'La columna "Valor Total" se llena sola\nLa columna "T" no completamos nada\n En la columna "Fecha de entrega" ingresamos la fecha tentativa que esperamos la recepción del artículo' },
    { id: 7, explicacion: '"Grupo artículos" no completamos nada\n En la columna "Centro" ingresamos el centro al que se le debe imputar el gasto (Ej: A001=BUE / A005=COR / A012=ROS, etc.)' },
    { id: 8, explicacion: 'En la columna "Almacén" desplegamos y seleccionamos el que corresponda (normalmente 0009 General)' },
    { id: 9, explicacion: 'En la columna "Gcp" ingresamos el Grupo de compras que corresponda, ejemplo:\n Para Recursons humanos "RH"\n Para Salud "OSA"\n Para operaciones:\nOP1 AR-Op.Metropolit.\nOP2 AR-Operac.Reg.1SUR\nOP3 AR-Operac.Reg.2NEA\nOP4 AR-Operac.Reg.3NOA\nOP6 AR-Operac.Cuyo' },
    { id: 10, explicacion: 'La última columna a completar es la "N° nec.", aquí va el número de proyecto; de no haber ningún proyecto involucrado ingresaremos el número "0"' }
  ]);

  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    if (currentStep < TrxMe51n.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <img src={trxImage} className={styles.trxImage} alt="imagen de la transacción" />
      <fieldset className={styles.StepContainer}>
        <legend>Paso {currentStep}</legend>
        <p dangerouslySetInnerHTML={{ __html: TrxMe51n[currentStep - 1]?.explicacion.replace(/\n/g, '<br />') }} />
        
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
            className={`${styles.rightArrow} ${currentStep === TrxMe51n.length ? styles.disabledButton : ''}`}
            onClick={handleNext}
            disabled={currentStep === TrxMe51n.length} // Deshabilita si estamos en el último paso
            >&#10148;
          </button>
          <div className={styles.volverContainer}>
            <Volver />
          </div>
      </div>

    </div>
  );
};

export default Me51n;