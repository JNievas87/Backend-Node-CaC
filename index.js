import express from 'express';
import pool from './config/db.js';
const app = express();

app.use(express.json());

//Trae todas las pelis
app.get('/peliculas', async (req, res) => {
    const sql = 'select peliculas.titulo, peliculas.fecha_lanzamiento, peliculas.descripcion, generos.nombre AS genero, directores.apellido AS apellido_direc, directores.nombre AS nombre_direct FROM peliculas JOIN generos ON peliculas.genero_id = generos.id JOIN directores ON peliculas.director_id = directores.id ORDER by peliculas.titulo asc';
    try {
        const connection = await pool.getConnection()
        const [rows] = await connection.query(sql);
        connection.release();
        res.json(rows);

    } catch (error) {
        res.send(500).send('Internal server error');
    }
});

//Trae una peli por Id
app.get('/peliculas/:id', async (req, res)=>{
    const id= req.params.id;
    const sql= 'select peliculas.titulo, peliculas.fecha_lanzamiento, peliculas.descripcion, generos.nombre AS genero, directores.apellido AS apellido_direc, directores.nombre AS nombre_direct FROM peliculas JOIN generos ON peliculas.genero_id = generos.id JOIN directores ON peliculas.director_id = directores.id ORDER by peliculas.titulo WHERE peliculas.id = ?'
    try {
        const connection = await pool.getConnection()
        const [rows] = await connection.query(sql, [id]);
        connection.release();
        res.json(rows[0]);    
    } catch (error) {
        res.send(500).send('Internal server error');
    }
});

//Genera una pelicula nueva
app.post('/peliculas', (req, res) =>{

});

//Actualizar pelicula
app.put('/peliculas/:Id', (req, res)=>{

});

//Borrar pelicula
app.delete('/peliculas/:Id', (req, res)=>{
    
});

app.listen(3000, () => {
    console.log('Server iniciando en Port 3000');
});