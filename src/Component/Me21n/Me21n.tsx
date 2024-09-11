import styles from './Me21n.module.css'
import Volver from '../Volver/Volver';
import imgGrabar from '../../Assets/grabar.png'
import React, { useState } from 'react';


const Me21n = ()=>{
    interface me21n {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen1: string= "https://static.wixstatic.com/media/ef3a14_3f1cec1df6e54c9abf62d38e95c2da92~mv2.png"
      const imagen2: string= "https://static.wixstatic.com/media/ef3a14_68b712edda564ea4b911df388f71d0ce~mv2.png"
      const imagen3: string= "https://static.wixstatic.com/media/ef3a14_048943c2bd83416e8cbe97318d7f5f96~mv2.png"
      const imagen4: string= "https://static.wixstatic.com/media/ef3a14_f5966287def0424893f533ae3799815c~mv2.png"
      const imagen5: string= "https://static.wixstatic.com/media/ef3a14_08673a28fcd94b5895c3fdfdd2f58866~mv2.png"
      const imagen6: string= "https://static.wixstatic.com/media/ef3a14_d883b40684494002b5c142e30cf3772e~mv2.png"
       

      const [trxYupdcontimas] = useState<me21n[]>([
        { id: 1, imagen:imagen1, explicacion: 'Primeramente, verificamos que se encuentre seleccinado "PEDIDO DE TRASLADO"\n\nLuego ingresamos en el campo "Ce.suministrad" el centro suministrador de los items que vamos a solicitar\nEn el ejemplo seleccionaremos el centro del Almacen central general de Tortuguitas que es "A050"' },
        { id: 2, imagen:imagen2, explicacion: 'En la grilla completaremos los siguientes datos:\n\n*"Material": ingresamos el número de material SAP\n*"Ctd.pedido": ingresamos la cantidad a solicitar, y presionamos &#10094;ENTER&#10095;' },
        { id: 3, imagen:imagen3, explicacion: 'Esto nos llevara a completar los datos de imputación:\n*"Cta.Mayor": este dato viene pre-cargado\n*"Centro de coste":Aqui ingresaremos el código correspondiente al CeCo.\n*"Orden": este campo lo dejamos vacío\n*"Area funcional": Aqui ingresaremos el código IATA correspondiente a la sucursal a la que se le debe imputar el costo\n\nPor último ingresamos la fecha tentativa de recepcion de los materiales' },
        { id: 4, imagen:imagen4, explicacion: 'Repetimos el proceso por cada material que necesitemos solicitar\n\nUna vez que esten asentados todos los materiales, y hayamos verificado que ninguna posición tenga un icono rojo, caso contrario, resolvemos la inconsistencia primero, hasta que todas las lineas queden con el icono amarillo, o sin icono alguno, entonces procedemos a guardar el pedido haciendo click sobre el icono del disco ', extraImg: imgGrabar },
        { id: 5, imagen:imagen5, explicacion: 'Al tener al menos una posicion con el icono amarillo, visualizaremos un cuadro con tres opciones, realizaremos click en "Grabar"' },
        { id: 6, imagen:imagen6, explicacion: 'Visualizaremos al final de la pantalla un mensaje con el número de pedido de traslado generado, tomamos nota del mismo' },
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
            disabled={currentStep === trxYupdcontimas.length} // Deshabilita si estamos en el último paso
            >&#10148;
          </button>
          <div className={styles.volverContainer}>
            <Volver />
          </div>
        </div>

      </div>
    )
}
    
export default Me21n