import styles from './Va01.module.css'
import Volver from '../Volver/Volver';
import imgVariante from '../../Assets/traerVariante.png'
import ejecutar from '../../Assets/iconoEjecutar.png'
import React, { useState } from 'react';


const Va01 = ()=>{
    interface va01 {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen0: string= "https://static.wixstatic.com/media/ef3a14_a66e1819c71547e7827e526734e31d33~mv2.png/v1/fit/w_934,h_883,q_90/ef3a14_a66e1819c71547e7827e526734e31d33~mv2.webp"
      const imagen1: string= "https://static.wixstatic.com/media/ef3a14_1995b6ec4d1d41afb4ae3adf03b4836c~mv2.png"
      const imagen2: string= "https://static.wixstatic.com/media/ef3a14_3c3e6e77059d487290926f5ad345d007~mv2.png"
      const imagen3: string= "https://static.wixstatic.com/media/ef3a14_2832f2e13356473690d6280cf1209451~mv2.png"
      const imagen4: string= "https://static.wixstatic.com/media/ef3a14_01a5b33574494d0993ca363a4853e973~mv2.png"
      const imagen5: string= "https://static.wixstatic.com/media/ef3a14_fff27582d9cc4fdbb63415d8cee8ce9f~mv2.png"
      const imagen6: string= "https://static.wixstatic.com/media/ef3a14_e800244422ed410fa1ee128d8f9490ad~mv2.png"
      const imagen7: string= "https://static.wixstatic.com/media/ef3a14_e53c3387adf145679398b2bd3da9e655~mv2.png"    
      const imagen8: string= "https://static.wixstatic.com/media/ef3a14_f5fc2d2aedd641478d5c089831a05f7f~mv2.png"  
      const imagen9: string= "https://static.wixstatic.com/media/ef3a14_07c26f25f41c41388dba1c02d17e60ba~mv2.png    "  
      const imagen10: string= "https://static.wixstatic.com/media/ef3a14_2822109c34f94b02b2c7822eafae7431~mv2.png"  
      const imagen11: string= "https://static.wixstatic.com/media/ef3a14_71d1825015d14924bae85e1840654a85~mv2.png"  
      const imagen12: string= "https://static.wixstatic.com/media/ef3a14_2de4b955e26c46f396d0d55b0729ec59~mv2.png"  
      const imagen13: string= "https://static.wixstatic.com/media/ef3a14_939d6412ec1f4995beadb3bf6aae6d0d~mv2.png"  
      const imagen14: string= "https://static.wixstatic.com/media/ef3a14_90697e15ebe542bb8bf349665cdc48b0~mv2.png"  
      const imagen15: string= "https://static.wixstatic.com/media/ef3a14_431eb903c81a4ecf951a4195929eeed4~mv2.png"  
      const imagen16: string= "https://static.wixstatic.com/media/ef3a14_7d9c2122aaba4161912d3822c77c7901~mv2.png/v1/fit/w_1065,h_1004,q_90/ef3a14_7d9c2122aaba4161912d3822c77c7901~mv2.webp"  


      const [trxVa01] = useState<va01[]>([
        { id: 1, imagen:imagen0, explicacion: 'Al inicializar la transaccion visualizaremos esta pantalla\nEl dato que debemos ingresar es la "Clase de Pedido"\nPara las salidas de stock del Warehouse ingresaremos la clase ZS01\n\nLos datos de "Organizacion de ventas" el sistema los trae Pre-cargados, esto corresponde al pais del usuario\nTambién deberiamos visualizar pre-cargada la "Oficina de ventas" que corresponde a la región en la que opera el usuario' },
        { id: 2, imagen:imagen1, explicacion: 'Al presionar &#10094;ENTER&#10095; visualizaremos la siguiente ventana donde debemos ingresar el acuerdo de producto (AP) que corresponda al servicio que estamos por realizar\n\nLuego de ingresar el AP en el campo "Ped.ab." debemos hacer click sobre el botón: "Selección de posición"' },
        { id: 3, imagen:imagen2, explicacion: 'Esto nos llevara a esta nueva pantalla donde visualizaremos todas las posiciones del AP (Acuardo de producto) ingresado\n\nSi el AP tiene mas de una posicion habilitada, como en este ejemplo veremos todas las posiciones disponibles tildadas\n' },
        { id: 4, imagen:imagen3, explicacion: 'En estos casos procederemos a destildar las posiciones que no correspondan dejando solamente una única posición tildada\n\nLuego realzamos click sobre el botón "&#10004; Tomar"' },
        { id: 5, imagen:imagen4, explicacion: 'El sistema grabara los datos y generara la solicitud\n\nSi observamos la siguiente notificacion debemos presionar el &#10004; Tilde verde' },
        { id: 6, imagen:imagen5, explicacion: 'En la nueva pantalla que visualizaremos, buscaremos la pestaña "Resumen de posiciones" y realizamos click sobre ella\n\nEsto nos posibilita tener una mejor vista para seguir trabajando sobre la transacción' },
        { id: 7, imagen:imagen6, explicacion: 'Antes que nada, lo primero a verificar es que el centro donde el sistema va a operar, coincida con el centro en el que deseamos realizar la salida de materiales\n\nAqui en el ejemplo visualizaremos pre-cargado el centro del usuario (A047) y necesitamos modificarlo para operar en A005\nLuego de aplicar la corrección/modificación procedemos a presionar &#10094;ENTER&#10095;\n\nEn el caso en que no haya que realizar ninguna modificación en el centro podemos saltar este paso.'},
        { id: 8, imagen:imagen7, explicacion: 'Si procedimos a modificar el centro, es normal que el sistema nos muestre esta pantalla\n\nAquí lo único que debemos hacer es un click en el primer Icono, el de la hoja blanca con la flecha amarilla que apunta hacia la derecha' },
        { id: 9, imagen:imagen8, explicacion: 'Una vez corroborado que los datos del centro en el que estamos operando esten OK, procedemos en primer lugar a ingresar un número o código de seguimiento\nPara esto utilizamos el campo "N°Ped.Cliente" y le asignamos un id con el cual se pueda realizar un seguimiento posterior\n\nLuego comenzamos con la carga de datos:\n*La columna "Pos." dejamos en blanco\n*Ingresamos el número de material sap\n*Ingresamos la cantidad\n*Unidad dejamos en blanco\n*Denominación dejaremos en blanco (se va a cargar automáticamente)\n*En la columna "Número de material del cliente", ingresaremos el PROGRAMA al cual se le descontara el stock (Si no trabajamos con programas este campo debe quedar en blanco)\n*En "TPos" ingresamos ZWHE\n*En PosSup ingresamos 20 (siempre 20 en todas las filas que carguemos)\nCentro se va a cargar automáticamente\n*Lote: en caso de que necesitemos sacar un lote específico, ingresaremos el lote sap en este campo, caso contrario dejamos que el sistema determine el lote automáticamente\n\nLuego de completar los campos indicados presionamos &#10094;ENTER&#10095;' },
        { id: 10, imagen:imagen9, explicacion: 'El sistema completará el resto de los datos automáticamente\nSi esta todo correcto quedará listo para seguir añadiendo lineas\n\nSi algo estuviera mal ingresado el sistema nos indicará con un mensaje cual es el campo que tiene un dato inconsistente para que podamos corregirlo' }, 
        { id: 11, imagen:imagen10,explicacion: 'En el caso en que necesitemos cargar mas insumos, repetiremos el mismo procedimiento linea por linea\n\nUna vez completadas todas las lineas volvemos a presionar &#10094;ENTER&#10095;' }, 
        { id: 12, imagen:imagen11,explicacion: 'Si aún necesitamos seguir agregando Items, despazaremos la barra lateral haciendo click sobre el sector indicado en la imagen\n\nOtra opcion es presionar la tecla "Av,Pág" (Page Down) del teclado' },
        { id: 13, imagen:imagen12, explicacion: 'Una vez que hayamos cargado todos los materiales necesarios, y luego de presionar &#10094;ENTER&#10095; para que el sistema confirme que los datos no tienen inconsistencias:\n\nProcederemos a realizar click en "Doc.venta", y en el menú que se despliega, clickeamos en "Suministrar"' },
        { id: 14, imagen:imagen13, explicacion: 'Esta acción graba la Solicitud de envío de WH, y nos lleva a la pantalla de la "ORDEN DE ENVIO WH"\n\nAquí realizaremos click sobre el icono del papel que se miestra en la imagen, y procederemos a cargar los datos del destino' },
        { id: 15, imagen:imagen14, explicacion: 'Luego de que hayan quedado ingresados los datos correctos del destinatario y destino del envío\n\nRealizamos click sobre el "&#10004;" (tilde verde)' },
        { id: 16, imagen:imagen15, explicacion: 'Volveremos a visualizar la pantalla anterior\n\nAhora debemos guardar la orden de engtrega realizando click sobre el Icono del disco que se muestra en la imagen' },
        { id: 17, imagen:imagen16, explicacion: 'Por último, el sistema grabara todos los datos y nos arrojara un "numero de entrega" único, bajo el mensaje:\n"ORD. ENVIO WH xxxxxx GRABADO"\n\nBajo ese numero, podremos continuar con el proceso de pickeo.' },
      ]);
    
      const [currentStep, setCurrentStep] = useState<number>(1);
    
      const handleNext = () => {
        if (currentStep < trxVa01.length) {
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
        <img src={trxVa01[currentStep - 1].imagen} className={styles.trxImage} alt="imagen de la transacción" />
        <fieldset className={styles.StepContainer}>
            <legend>Paso {currentStep}</legend>
            <p dangerouslySetInnerHTML={{ __html: trxVa01[currentStep - 1]?.explicacion.replace(/\n/g, '<br />') }} />

            {trxVa01[currentStep - 1].extraImg && (
            <img src={trxVa01[currentStep - 1].extraImg} className={styles.inlineImage} alt="Imagen adicional" />
            )}
        </fieldset>
        <div className={styles.buttonsContainer}>
          <button className={styles.leftArrow} onClick={handlePrevious}>&#10148;</button>
          <span className={styles.stepNumber}>PASO {currentStep}</span>
          <button className={styles.rightArrow} onClick={handleNext}>&#10148;</button>
          <div className={styles.volverContainer}>
            <Volver />
          </div>
        </div>
      </div>
    )
}
    
export default Va01