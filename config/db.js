import { createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'BD_CaC_Peliculas',
    connectionLimit: 7
});

pool.getConnection()
    .then(connection=>{
        console.log ('Base de Datos Conectada');
        connection.release();
    })
    .catch(error => {
        console.log('Error de conexion con la Base de Datos', error);
    });

export default pool;