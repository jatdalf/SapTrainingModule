import styles from './Lt12.module.css'
import React, { useState } from 'react';
import NavigationButtons from '../NavigationButtons/NavigationButtons';

const Lt12 = ()=>{
    interface Transaction {
        id: number;
        imagen: string;
        explicacion: string;
      }
    
      const [trxLt12] = useState<Transaction[]>([
        { id: 1, imagen:'https://static.wixstatic.com/media/ef3a14_2069ac222e73459c9e2c57901c6862a5~mv2.png', 
            explicacion: 'El primer campo a completar es el "Número de OT" donde ingresamos el numero de Orden de trabajo a confirmar\n\nLuego ingresamos el "Número de almacén" correspondiente a la Orden de trabajo que vamos a confirmar\n\nUna vez completos esos campos presionamos &#10094;ENTER&#10095;' },
        { id: 2, imagen:'https://static.wixstatic.com/media/ef3a14_7a1b0410e5464ad39b349a7ba4f4df5a~mv2.png',
        explicacion: 'En la segunda pantalla presionamos primeramente sobre el boton "CONFIRMAR INTERNAMENTE"\n\nLuego hacemos click sobre el disco (Guardar)' },
        { id: 3, imagen:'https://static.wixstatic.com/media/ef3a14_f24ebdc1a21c478b89abda67246d6a85~mv2.png',
        explicacion: 'En esta pantalla podemos editar los datos que estan con fondo en blanco\n\nDependiendo el AP hay datos que nos va a solicitar como obligatorios\nEn este ejemplo pide un "valor Declarado"\n\nSiempre se confirma por 1 bulto que es el minimo posible, en caso que sea solo 1 bulto procedemos a cargar el peso y las medidas\n\nEn caso de que el envio contenga mas bultos, los agregamos en el campo "BULTOS" y presionamos &#10094;ENTER&#10095;' },
        { id: 4, imagen:'https://static.wixstatic.com/media/ef3a14_f8992232e32b46d78bab7aab10a0aeb6~mv2.png',
        explicacion: 'Si usamos la opcion de agregar bultos al envio, veremos esta pantalla donde debemos ingresar:\nEl Peso y las medidas del bulto adicional (o los bultos adicionales)\n\nNota: esto vale para todos los bultos, por ejemplo si agregamos 5 bultos el peso y las medidas agregadas en esta seccion se aplicaran 5 veces, una por cada bulto\n\nEn caso de que necesitemos agregar bultos con diferentes pesos y medidas se debe repetir esta accion una vez por cada bulto con diferente peso y medida hasta completar el envio total' },
        { id: 5, imagen:'https://static.wixstatic.com/media/ef3a14_8598a7d509b546a79b6ae743ad76f6fb~mv2.png',
        explicacion: 'Una vez que estan todos los bultos con su peso y tamaño agregados, los campos verificados y las observaciones asentadas (si las hubiere)\nProcedemos a grabar los datos (Click en el icono del disco)' },
        { id: 6, imagen:'https://static.wixstatic.com/media/ef3a14_2c89a3d1aeb6467eb94a62562571e752~mv2.png',
        explicacion: 'El sistema procesara los datos, descontara del stock los materiales involucrados y nos devolvera un número de equipo\n\nEse es el número unico de seguimiento interno' },
        { id: 7, imagen:'https://static.wixstatic.com/media/ef3a14_a06c4955c08047929de2118b9227f45c~mv2.png',
        explicacion: 'Por último, el sistema nos da la posibilidad de realizar una impresion rápida de algunos formatos disponibles\nSi necesitamos realizar una impresion de alguna de las opciones del listado que nos aporta el sistema, clickeamos la opcion y presionamos sobre el  "&#10004;" (tilde verde)\nEn caso que no necesitemos ninguna impresion de las que se encuentran listadas, o que deseemos imprimir luego, pulsaremos sobre la "&#10006;" (cruz roja)' }
      ]);
    
      const [currentStep, setCurrentStep] = useState<number>(1);
    
      const handleNext = () => {
        if (currentStep < trxLt12.length) {
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
        <img src={trxLt12[currentStep - 1].imagen} className={styles.trxImage} alt="imagen de la transacción" />
        
        <fieldset className={styles.StepContainer}>
          <legend>Paso {currentStep}</legend>
          <p dangerouslySetInnerHTML={{ __html: trxLt12[currentStep - 1]?.explicacion.replace(/\n/g, '<br />') }} />
        </fieldset>
    
        <NavigationButtons currentStep={currentStep} totalSteps={trxLt12.length} onPrevious={handlePrevious} onNext={handleNext} />

      </div>
    )
}

export default Lt12