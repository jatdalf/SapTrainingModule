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
      const imagen2: string= "https://static.wixstatic.com/media/ef3a14_7472fde0f9a04a369ad7a1322adf824e~mv2.png"
      const imagen3: string= "https://static.wixstatic.com/media/ef3a14_a0c2877ec03e4fa3adb2878aa1b7501d~mv2.png"
      const imagen4: string= "https://static.wixstatic.com/media/ef3a14_2e0a300829444c778b88547920cb6fa5~mv2.png"      
      const imagen5: string= "https://static.wixstatic.com/media/ef3a14_0890ec056eca4d559f2c342180358c06~mv2.png"
      const imagen6: string= "https://static.wixstatic.com/media/ef3a14_0440e438028a42feaacd4eaaf3bc6be9~mv2.png"
      const imagen7: string= "https://static.wixstatic.com/media/ef3a14_3ed38bdab34243a886c93efcd925f914~mv2.png"
      const imagen8: string= "https://static.wixstatic.com/media/ef3a14_7ddcfe618d4344bb8b0c8393dac32769~mv2.png"
      const imagen9: string= "https://static.wixstatic.com/media/ef3a14_a606e66ef44540ae874e7f7d018bd2e9~mv2.png"
      const imagen10: string= "https://static.wixstatic.com/media/ef3a14_70cf1c7354a949278cb80fe5c4424aec~mv2.png"
      const imagen11: string= "https://static.wixstatic.com/media/ef3a14_73464fd68f934552a9670fc6fdda2805~mv2.png"
      const imagen12: string= "https://static.wixstatic.com/media/ef3a14_5bd8ef80ab7c414e98465213ca7c4130~mv2.png"
      const imagen13: string= "https://static.wixstatic.com/media/ef3a14_c0086e23baf2476fb0658d8593d36c93~mv2.png"
      const imagen14: string= "https://static.wixstatic.com/media/ef3a14_119362cd67d64f09a2e349ba49c51bd8~mv2.png"
      const imagen15: string= "https://static.wixstatic.com/media/ef3a14_0936da82f85e49a285aec9940aceee38~mv2.png"
      const imagen16: string= "https://static.wixstatic.com/media/ef3a14_36cd8898dea148488dbcf96bd6ea02da~mv2.png"
      const imagen17: string= "https://static.wixstatic.com/media/ef3a14_7637435243ca4a40b7f436b35d8d68dd~mv2.png"

      const imagenx2: string= "https://static.wixstatic.com/media/ef3a14_261d6d0152c8422f99ca5744692cafed~mv2.png"
      const imagenx3: string= "https://static.wixstatic.com/media/ef3a14_85891a77a81d4225ab2478ed501fcce4~mv2.png"
      const imagenx4: string= "https://static.wixstatic.com/media/ef3a14_df6951c4d2c04f02af37c5483a56c56d~mv2.png"
      const imagenx5: string= "https://static.wixstatic.com/media/ef3a14_908f91bed5d845799bae2b51729160bc~mv2.png"
      const imagenx6: string= "https://static.wixstatic.com/media/ef3a14_f8e694a4e9a14f0187d45d21e7037ac2~mv2.png"
      const imagenx7: string= "https://static.wixstatic.com/media/ef3a14_12b98fef48eb4b7aa9022f60d839bbbb~mv2.png"
      const imagenx8: string= "https://static.wixstatic.com/media/ef3a14_3cc0b4e2ff1440f8b3616b5084165425~mv2.png"    
      const imagenx9: string= "https://static.wixstatic.com/media/ef3a14_d4a1ad7536604291af85a6474b49b1ad~mv2.png"
      const imagenx10: string= "https://static.wixstatic.com/media/ef3a14_e528e375c6e5483caaf5185dca938a7e~mv2.png"
      const imagenx11: string= "https://static.wixstatic.com/media/ef3a14_d01468534e4a4a3fa648ce3b9660f3df~mv2.png"

      const [transaction] = useState<Transaction[]>([
        { id: 1, imagen:imagen1, explicacion: 'En este caso de ejemplo, tenemos la necesidad de reaalizar una OC por servicios médicos prestados\n\nEn este caso puntual tenemos dos categorías:\n"Medicación & Imagenes"\n"Control de ausentismo"' },
        { id: 2, imagen:imagen2, explicacion: 'Ingresamos a la transaccion SAP ME51N\n\nVerificamos que al costado del icono del carrito, se encuentre seleccionada "Solicitud de Pedido"\n\nRealizamos click sobre el icono de "Cabecera"' },
        { id: 3, imagen:imagen3, explicacion: 'Visualizaremos un sector donde podremos agregar una descripción breve sobre el motivo de la solicitud que estamos realizando\n\nUna vez completo el resumen, volvemos a realizar click sobre el mismo Icono de Cabecera' },
        { id: 4, imagen:imagen4, explicacion: 'En la siguiente sección visualizaremos una grilla, donde iremos completando las siguientes columnas:\n\n*La columna "Pos" dejamos en blanco\n*La columna "I" completamos con una letra "k" para items con centro de costo, o con una letra "a" para items con Activo Fijo\n(Requieren numero de activo fijo todos aquellos productos que se consideren un bien perdurable, y superen un monto determinado en $, como por ejemplo un microondas, una silla de escritorio, un locker, etc)\nLos Servicios, como en este ejemplo, no son activos fijos, por lo que van por centro de costo\nAnte dudas o consultas sobre si un material requiere o no activo fijo, enviar mail a altasactivosfijos@ocasa.com\n\n*El siguiente campo a completar es el número de material, si no contamos con un número específico de material, seleccionaremos de la lista uno genérico que se ajuste al item que estamos solicitando\nPara esto realizamos click sobre el icono de la derecha que aparece al posicionarnos sobre la celda, esto desplegara una nueva ventana\nNos posicionamos sobre la pestaña "Número / Texto breve de material", aqui en el campo "MATERIAL" ingresamos el texto OCASA0* y presionamos &#10094;ENTER&#10095;' },
        { id: 5, imagen:imagen5, explicacion: 'Seleccionamos el material que se ajuste mas a nuestro caso, en este ejemplo seleccionaremos "SERVICIOS EN GENERAL" que corresponde al material OCASA008\n(Hacemos doble click sobre esa linea)' },
        { id: 6, imagen:imagen6, explicacion: '*En el campo "Texto Breve", por ahora no ingresaremos nada (si ingresamos algo el sistema lo cambiara por el texto SERVICIOS EN GENERAL)\n*Ingresamos la Cantidad en el campo correspondiente\n*En el campo UM no hace falta ingresar nada (Podemos ingresar UN o el sistema lo hara solo)\n*En "Fecha de entrega" ingresamos la fecha tentativa de entrega o como es un servicio en este caso le ponemos la fecha del mes en curso\n*En el campo "Centro" ingresamos la sucursal a la que corresponde el servicio\n*En el campo "Almacen" seleccionamos el correspondiente (normalmente General)\n*En el campo "GCp" ingresamos el Grupo de compras a la que corresponde imputar el gasto, para este ejemplo es RH (Recursos Humanos)\n*Por último en el campo "N°nec" ingresamos el número de Proyecto relacionado al gasto en cuestión, si el mismo no esta relacionado a ningún proyecto introducimos el número cero "0" (En la practica es lo que hacemos la mayoria de las veces)\n\nLuego de completar los campos mencionados presionaremos &#10094;ENTER&#10095;'},
        { id: 7, imagen:imagen7, explicacion: 'Ahora procedemos a modificar el "Texto breve" con un texto que resuma el item que estamos registrando\n\nLuego buscamos en la sección siguiente, la pestaña "Imputación", e intoducimos la cuenta mayor en el campo "Cta.mayor"\nSi no conocemos ese número lo podemos buscar haciendo click en el icono que se muestra en la imagen' },
        { id: 8, imagen:imagen8, explicacion: 'El sistema nos mostrará esta ventana, nos posicionamos en la pestaña "Denominación de las cuentas de mayor en la sociedad", y en el campo "Texto explicativo" ingresamos el texto que queremos buscar entre asteriscos\nPara este ejemplo sobre medicina ingresaremos *medic* y presionamos &#10094;ENTER&#10095;' },
        { id: 8, imagen:imagen9, explicacion: 'Por último' },
        { id: 8, imagen:imagen10, explicacion: 'Por último' },
        { id: 8, imagen:imagen11, explicacion: 'Por último' },
        { id: 8, imagen:imagen12, explicacion: 'Por último' },
        { id: 8, imagen:imagen13, explicacion: 'Por último' },
        { id: 8, imagen:imagen14, explicacion: 'Por último' },
        { id: 8, imagen:imagen15, explicacion: 'Por último' },
        { id: 8, imagen:imagen16, explicacion: 'Por último' },
        { id: 8, imagen:imagen17, explicacion: 'Por último' }
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