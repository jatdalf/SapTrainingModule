import styles from './Procesos.module.css'
import { Link } from "react-router-dom";
import Volver from '../../Component/Volver/Volver';
import React, { useEffect, useState } from 'react';
import { DbProcesos } from '../../Db/DbProcesos';

const Procesos = () => {
    // Define una interfaz para los objetos de Procesos
    interface Procesos {
        id: string;
        nombre: string;   
        destino: string;    
        explicacion: string;       
    }

    const [procesos, setProcesos] = useState<Procesos[]>(DbProcesos);   

    const [ProcesoSelected, setProcesoSelected] = useState<Procesos | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para el valor del input de búsqueda

    const handleClickTrx = (trx: Procesos) => {
        setProcesoSelected(trx);
    };

    // Función para manejar el input de búsqueda y actualizar el estado
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase()); // Convertir el término de búsqueda a minúsculas
    };

    // Filtrar las transacciones según el término de búsqueda
    const filteredTransactions = procesos.filter(t =>
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
                <span>Buscar :</span>
                <input 
                  type="text" 
                  id="buscador" 
                  placeholder="Proceso a buscar" 
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
                  <legend>Procesos</legend>
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
                  <legend>Resúmen</legend>
                  <fieldset className={styles.detalleTrx}>
                    <legend className={styles.trxTitle}>{ProcesoSelected?.nombre || ''}</legend>
                    <span className={styles.trxExplanation}>
                      {ProcesoSelected?.explicacion || ''}
                    </span>
                  </fieldset>                    
                  <Link to={ProcesoSelected?.destino || ''}>
                    <button className={styles.botonPaso}>Caso de ejemplo</button>
                  </Link>
                </fieldset>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Procesos;