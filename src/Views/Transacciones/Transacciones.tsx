import styles from './Transacciones.module.css'
import { Link } from "react-router-dom";
import Volver from '../../Component/Volver/Volver';
import React, { useState } from 'react';

const Transacciones = () => {
    // Define una interfaz para los objetos de Transactions
    interface Transaction {
        id: string;
        nombre: string;
        uso: string;
        explicacion: string;       
    }

    const [transaction, setTransaction] = useState<Transaction[]>([
        {
            id: '1',
            nombre: 'lt12',
            uso: 'confirmacion de OT',
            explicacion: 'Transaccion utilizada para la confirmacion de las Ordenes de Trabajo (OT)'
        },
        {
          id: '2',
          nombre: 'yupdcontimas',
          uso: 'modificacion de datos web a nivel contingentacion',
          explicacion: 'Transaccion utilizada para modificar los totales que se encuentran registrados en la tabla de contingentacion, y son visualizados por via web asociados por programas'
        },
        {
          id: '3',
          nombre: 'me51n',
          uso: 'generación de solped',
          explicacion: 'Transaccion utilizada en el proceso de generación de solicitudes para ordenes de compra, debe tener en cuenta que tiene que tener autorizado el GCp correspondiente (Grupo de compra)'
        },
        {
          id: '4',
          nombre: 'migo',
          uso: 'Contabilizar documentos MIGO',
          explicacion: 'Transaccion utilizada para confirmar el arribo de un producto solicitado en una orden de compra, o para confirmar la realizacion de un servicio o trabajo solicitado en una orden de compra'
        },
        {
          id: '5',
          nombre: 'va01',
          uso: 'Generar salida de materiales',
          explicacion: 'Transaccion estandar utilizada para generar manualmente una salida de materiales, descontando del stock los insumos involucrados, en esta transaccion se deben ingresar uno por uno cada uno de los datos'
        }
    ]);   

    const [TrxSeleccionada, setTrxSeleccionada] = useState<Transaction | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para el valor del input de búsqueda

    const handleClickTrx = (trx: Transaction) => {
        setTrxSeleccionada(trx);
    };

    // Función para manejar el input de búsqueda y actualizar el estado
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase()); // Convertir el término de búsqueda a minúsculas
    };

    // Filtrar las transacciones según el término de búsqueda
    const filteredTransactions = transaction.filter(t =>
        t.nombre.toLowerCase().includes(searchTerm) // Filtrar las transacciones que coincidan con el término de búsqueda
    );

    return (
        <div>            
          <div className={styles.Fondo}>
            <div className={styles.headercontainer}>
              <div className={styles.Buscador}>
                <span>Buscar Transaccion:</span>
                <input 
                  type="text" 
                  id="buscador" 
                  placeholder="ingrese la transaccion" 
                  maxLength={20}
                  value={searchTerm}
                  onChange={handleSearch} // Manejar el cambio en el input de búsqueda
                />
              </div>
              <div className={styles.TrxVolver}>
                <Volver />
              </div>
            </div>

            <ul className={styles.contenedorTrx}>
              <li className={styles.ladoIzquierdo}>
                <fieldset className={styles.trxFieldset}>
                  <legend>Transacciones SAP</legend>
                  <fieldset className={styles.listadoTrx}>
                    <ol id="listado" className={styles.listado}>
                        {filteredTransactions.map((t) => (
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