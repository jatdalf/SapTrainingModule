import styles from './Migo.module.css'
import Volver from '../Volver/Volver';
import imgVariante from '../../Assets/traerVariante.png'
import ejecutar from '../../Assets/iconoEjecutar.png'
import React, { useState } from 'react';


const Migo = ()=>{
    interface migo {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen1: string= "https://static.wixstatic.com/media/ef3a14_c92822dff2d2404dbce586181a04a9c9~mv2.png"
      const imagen2: string= "https://static.wixstatic.com/media/ef3a14_6639337d4f4541b8a9d71f18ec36fb9c~mv2.png"
      const imagen3: string= "https://static.wixstatic.com/media/ef3a14_97334ebdea1a4c7497218cda12273f6a~mv2.png"
      const imagen4: string= "https://static.wixstatic.com/media/ef3a14_a51711f5da514782ac58511ca92be436~mv2.png"
      const imagen5: string= "https://static.wixstatic.com/media/ef3a14_c05459fad00d4076aabd76d95d768287~mv2.png"
      const imagen6: string= "https://static.wixstatic.com/media/ef3a14_78e6e235d4cb40c69ae648358a7729b6~mv2.png"
      const imagen7: string= "https://static.wixstatic.com/media/ef3a14_d45ceb6f5a524fc295d7dbfde32548bc~mv2.png"
      const imagen8: string= "https://static.wixstatic.com/media/ef3a14_f320922897a547e0b44b3acbed2ad4e4~mv2.png"   
      const imagen9: string= "https://static.wixstatic.com/media/ef3a14_9e774df077d141ffb60f8afb0bc2f974~mv2.png"     

      const [trxYupdcontimas] = useState<migo[]>([
        { id: 1, imagen:imagen1, explicacion: 'Verificamos que se encuentre seleccionada la opcion "ENTRADA DE MERCANCIAS", caso contrario, seleccionamos dicha opcion.\nSeguidamente debe estar la opción "PEDIDO"\n\nEn el recuadro siguiente procederemos a ingresar el número de la Orden de compra (OC) a tratar y presionaremos &#10094;ENTER&#10095;' },
        { id: 2, imagen:imagen2, explicacion: 'Verificamos "Fecha de documento" y "Fecha contab."\n\n"Fecha documento": Es la fecha relacionada al momento real del servicio o de la recepción de la mercadería.\n\n"Fecha contab.": Es la fecha en la que va a impactar el gasto contablemente (solo puede imputarse al mes en curso, o al mes anterior hasta el 4° día habil del mes siguiente)\n\nUna vez verificado procedemos a ingresar el número de comprobante asociado:\n"Carta de porte": Aqui ingresamos los ultimos digitos\n"Txt.cab": Aquí ingresamos el número completo con todos los ceros incluidos' },
        { id: 3, imagen:imagen3, explicacion: '' },
        { id: 4, imagen:imagen4, explicacion: '' },
        { id: 5, imagen:imagen5, explicacion: '' },
        { id: 6, imagen:imagen6, explicacion: '' },
        { id: 7, imagen:imagen7, explicacion: '' },
        { id: 8, imagen:imagen8, explicacion: 'Por último' },
        { id: 9, imagen:imagen9, explicacion: 'Por último' }
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
    
export default Migo