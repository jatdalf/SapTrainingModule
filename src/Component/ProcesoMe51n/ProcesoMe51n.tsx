import styles from './ProcesoMe51n.module.css'
import imgVariante from '../../Assets/traerVariante.png'
import ejecutar from '../../Assets/iconoEjecutar.png'
import React, { useState } from 'react';
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import { Link } from "react-router-dom";

const ProcesoMe51n = ()=>{
    interface Transaction {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen1: string= "https://static.wixstatic.com/media/ef3a14_db6bc7dd3ab040b0805417055de18463~mv2.png"
       

      const [transaction] = useState<Transaction[]>([
        { id: 1, 
          imagen:imagen1, 
          explicacion: 'La generación de una solicitud de pedido (Solped) nace de una necesidad puntual, como ejemplo puede tratarse de la necesidad de adquisición de un bien (mueble, electrodoméstico, insumo, etc), de la contratación de un servicio (alquiler, revisiones médicas, cortes de cesped, etc.), o de cualquier otra necesidad por la que necesitamos generar en una Orden de Compra.\n\nA continuación realiza click sobre el botón que deseas para observar un caso de uso: '
        },
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
            <div className={styles.buttonContainer}>
              <Link to="/Procesos/ProcesoMe51nRH">
                <button className={styles.ButtonCaso}>Caso RRHH</button>
              </Link>
            </div>    
        </fieldset>
        
        <div className={styles.navigationContainer}>
          <NavigationButtons currentStep={currentStep} totalSteps={transaction.length} onPrevious={handlePrevious} onNext={handleNext} />
        </div>
      </div>
    )
}
    
export default ProcesoMe51n