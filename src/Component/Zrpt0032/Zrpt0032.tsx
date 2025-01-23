import styles from './Zrpt0032.module.css'
import ejecutar from '../../Assets/iconoEjecutar.png'
import React, { useState } from 'react';
import NavigationButtons from '../NavigationButtons/NavigationButtons';


const Zrpt0032 = ()=>{
    interface Transaction {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen1: string= "https://static.wixstatic.com/media/ef3a14_75edf90b163d47bdb7d17aff56f2e0ca~mv2.png"
      const imagen2: string= "https://static.wixstatic.com/media/ef3a14_301a3dd91d124b34b36b5733d6d39f6b~mv2.png"
  

      const [transaction] = useState<Transaction[]>([
        { id: 1, imagen:imagen1, explicacion: 'Ingresaremos en el campo "Distrito", entre asteriscos, la localidad a buscar\nTeniendo en cuenta de ingresar el nombre siempre en MAYUSCULAS\nCaso contrario el sistema no devolverá resultados\n\nLuego presionar sobre el icono "ejecutar"', extraImg: ejecutar },
        { id: 2, imagen:imagen2, explicacion: 'En la siguiente pantalla podemos observar los datos de las localidades que coinciden con los criterios de busqueda\n\nIdentificamos cual es la localidad buscada y visualizamos que provincia atiende, cual es el código postal y que Centro (Sucursal SAP) atiende dicha localidad' },
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
        <NavigationButtons currentStep={currentStep} totalSteps={transaction.length} onPrevious={handlePrevious} onNext={handleNext} />
      </div>
    )
}
    
export default Zrpt0032