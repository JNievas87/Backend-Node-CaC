import pool from '../../config/db.js';

//CRUM USUARIOS
//Traer todos los usuarios
export const getAllUsuarios = async (req, res) => {
    const sql = 'select * FROM usuarios ORDER BY usuarios.id asc';
    try {
        const connection = await pool.getConnection()
        const [listTodosUsuarios] = await connection.query(sql);
        connection.release();
        res.json(listTodosUsuarios);

    } catch (error) {
        res.send(500).send('Error al querer ver todos los Usuarios');
    }
};

//Trae una usuario por Id
export const getUsuarioById = async (req, res)=>{
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
};

//Genera un usuario nuevo
export const insertUsuario = async (req, res) =>{
    const usuario = req.body;
    const sql = 'INSERT INTO usuario SET ?';
    try {
        const connection = await pool.getConnection()
        const [addUser] = await connection.query(sql, [usuario]);
        connection.release();
        res.send('Usuario creado con id: ${rows.insertId}');
    } catch (error) {
        res.send(500).send('Error - No se pudo agregar el usuario');
    }
};

//Actualizar usuario
export const updateUsuario = async (req, res)=>{
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
};

//Borrar usuario
export const deleteUsuario = async (req, res)=>{
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
};