// Define una interfaz para los objetos de Transactions
interface Transaction {
    id: string;
    nombre: string;
    uso: string;
    explicacion: string;       
}

const Dbtransaction =([
  {        
  id: '1',
  nombre: 'lt12',
  uso: 'Confirmacion de OT',
  explicacion: 'Transacción utilizada para la confirmación de las Ordenes de Trabajo (OT)'}
,{        
  id: '2',
  nombre: 'yupdcontimas',
  uso: 'Modificación de datos web a nivel contingentación',
  explicacion: 'Transacción utilizada para modificar los totales que se encuentran registrados en la tabla de contingentacion, y son visualizados por via web asociados por programas'}
,{        
  id: '3',
  nombre: 'me51n',
  uso: 'Generación de solped',
  explicacion: 'Transacción utilizada en el proceso de generación de solicitudes para ordenes de compra, debe tener en cuenta que tiene que tener autorizado el GCp correspondiente (Grupo de compra)'}
,{        
  id: '4',
  nombre: 'migo',
  uso: 'Contabilizar documentos MIGO',
  explicacion: 'Transacción utilizada para confirmar el arribo de un producto solicitado en una orden de compra, o para confirmar la realización de un servicio o trabajo solicitado en una orden de compra'}
,{        
  id: '5',
  nombre: 'va01',
  uso: 'Generar salida de materiales',
  explicacion: 'Transacción estandar utilizada para generar manualmente una salida de materiales, descontando del stock los insumos involucrados.'}
,{        
  id: '6',
  nombre: 'me21n',
  uso: 'Generar pedidos de traslado de materiales sap',
  explicacion: 'Transacción utiizada para solicitar el traslado interno de insumos, normalmente, desde el warehouse central en Bs. As. Hacia el resto de las sucursales.'}
]);  


export {Dbtransaction}