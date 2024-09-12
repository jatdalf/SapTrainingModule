// Define una interfaz para los objetos de Transactions
interface Procesos {
    id: string;
    nombre: string;
    uso: string;
    explicacion: string;       
}

const DbProcesos =([
  {        
  id: '1',
  nombre: 'En desarrollo',
  uso: 'Sección en desarrollo',
  explicacion: 'Sección en desarrollo'}
,{        
  id: '2',
  nombre: 'En desarrollo 2',
  uso: 'Sección 2 en desarrollo',
  explicacion: 'Sección 2 en desarrollo'}
]);  


export { DbProcesos }