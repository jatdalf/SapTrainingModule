import styles from './Vl74.module.css'
import imgVariante from '../../Assets/traerVariante.png'
import ejecutar from '../../Assets/iconoEjecutar.png'
import React, { useState } from 'react';
import NavigationButtons from '../NavigationButtons/NavigationButtons';


const Vl74 = ()=>{
    interface Transaction {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen1: string= "https://static.wixstatic.com/media/ef3a14_ef13ef09a9ad4fd4b2bf1b27a4ef1226~mv2.png"
      const imagen2: string= "https://static.wixstatic.com/media/ef3a14_fb57c5f4e4ad4d66966fc7fe10a83035~mv2.png"
      const imagen3: string= "https://static.wixstatic.com/media/ef3a14_fe373cd7ac184a8c888c5e816fe0d650~mv2.png"
      const imagen4: string= "https://static.wixstatic.com/media/ef3a14_3d52e4b44a5f4f579ee6c36d17659291~mv2.png"


      const [transaction] = useState<Transaction[]>([
        { id: 1, imagen:imagen1, explicacion: 'En en campo "Unidad de manipuación" ingresamos el numero de HU a imprimir\n\nEn caso de que contemos con más de una HU, presionamos sobre el botón de la flecha amarilla\nen la ventana que se visualiza ingresamos todos los números de HU a imprimir\n\npor último presionamos sobre el botón "Ejecutar" de esa pantalla', extraImg: ejecutar},
        { id: 2, imagen:imagen2, explicacion: 'El segundo paso es completar el campo "Clase de mensaje"\n\nSi no lo conocemos presonamos sobre el icono de la derecha del campo y ejegimos de la lista la clase de mensaje correspondiente\nLuego presionamos sobre el boton del reloj (Ejecutar)', extraImg: ejecutar },
        { id: 3, imagen:imagen3, explicacion: 'En la siguiente pantalla procederemos a tildar todos los cuadraditos a la izquierda del número de HU\nLuego procedemos a realizar click sobre el boton del reloj (Ejecutar)', extraImg: ejecutar },
        { id: 4, imagen:imagen4, explicacion: 'Por último seleccionamos la impresora que vamos a utilizar\nY presionamos sobre el botón "Imprimir"\n\nDebemos repetir este paso por cada HU tildada' },

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
    
export default Vl74