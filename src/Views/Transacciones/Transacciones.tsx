import styles from './Transacciones.module.css'
import { Link } from "react-router-dom";
import Volver from '../../Component/Volver/Volver';
import React, { useState } from 'react';

const Transacciones =()=>{
    // Define una interfaz para los objetos de Transactions
    interface Transaction {
        id: string;
        nombre: string;
        uso: string;
        explicacion: string;       
    }
    const [transaction, settransaction] = useState<Transaction[]>([
        {
            id: '1',
            nombre: 'lt12',
            uso: 'confirmacion de OT',
            explicacion: 'Transaccion utilizada para la confirmacion de las Ordenes de Trabajo (OT)'
        },{
          id: '2',
          nombre: 'me51n',
          uso: 'generación de solped',
          explicacion: 'Transaccion utilizada en el proceso de generación de solicitudes para ordenes de compra, debe tener en cuenta que tiene que tener autorizado el GCp correspondiente (Grupo de compra)'
        },{
          id: '3',
          nombre: 'migo',
          uso: 'Contabilizar documentos MIGO',
          explicacion: 'Transaccion utilizada para confirmar el arribo de un producto solicitado en una orden de compra, o para confirmar la realizacion de un servicio o trabajo solicitado en una orden de compra'
        }
    ]);   

    const [TrxSeleccionada, setTrxSeleccionada] = useState<Transaction | null>(null);

    const handleClickTrx = (trx: Transaction) => {
        setTrxSeleccionada(trx);
      };

    return(
        <div>            
          <div className={styles.Fondo}>
            <div className={styles.TrxVolver}>
              <Volver />
            </div>
            <ul className={styles.contenedorTrx}>
              <li className={styles.ladoIzquierdo}>
                <fieldset className={styles.trxFieldset}>
                  <legend>Transacciones SAP</legend>
                  <fieldset className={styles.listadoTrx}>
                    <ol id="listado" className={styles.listado}>
                        {transaction.map((t)=>(
                                    <li key={t.id} onClick={() => handleClickTrx(t)}>
                                        {t.nombre}
                                    </li>                            
                                ))}
                    </ol>
                  </fieldset>
                </fieldset>
              </li>
              
              <li className={styles.ladoDerecho}>
                <fieldset className={styles.trxFieldset}>
                  <legend>Detalle</legend>
                    <fieldset className={styles.detalleTrx}>
                      <legend className={styles.trxTitle}>{TrxSeleccionada?.nombre || ''}</legend>
                      <span className={styles.trxExplanation}>
                        {TrxSeleccionada?.explicacion || ''}
                      </span>
                    </fieldset>                    
                    <Link to={TrxSeleccionada?.nombre || ''}>
                      <button className={styles.botonPaso}>Ejemplo de uso</button>
                    </Link>
                </fieldset>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Transacciones;