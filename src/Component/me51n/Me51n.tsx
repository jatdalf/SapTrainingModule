import styles from './Me51n.module.css';
import ExcelImg from '../../Assets/Excel.png';
import CeCos from '../../Assets/CeCos.xlsx';
import Grabar from '../../Assets/grabar.png';
import React, { useState } from 'react';
import NavigationButtons from '../NavigationButtons/NavigationButtons';

const Me51n = () => {
  interface Transaction {
    id: number;
    imagen: string;
    explicacion: string;
    extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
  }

  const imagen1: string= "https://static.wixstatic.com/media/ef3a14_3ccc4e2a8e274b26a6a7a9f262a8dad3~mv2.png"
  const imagen2: string= "https://static.wixstatic.com/media/ef3a14_aac04767be524ca9bed5a99f4e1ea3a1~mv2.png"
  const imagen3: string= "https://static.wixstatic.com/media/ef3a14_1c5772bae7284ed9b4221f64f55f3d90~mv2.png"
  const imagen4: string= "https://static.wixstatic.com/media/ef3a14_d75dc065cccb4c2db1228e6ee3258809~mv2.png"
  const imagen5: string= "https://static.wixstatic.com/media/ef3a14_87d1c643318743c4833aff7428ecad0a~mv2.png"
  const imagen6: string= "https://static.wixstatic.com/media/ef3a14_4e3eb216c71e4ad4a66c0bad464655db~mv2.png"
  const imagen7: string= "https://static.wixstatic.com/media/ef3a14_4b6fbe0668f24665822636933afbc4b5~mv2.png"
  const imagen8: string= "https://static.wixstatic.com/media/ef3a14_404395fdf3af4145af74881e4b1c4ed6~mv2.png"
  const imagen9: string= "https://static.wixstatic.com/media/ef3a14_faf20a1e0a3f4f6181808604471b9c9e~mv2.png"
  const imagen10: string= "https://static.wixstatic.com/media/ef3a14_f1c0822dd6f94791879e095d98ba4205~mv2.png"
  const imagen11: string= "https://static.wixstatic.com/media/ef3a14_785ac9c7796840fd9cda856aab273e6c~mv2.png"
  const imagen12: string= "https://static.wixstatic.com/media/ef3a14_4307569e26f94148824fedcd42a8a9e5~mv2.png"
  const imagen13: string= "https://static.wixstatic.com/media/ef3a14_456e3595a2fc479e92df235679f5f461~mv2.png"
  const imagen14: string= "https://static.wixstatic.com/media/ef3a14_54926b9228114954a21a83df01e9d5be~mv2.png"
  const imagen15: string= "https://static.wixstatic.com/media/ef3a14_85c92deaf6db4ca9838974e5015343cb~mv2.png"

  const [transaction] = useState<Transaction[]>([
    { id: 1, imagen:imagen1, explicacion: 'En primer lugar, verificamos que se encuentre seleccionado "Solicitud de Pedido"\n\nLuego desplegamos la cabecera, haciendo click en el icono que se muestra en la imagen' },
    { id: 2, imagen:imagen2, explicacion: 'Visualizaremos un sector donde podremos escribir un texto\n\nAqui se debe detallar resumidamente cual es la necesidad o finalidad de la Solicitud que estamos realizando\n\nUna vez que hayamos terminado volvemos a realizar click sobre el mismo icono para cerrar esa sección y que podamos trabajar cómodamente con la grilla' },
    { id: 3, imagen:imagen3, explicacion: 'Iremos completando el formulario, columna a columna.\n\nEn la primera columna "POS" no introducimos nada\nEn la segunda columna "I" introducimos una "K" para los materiales con centro de Coste o una "A" para los activos fijos' },
    { id: 4, imagen:imagen4, explicacion: 'En la columna "MATERIAL" ingresamos el material que corresponda según la siguiente lista: \nOCASA001: BIENES DE USO\nOCASA002: INFORMÁTICA\nOCASA003: INSTITUCIONAL\n OCASA004: LIBRERIA\n OCASA005: LIMPIEZA\n OCASA006: MATERIAL OPERATIVO \n OCASA007: BEBIDAS & SNACKS\n OCASA008: SERVICIOS EN GENERAL\n OCASA009: PROYECTOS & OBRAS \n OCASA010: SEGURIDAD\n OCASA011: OTROS ARTÍCULOS\n OCASA012: OPERACIONES OS \n OCASA013: LICENCIAS SOFTWARE\n\nO buscamos el material que corresponda a la solicitud que estamos realizando.' },
    { id: 5, imagen:imagen5, explicacion: 'En la columna "Texto breve" luego ingresaremos el texto que identifique lo que estamos solicitando, pero por ahora lo dejamos en blanco\n\nIngresamos la "Cantidad" en la columna correspondiente\n\nA la columna "UM" la dejamos en blanco' },
    { id: 6, imagen:imagen6, explicacion: 'Fecha de entrega: ingresamos la fecha tentativa de recepción del item, o el primer dia del mes en caso de alquileres o servicios mensuales\n\nEn la columna "Centro" el sistema pre-carga el centro del usuario que esta operando, sin embargo, si necesitamos imputar el item a otro centro podemos ingresar o seleccionar este (Ej: A001=BUE / A005=COR / A012=ROS, etc.)' },
    { id: 7, imagen:imagen7, explicacion: 'La columna "Almacén" se pre-carga con los datos de nuestro usuario, aún asi, si estamos solicitando para otro centro, desplegamos y seleccionamos el almacén que corresponda (normalmente 0009 General)' },
    { id: 8, imagen:imagen8, explicacion: 'En la columna "Gcp" ingresamos el Grupo de compras que corresponda, ejemplo:\n\nPara operaciones:\nOP1 AR-Op.Metropolit.\nOP2 AR-Operac.Reg.1SUR\nOP3 AR-Operac.Reg.2NEA\nOP4 AR-Operac.Reg.3NOA\nOP6 AR-Operac.Cuyo\n\nPara Recursons humanos "RH"\n\n Para Salud "OSA"\n\nO el grupo que corresponda.' },
    { id: 9, imagen:imagen9, explicacion: 'La última columna a completar es la "N° nec.", aquí va el número de proyecto; de no haber ningún proyecto involucrado ingresaremos el número "0"\n\nLuego presionamos &#10094;ENTER&#10095;' },
    { id: 10, imagen:imagen10, explicacion: 'Normalmente el sistema nos lleva directamente a la sección "Posición" y a la pestaña "Imputación" solicitando completemos los datos\n\nEl primer dato a completar es "Cta.mayor" aqui ingresamos el número que corresponda si es que lo tenemos (Se puede solicitar por mail si tenemos dudas de cual es la cuenta\nTenemos también la posibilidad de buscar en el menu desplegable, en la solapa "Denominación de las cuentas de mayor en la sociedad", y en el campo "Texto explicativo", introducimos entre asteriscos (*) un texto que necesitemos buscar\nDamos damos &#10094;ENTER&#10095; o click al "&#10004;" (tilde verde)' },
    { id: 11, imagen:imagen11, explicacion: 'Obtendremos una lista acorde al texto que estamos buscando, donde seleccionaremos el item correcto haciendo doble click sobre el renglón' },
    { id: 12, imagen:imagen12, explicacion: 'Luego completamos el "Centro de Coste" que corresponda según el listado de CeCos(*)\n\nY por último ingresamos el código IATA de la sucursal a la cual se va a imputar el gasto\n\n(*)Haciendo click sobre el Icono Excel, puedes obtener el manual de CeCos:', extraImg:ExcelImg },
    { id: 13, imagen:imagen13, explicacion: 'Al presionar &#10094;ENTER&#10095; el sistema nos llevará a la pestaña "Valoración"\n\nIngresaremos el monto en el campo "Precio valor." (monto sin iva)\nEn el campo siguiente introducimos la Moneda que corresponda (normalmente ARS que es peso argentino)\n\nSi operamos con "A"(activo Fijo) en lugar de "K"(Centro de Coste), se habilitará la pestaña de activos fijos donde debemos ingresar el número de AF proporcionado via mail' },
    { id: 14, imagen:imagen14, explicacion: 'Repetimos estos pasos la cantidad necesaria de veces en las lineas siguientes de ser necesario.' },
    { id: 15, imagen:imagen15, explicacion: 'Una vez terminado de ingresar todos los datos, procederemos a guardar la solicitud realizando click sobre el icono del disco, esto nos generará un número de Solicitud de pedido (Solped)' }
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

  return (
    <div>
      <img src={transaction[currentStep - 1].imagen} className={styles.trxImage} alt="imagen de la transacción" />
        <fieldset className={styles.StepContainer}>
            <legend>Paso {currentStep}</legend>
            <p dangerouslySetInnerHTML={{ __html: transaction[currentStep - 1]?.explicacion.replace(/\n/g, '<br />') }} />

            {transaction[currentStep - 1].extraImg && (
          <a href={CeCos} download="CeCos.xlsx">
            <img
              src={transaction[currentStep - 1].extraImg}
              className={styles.inlineImage}
              alt="Descargar archivo Excel"
              title="Descargar archivo Excel" // Texto al pasar el mouse
            />
          </a>
        )}
        </fieldset>

      <NavigationButtons currentStep={currentStep} totalSteps={transaction.length} onPrevious={handlePrevious} onNext={handleNext} />
    
    </div>
  );
};

export default Me51n;