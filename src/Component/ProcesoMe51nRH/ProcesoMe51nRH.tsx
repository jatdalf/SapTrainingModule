import styles from './ProcesoMe51nRH.module.css'
import imgVariante from '../../Assets/traerVariante.png'
import ejecutar from '../../Assets/iconoEjecutar.png'
import React, { useState } from 'react';
import NavigationButtons from '../NavigationButtons/NavigationButtons';


const ProcesoMe51nRH = ()=>{
    interface Transaction {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen1: string= "https://static.wixstatic.com/media/ef3a14_7240abbe74a14f2e8e9d16af389caa4d~mv2.png"
      const imagen2: string= "https://static.wixstatic.com/media/ef3a14_261d6d0152c8422f99ca5744692cafed~mv2.png"
      const imagen3: string= "https://static.wixstatic.com/media/ef3a14_85891a77a81d4225ab2478ed501fcce4~mv2.png"
      const imagen4: string= "https://static.wixstatic.com/media/ef3a14_df6951c4d2c04f02af37c5483a56c56d~mv2.png"
      const imagen5: string= "https://static.wixstatic.com/media/ef3a14_908f91bed5d845799bae2b51729160bc~mv2.png"
      const imagen6: string= "https://static.wixstatic.com/media/ef3a14_f8e694a4e9a14f0187d45d21e7037ac2~mv2.png"
      const imagen7: string= "https://static.wixstatic.com/media/ef3a14_12b98fef48eb4b7aa9022f60d839bbbb~mv2.png"
      const imagen8: string= "https://static.wixstatic.com/media/ef3a14_3cc0b4e2ff1440f8b3616b5084165425~mv2.png"    
      const imagen9: string= "https://static.wixstatic.com/media/ef3a14_d4a1ad7536604291af85a6474b49b1ad~mv2.png"
      const imagen10: string= "https://static.wixstatic.com/media/ef3a14_e528e375c6e5483caaf5185dca938a7e~mv2.png"
      const imagen11: string= "https://static.wixstatic.com/media/ef3a14_d01468534e4a4a3fa648ce3b9660f3df~mv2.png"

      const [transaction] = useState<Transaction[]>([
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
        <NavigationButtons currentStep={currentStep} totalSteps={transaction.length} onPrevious={handlePrevious} onNext={handleNext} />
      </div>
    )
}
    
export default ProcesoMe51nRH