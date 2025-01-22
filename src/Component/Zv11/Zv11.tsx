import styles from './Zv11.module.css'
import imgGrabar from '../../Assets/grabar.png'
import ejecutar from '../../Assets/iconoEjecutar.png'
import React, { useState } from 'react';
import NavigationButtons from '../NavigationButtons/NavigationButtons';


const Zv11 = ()=>{
    interface Transaction {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen1: string= "https://static.wixstatic.com/media/ef3a14_8d0be1ed57734aff8e6c39a151dae9a3~mv2.png"
      const imagen2: string= "https://static.wixstatic.com/media/ef3a14_2fac8611d3c343bdbcdd93d8ffb94718~mv2.png"
      const imagen3: string= "https://static.wixstatic.com/media/ef3a14_b5e60f618b334258914479a6ac32fb73~mv2.png"
      const imagen4: string= "https://static.wixstatic.com/media/ef3a14_1c774a16c0c7438f9f3f2dc1995b239e~mv2.png"
      const imagen5: string= "https://static.wixstatic.com/media/ef3a14_be824d193fe24ceea7ea67e0dd436735~mv2.png"
      const imagen6: string= "https://static.wixstatic.com/media/ef3a14_cffc1ebf8a894ebf92de2490fc442103~mv2.png"
      const imagen7: string= "https://static.wixstatic.com/media/ef3a14_2899424bc6384122b1c071f68551a7d1~mv2.png"
      const imagen8: string= "https://static.wixstatic.com/media/ef3a14_4d34f16f29a643e3b3d869d612b702ba~mv2.png"    
      const imagen9: string= "https://static.wixstatic.com/media/ef3a14_7f87ec3c048548e99b35071d8eac0e09~mv2.png"  
      const imagen10: string= "https://static.wixstatic.com/media/ef3a14_6cfc7a5d3d8b4255a24ff76bd796e56b~mv2.png"  
      const imagen11: string= "https://static.wixstatic.com/media/ef3a14_ce3b175165ec43ada3d26e63d91f10d0~mv2.png"  
      const imagen12: string= "https://static.wixstatic.com/media/ef3a14_a9664b99e44f4830b505421d9ed5b082~mv2.png"  
      const imagen13: string= "https://static.wixstatic.com/media/ef3a14_e14f090275814251b01e72892fbe0a72~mv2.png"  
      const imagen14: string= "https://static.wixstatic.com/media/ef3a14_e4844bb3ce9745c09d7e5e73c84630f0~mv2.png"  
      const imagen15: string= "https://static.wixstatic.com/media/ef3a14_3fb0c542664c4dc6a16aee552b534ff8~mv2.png"  
      const imagen16: string= "https://static.wixstatic.com/media/ef3a14_25805acd5c574f71ac50bb2af2b3caa8~mv2.png"  
      const imagen17: string= "https://static.wixstatic.com/media/ef3a14_6dbc15e9d33f488ea15fbcfe4fdd76c1~mv2.png"  
      const imagen18: string= "https://static.wixstatic.com/media/ef3a14_b464e561916c4129a9c65e6f965e2148~mv2.png"  
       

      const [transaction] = useState<Transaction[]>([
        { id: 1, imagen:imagen1, explicacion: 'En la primer pantalla nos exige ingresar la sucursal como campo obligatorio\nLuego hacemos click en "Crear nueva HU"\n\n(En el caso de que ya hayamos creado una HU o algun compañero haya creado una Hu, podemos ingresar ese numero en el sector "Un.manipulación" y presionar &#10094;ENTER&#10095;) ' },
        { id: 2, imagen:imagen2, explicacion: 'Al presionar sobre Crear HU veremos esta pantalla\n\nCompletamos:\n"Nro. de Material de Embalaje" si lo conocemos lo ingresamos, sino, lo buscamos en la lista haciendo click a la derecha del campo para obtener los posibles resultados' },
        { id: 3, imagen:imagen3, explicacion: 'Una vez ingresado el material de embalaje continuamos completando el resto de los datos:\n"Centro": aqui ingresamos el centro de origen de la HU\n"Nro. de Precinto": aqui ingresamos el numero de precinto o identificador de cierre (solo si corresponde, no es obligatorio)\n"Descripción del Contenido": una pequeña descripcion del contenido (no es obligatorio pero es una buena práctica)\n"Origen": Aqui ingresamos las dos primeras letras del pais y las tres de la sucursal ej: AR= Argentina BUE= Buenos Aires -> ARBUE\n"Destino": igual que en el campo anterior ingresamos las dos letras del pais seguidos por las tres letras de la sucursal de DESTINO\n"Sector": ingresamos o seleccionamos el sector que recibira la HU (Campo no obligatorio)\n"Nro. de Guía Aérea": El número de la guia que nos entrega el operador del aeropuerto en caso de despacho aereo (Campo no obligatorio)\n\nUna vez completados los campos presionamos sobre el disco "Grabar"', extraImg: imgGrabar },
        { id: 4, imagen:imagen4, explicacion: 'Luego de unos instantes el sistema nos informará el número de HU generado\nPresionamos sobre el botón "Continuar"' },
        { id: 5, imagen:imagen5, explicacion: 'En caso que necesitemos generar mas HU volvemos a repetir el proceso\nSe debe generar una HU por cada destino, o incluso mismo destino pero diferente sector o modalidad de tramitación o por cualquier otra razon operativa que lo justifique' },
        { id: 6, imagen:imagen6, explicacion: 'Completamos todos los campos, grabamos, y continuamos\nRepetimos estos pasos tantas veces como HU necesitemos generar' },
        { id: 7, imagen:imagen7, explicacion: 'Para agregar piezas a las HU tocamos el boton de la derecha de la HU correspondiente\nLuego realizamos click sobre el botón "Asignación Fija"' },
        { id: 8, imagen:imagen8, explicacion: 'Ingresaremos a esta pantalla donde debemos seleccionar primeramente en el campo "Objeto" que numero de seguimiento Utilizaremos:\nU.Manipulación: Para ingresar una o mas HUs dentro de esta HU\nPieza c/seg (Ocasa): para ingresar piezas por el número de equipo SAP\nPieza c/seg (Cliente): para ingresar piezas por el número Alternativo\nPieza según Nro documento: para ingresar piezas por el número de documento de retiro ' },
        { id: 9, imagen:imagen9, explicacion: 'Una vez seleccionado el dato que vamos a ingresar, procedemos a tipear o leer con lector óptico en el campo "Número" el codigo correspondiente\nSi ingresamos a mano al final presionamos &#10094;ENTER&#10095;\nSi usamos lector lo hace automaticamente\n\nRepetimos este paso por cada pieza correspondiente al destino de la HU seleccionada' },
        { id: 10, imagen:imagen10, explicacion: 'Dependiendo del AP de los equipos ingresados, si hay diferencia entre piezas con tramitacion Estandar, Prioritaria, Urgente\nel sistema nos mostrara el siguiente mensaje\nSi trabajamos con una única HU por destino, presionamos el tilde verde\nCaso contrario presionamos el tilde rojo y seleccionamos la otra HU que hayamos armado para las piezas con distinto tipo de tratamiento\n\n(Esto es por ejemplo cuando se envian por separado las piezas URGENTES, de las Estandar)' },
        { id: 11, imagen:imagen11, explicacion: 'Una vez que terminamos de leer todas las piezas presionamos sobre el botón "Confirmar"' },
        { id: 12, imagen:imagen12, explicacion: 'Repetimos estos pasos para las siguientes HU\n\n(Tambien podemos seleccionar la misma HU y seguirle agregando piezas)' },
        { id: 13, imagen:imagen13, explicacion: 'Se debe tener en cuenta que solo podrán agregarse piezas que coincidan con el destino seleccionado\ncaso contrario visualizaremos el siguiente mensaje\nAnte esto debemos leer la pieza en la HU correspondiente, o modificar los datos para que coincidan con el destino de la HU si esto corresponde' },
        { id: 14, imagen:imagen14, explicacion: 'Otra opción para ingresar piezas cuando la cantidad es grande y ya las tenemos leidas o extraidas en algun reporte o Excel, es utilizar el botón de "Buffer"\nPara ello lo presionamos, veremos una pantalla' },
        { id: 15, imagen:imagen15, explicacion: 'Vamos a donde tenemos los datos de los equipos a ingresar\nPintamos y copiamos (o presionamos Control+c)' },
        { id: 16, imagen:imagen16, explicacion: 'Regresamos a la pantalla del buffer y presionamos sobre el icono de la carterita azul\ny por último presionamos sobre el botón "Procesar"\n\nEs importante que usemos ese icono para pegar, no pegar usando Control+v porque esto solo pegara los datos visibles y cuando son mas datos de los que entran en la pantalla no agregará todos los datos' },
        { id: 17, imagen:imagen17, explicacion: 'Una vez que terminamos de agregar todas las piezas procedemos a cerrar las HU\n\nPara esto presionamos sobre el botón "Confirmar Envío"\n\nVisualizaremos un mensaje de confirmación, presionamos SI' },
        { id: 18, imagen:imagen18, explicacion: 'Después de unos instantes el sistema nos informará que los equipos han sido asignados\n\nEn este paso ya estamos en condiciones de imprimir las HU para lo cual utilizaremos la transacción VL74' }
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
    
export default Zv11