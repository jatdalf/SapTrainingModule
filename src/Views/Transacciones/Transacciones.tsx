import styles from './Transacciones.module.css'
import { Link } from "react-router-dom";
import Volver from '../../Component/Volver/Volver';
import React, { useEffect, useState } from 'react';
import { Dbtransaction } from '../../Db/Transactions';

const Transacciones = () => {
    // Define una interfaz para los objetos de Transactions
    interface Transaction {
        id: string;
        nombre: string;
        uso: string;
        explicacion: string;       
    }

    const [transaction, setTransaction] = useState<Transaction[]>(Dbtransaction);   

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
    // useEffect para mover el scroll al inicio
    useEffect(() => {
      window.scrollTo(0, 0);  // Mueve el scroll a la posición (0, 0)
    }, []);  // Solo se ejecuta la primera vez que se carga el componente


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