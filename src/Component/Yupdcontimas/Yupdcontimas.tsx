import styles from './Yupdcontimas.module.css'
import Volver from '../Volver/Volver';
import imgVariante from '../../Assets/traerVariante.png'
import ejecutar from '../../Assets/iconoEjecutar.png'
import React, { useState } from 'react';


const Yupdcontimas = ()=>{
    interface Yupdcontimas {
        id: number;
        imagen: string;
        explicacion: string;
        extraImg?: string;  // Imagen adicional que quieras mostrar en el texto
      }

      const imagen1: string= "https://static.wixstatic.com/media/ef3a14_fdcea5c44aa64c5894eace97053510bb~mv2.png/v1/fit/w_1007,h_867,q_90/ef3a14_fdcea5c44aa64c5894eace97053510bb~mv2.webp"
      const imagen2: string= "https://static.wixstatic.com/media/ef3a14_9259587c768d4628a885f7e46a066b2c~mv2.png/v1/fit/w_984,h_909,q_90/ef3a14_9259587c768d4628a885f7e46a066b2c~mv2.webp"
      const imagen3: string= "https://static.wixstatic.com/media/ef3a14_3a4e9c879a344cedb659f36764742416~mv2.png/v1/fit/w_993,h_939,q_90/ef3a14_3a4e9c879a344cedb659f36764742416~mv2.webp"
      const imagen4: string= "https://static.wixstatic.com/media/ef3a14_b0d5efc0ce6f48cfb556d131441f1b0f~mv2.png/v1/fit/w_1026,h_919,q_90/ef3a14_b0d5efc0ce6f48cfb556d131441f1b0f~mv2.webp"
      const imagen5: string= "https://static.wixstatic.com/media/ef3a14_d0b976504f484aac8cce0446df8f2aa3~mv2.png/v1/fit/w_995,h_947,q_90/ef3a14_d0b976504f484aac8cce0446df8f2aa3~mv2.webp"
      const imagen6: string= "https://static.wixstatic.com/media/ef3a14_afb32f2d8ec9435db349bbf67b30d75f~mv2.png/v1/fit/w_1017,h_894,q_90/ef3a14_afb32f2d8ec9435db349bbf67b30d75f~mv2.webp"
      const imagen7: string= "https://static.wixstatic.com/media/ef3a14_199f711d3fcc43e9a8261b437ac19cb8~mv2.png/v1/fit/w_1346,h_953,q_90/ef3a14_199f711d3fcc43e9a8261b437ac19cb8~mv2.webp"
      const imagen8: string= "https://static.wixstatic.com/media/ef3a14_58a15920e1fb43daa6f86c40bda934ff~mv2.png/v1/fit/w_1745,h_794,q_90/ef3a14_58a15920e1fb43daa6f86c40bda934ff~mv2.webp"

      const [trxYupdcontimas] = useState<Yupdcontimas[]>([
        { id: 1, imagen:imagen1, explicacion: 'En la pantalla principal veremos los campos que debemos completar.\n\nSi es la primera vez que ingresamos, debemos ir completando cada campo con el dato que corresponda \nTambien tenemos la opcion de traer una variante guardada\nparaa esto, debemos realizar click sobre el icono a la derecha del reloj ', extraImg: imgVariante },
        { id: 2, imagen:imagen2, explicacion: 'Si presionamos en el Icono de traer variante, obtendremos una lista de las variantes grabadas\nPodemos seleccionar una variante de esa lista y luego realizar click sobre el tilde verde para cargarla' },
        { id: 3, imagen:imagen3, explicacion: 'Tanto si cargamos los datos manualmente, o si seleccionamos una variante del listado, debemos luego ingresar la fecha actual en el campo "Fecha Cantidad Contingente"' },
        { id: 4, imagen:imagen4, explicacion: 'Ahora procederemos a buscar el archivo a cargar\nPara esto realizamos click sobre el icono de la derecha del campo "Ruta de Archivo"\nPara visualizar dicho Icono es necesario que nos posicionemos en ese campo' },
        { id: 5, imagen:imagen5, explicacion: 'Esto nos abrira una ventana donde nos posibilita buscar el archivo Excel que vamos a subir\nUna vez que ubicamos el archivo correcto, lo seleccionamos y damos click sobre el botón "ABRIR"' },
        { id: 6, imagen:imagen6, explicacion: 'Volveremos a la pantalla inicial ya con todos los datos necesarios cargados\nEn esta instancia debemos realizar click sobre el Icono del reloj (ejecutar) o presionar F8 que es lo mismo:', extraImg: ejecutar },
        { id: 7, imagen:imagen7, explicacion: 'El sistema subira el archivo y nos solicitara permiso para ejecutar el archivo\nPara proceder debemos "PERMITIR" el proceso\n\nNota: Es importante que el excel no se encuentre abierto a la hora de permitir el proceso, ya que si el archivo se encuentra en uso el sistema nos devolvera un error debido a que no puede fijar los datos. ' },
        { id: 8, imagen:imagen8, explicacion: 'Por último, si todo esta correcto visualizaremos una pantalla con el detalle de los procesos\nEn dicha pantalla si hubiera algún error, la primera columna en lugar de mostrarnos un circulo verde, se visualizara uno rojo, con la explicación del error' }
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
    
export default Yupdcontimas