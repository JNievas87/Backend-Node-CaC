import pool from '../../config/db.js';

//CRUM DIRECTORES
//Trae todos los directores
export const getAllDirectores = async (req, res) => {
    const sql = 'SELECT * FROM directores ORDER BY directores.id asc';
    try {
        const connection = await pool.getConnection()
        const [listTodosDirectores] = await connection.query(sql);
        connection.release();
        res.json(listTodosDirectores);

    } catch (error) {
        res.send(500).send('Error al cargar todos los directores');
    }
};

//Trae un director por Id
export const getDirectorById = async (req, res)=>{
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
};

//Genera un director nuevo
export const insertDirector = async (req, res) =>{
    const director = req.body;
    const sql = 'INSERT INTO directores SET ?';
    try {
        const connection = await pool.getConnection()
        const [addDirec] = await connection.query(sql, [director]);
        connection.release();
        res.send('Director creado con id: ${rows.insertId}');
    } catch (error) {
        res.send(500).send('Error - No se pudo agregar al Director');
    }
};

//Actualizar director
export const updateDirector = async (req, res)=>{
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
};

//Borrar director
export const deleteDirector = async (req, res)=>{
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
};
