import pool from '../../config/db.js';

//TRAE TODAS LAS PELICULAS
export const getAllPeliculas = async (req, res) => {
    const sql = 'select peliculas.titulo, peliculas.fecha_lanzamiento, peliculas.descripcion, generos.nombre AS genero, directores.apellido AS apellido_direc, directores.nombre AS nombre_direct FROM peliculas JOIN generos ON peliculas.genero_id = generos.id JOIN directores ON peliculas.director_id = directores.id ORDER by peliculas.titulo asc';
    try {
        const connection = await pool.getConnection();
        const [listTodasPelis] = await connection.query(sql);
        connection.release();
        res.json(listTodasPelis);
    } catch (error) {
        res.status(500).send('Error al cargar todas las peliculas');
    }
};

//TREA UNA PELICULA POR ID
export const getPeliculaById = async (req, res) => {
    const id = req.params.id;
    const sql = 'select peliculas.titulo, peliculas.fecha_lanzamiento, peliculas.descripcion, generos.nombre AS genero, directores.apellido AS apellido_direc, directores.nombre AS nombre_direct FROM peliculas JOIN generos ON peliculas.genero_id = generos.id JOIN directores ON peliculas.director_id = directores.id WHERE peliculas.id =?';
    try {
        const connection = await pool.getConnection();
        const [PeliPorId] = await connection.query(sql, [id]);
        connection.release();
        res.json(PeliPorId[0]);
    } catch (error) {
        res.status(500).send('Error al buscar la pelicula');
    }
};

//GENERA UNA NUEVA PELICULA
export const insertPelicula = async (req, res) => {
    const pelicula = req.body;
    const sql = `INSERT INTO peliculas SET ?`;
    try {
        const connection = await pool.getConnection();
        const [addPeli] = await connection.query(sql, [pelicula]);
        connection.release();
        res.send(`Pelicula creada con id: ${addPeli.insertId}`);
    } catch (error) {
        res.status(500).send('Error - No se pudo agregar la pelicula');
    }
};

//ACTUALIZA UNA PELICULA
export const updatePelicula = async (req, res) => {
    const id = req.params.Id;
    const pelicula = req.body;
    const sql = 'UPDATE peliculas SET ? WHERE peliculas.id = ?';
    try {
        const connection = await pool.getConnection();
        const [actualizarPeli] = await connection.query(sql, [pelicula, id]);
        connection.release();
        res.json(actualizarPeli[0]);
    } catch (error) {
        res.status(500).send('Error - No se pudo actualizar la pelicula');
    }
};

//BORRA UNA PELICULA
export const deletePelicula = async (req, res) => {
    const id = req.params.Id;
    const sql = 'DELETE FROM peliculas WHERE peliculas.id = ?';
    try {
        const connection = await pool.getConnection();
        const [deletPorId] = await connection.query(sql, [id]);
        connection.release();
        res.json(deletPorId[0]);
    } catch (error) {
        res.status(500).send('Error al eliminar la pelicula');
    }
};
