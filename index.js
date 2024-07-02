import express from 'express';
import pool from './config/db.js';
import 'dotenv/config';

const app = express();
app.use(express.json());

//CRUM PELICULAS
//Trae todas las pelis
app.get('/peliculas/getall', async (req, res) => {
    const sql = 'select peliculas.titulo, peliculas.fecha_lanzamiento, peliculas.descripcion, generos.nombre AS genero, directores.apellido AS apellido_direc, directores.nombre AS nombre_direct FROM peliculas JOIN generos ON peliculas.genero_id = generos.id JOIN directores ON peliculas.director_id = directores.id ORDER by peliculas.titulo asc';
    try {
        const connection = await pool.getConnection()
        const [listTodasPelis] = await connection.query(sql);
        connection.release();
        res.json(listTodasPelis);

    } catch (error) {
        res.send(500).send('Error al cargar todas las peliculas');
    }
});

//Trae una peli por Id
app.get('/peliculas/get/:id', async (req, res)=>{
    const id= req.params.id;
    const sql= 'select peliculas.titulo, peliculas.fecha_lanzamiento, peliculas.descripcion, generos.nombre AS genero, directores.apellido AS apellido_direc, directores.nombre AS nombre_direct FROM peliculas JOIN generos ON peliculas.genero_id = generos.id JOIN directores ON peliculas.director_id = directores.id WHERE peliculas.id =?';
    try {
        const connection = await pool.getConnection()
        const [PeliPorId] = await connection.query(sql, [id]);
        connection.release();
        res.json(PeliPorId[0]);
    } catch (error) {
        res.send(500).send('Error al buscar la pelicula');
    }
});

//Genera una pelicula nueva
app.post('/peliculas/insert', async (req, res) =>{
    const pelicula = req.body;
    const sql = 'INSERT INTO peliculas SET ?';
    try {
        const connection = await pool.getConnection()
        const [addPeli] = await connection.query(sql, [pelicula]);
        connection.release();
        res.json(addPeli[0]);
    } catch (error) {
        res.send(500).send('Error - No se pudo agregar la pelicula');
    }
});

//Actualizar pelicula
app.put('/peliculas/update/:Id', async (req, res)=>{
    const id = req.params.Id;
    const pelicula = req.body;
    const sql = 'UPDATE peliculas SET ? WHERE peliculas.id = ?';
    try {
        const connection = await pool.getConnection()
        const [actualizarPeli] = await connection.query(sql, [pelicula, id]);
        connection.release();
        res.json(actualizarPeli[0]);
    } catch (error) {
        res.send(500).send('Error - No se pudo actualizar la pelicula');
    }
});

//Borrar pelicula
app.delete('/peliculas/delete/:Id', async (req, res)=>{
    const id = req.params.Id;
    const sql = 'DELETE FROM peliculas WHERE peliculas.id = ?';
    try {
        const connection = await pool.getConnection()
        const [deletPorId] = await connection.query(sql, [id]);
        connection.release();
        res.json(deletPorId[0]);
    } catch (error) {
        res.send(500).send('Error al eliminar la pelicula');
    }
});

//CRUM DIRECTORES
//Trae todos los directores
app.get('/directores/getall', async (req, res) => {
    const sql = 'SELECT * FROM directores ORDER BY directores.id asc';
    try {
        const connection = await pool.getConnection()
        const [listTodosDirectores] = await connection.query(sql);
        connection.release();
        res.json(listTodosDirectores);

    } catch (error) {
        res.send(500).send('Error al cargar todos los directores');
    }
});

//Trae un director por Id
app.get('/directores/get/:id', async (req, res)=>{
    const id= req.params.id;
    const sql= 'SELECT * FROM directores ORDER BY directores.id asc';
    try {
        const connection = await pool.getConnection()
        const [diectoresPorId] = await connection.query(sql, [id]);
        connection.release();
        res.json(diectoresPorId[0]);
    } catch (error) {
        res.send(500).send('Error al buscar el director');
    }
});

//Genera un director nuevo
app.post('/directores/insert', async (req, res) =>{
    const director = req.body;
    const sql = 'INSERT INTO directores SET ?';
    try {
        const connection = await pool.getConnection()
        const [addDirec] = await connection.query(sql, [director]);
        connection.release();
        res.json(addDirec[0]);
    } catch (error) {
        res.send(500).send('Error - No se pudo agregar al Director');
    }
});

//Actualizar director
app.put('/directores/update/:Id', async (req, res)=>{
    const id = req.params.Id;
    const director = req.body;
    const sql = 'UPDATE directores SET ? WHERE directores.id = ?';
    try {
        const connection = await pool.getConnection()
        const [actualizarDirector] = await connection.query(sql, [director, id]);
        connection.release();
        res.json(actualizarDirector[0]);
    } catch (error) {
        res.send(500).send('Error - No se pudo actualizar al director');
    }
});

//Borrar director
app.delete('/directores/delete/:Id', async (req, res)=>{
    const id = req.params.Id;
    const sql = 'DELETE FROM directores WHERE directores.id = ?';
    try {
        const connection = await pool.getConnection()
        const [deletPorId] = await connection.query(sql, [id]);
        connection.release();
        res.json(deletPorId[0]);
    } catch (error) {
        res.send(500).send('Error al eliminar al director');
    }
});

//CRUM USUARIOS
//Traer todos los usuarios
app.get('/usuarios/getall', async (req, res) => {
    const sql = 'select * FROM usuarios ORDER BY usuarios.id asc';
    try {
        const connection = await pool.getConnection()
        const [listTodosUsuarios] = await connection.query(sql);
        connection.release();
        res.json(listTodosUsuarios);

    } catch (error) {
        res.send(500).send('Error al querer ver todos los Usuarios');
    }
});

//Trae una usuario por Id
app.get('/usuarios/get/:id', async (req, res)=>{
    const id= req.params.id;
    const sql= 'select * FROM usuarios WHERE usuarios.id =?';
    try {
        const connection = await pool.getConnection()
        const [UsuarioPorId] = await connection.query(sql, [id]);
        connection.release();
        res.json(UsuarioPorId[0]);
    } catch (error) {
        res.send(500).send('Error al querer buscar el usuario');
    }
});

//Genera un usuario nuevo
app.post('/usuarios/insert', async (req, res) =>{
    const usuario = req.body;
    const sql = 'INSERT INTO usuario SET ?';
    try {
        const connection = await pool.getConnection()
        const [addUser] = await connection.query(sql, [usuario]);
        connection.release();
        res.json(addUser[0]);
    } catch (error) {
        res.send(500).send('Error - No se pudo agregar el usuario');
    }
});

//Actualizar usuario
app.put('/usuarios/update/:Id', async (req, res)=>{
    const id = req.params.Id;
    const usuario = req.body;
    const sql = 'UPDATE usuarios SET ? WHERE usuarios.id = ?';
    try {
        const connection = await pool.getConnection()
        const [actualizarUser] = await connection.query(sql, [usuario, id]);
        connection.release();
        res.json(actualizarUser[0]);
    } catch (error) {
        res.send(500).send('Error - No se pudo actualizar el usuario');
    }
});

//Borrar usuario
app.delete('/usuarios/delete/:Id', async (req, res)=>{
    const id = req.params.Id;
    const sql = 'DELETE FROM usuarios WHERE usuarios.id = ?';
    try {
        const connection = await pool.getConnection()
        const [deletPorId] = await connection.query(sql, [id]);
        connection.release();
        res.json(deletPorId[0]);
    } catch (error) {
        res.send(500).send('Error al eliminar el usuario');
    }
});

app.listen(3000, () => {
    console.log('Server iniciando en Port 3000');
});