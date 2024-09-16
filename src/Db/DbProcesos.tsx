// Define una interfaz para los objetos de Transactions
interface Procesos {
    id: string;
    nombre: string;    
    destino: string;
    explicacion: string;       
}

const DbProcesos =([
  {        
  id: '1',
  nombre: 'Generación de Solped',  
  destino: 'ProcesoMe51n',
  explicacion: 'Ejemplo de un caso de uso en el proceso de generación de solicitudes de pedido (SOLPED), siendo este el punto inicial que debemos realizar para obtener una Orden de Compra.'
  },{        
  id: '2',
  nombre: 'En Desarrollo',  
  destino: 'Desarrollo',
  explicacion: 'Sección en desarrollo'
}
]);  


export { DbProcesos }