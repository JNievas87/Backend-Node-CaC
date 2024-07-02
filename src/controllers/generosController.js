import pool from '../../config/db.js';

//CRUM GENEROS
//Trae todos los generos
export const getAllGeneros = async (req, res) => {
    const sql = 'SELECT * FROM generos ORDER BY generos.id asc';
    try {
        const connection = await pool.getConnection()
        const [listTodosGeneros] = await connection.query(sql);
        connection.release();
        res.json(listTodosGeneros);

    } catch (error) {
        res.send(500).send('Error al cargar todos los generos');
    }
};

//Trae un genero por Id
export const getGeneroById = async (req, res)=>{
    const id= req.params.id;
    const sql= 'SELECT * FROM generos ORDER BY generos.id asc';
    try {
        const connection = await pool.getConnection()
        const [generosPorId] = await connection.query(sql, [id]);
        connection.release();
        res.json(generosPorId[0]);
    } catch (error) {
        res.send(500).send('Error al buscar el genero');
    }
};

//Genera un genero nuevo
export const insertGenero = async (req, res) =>{
    const genero = req.body;
    const sql = 'INSERT INTO generos SET ?';
    try {
        const connection = await pool.getConnection()
        const [addGenero] = await connection.query(sql, [genero]);
        connection.release();
        res.send('Genero creado con id: ${rows.insertId}');
    } catch (error) {
        res.send(500).send('Error - No se pudo agregar al genero');
    }
};

//Actualizar genero
export const updateGenero = async (req, res)=>{
    const id = req.params.Id;
    const genero = req.body;
    const sql = 'UPDATE generos SET ? WHERE generos.id = ?';
    try {
        const connection = await pool.getConnection()
        const [actualizarGenero] = await connection.query(sql, [genero, id]);
        connection.release();
        res.json(actualizarGenero[0]);
    } catch (error) {
        res.send(500).send('Error - No se pudo actualizar al genero');
    }
};

//Borrar genero
export const deleteGenero = async (req, res)=>{
    const id = req.params.Id;
    const sql = 'DELETE FROM generos WHERE generos.id = ?';
    try {
        const connection = await pool.getConnection()
        const [deletPorId] = await connection.query(sql, [id]);
        connection.release();
        res.json(deletPorId[0]);
    } catch (error) {
        res.send(500).send('Error al eliminar el genero');
    }
};