import { createPool} from 'mysql2/promise';
import 'dotenv/config';

const pool = createPool({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database,
    connectionLimit: 5
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