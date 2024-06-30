import express from 'express';

const app = express();

app.use(express.json());

//Trae todas las pelis
app.get('/pelicula', (req, res)=>{
    
});

//Trae una peli por Id
app.get('/pelicula/:id', (req, res)=>{
    
});

//Genera una pelicula nueva
app.post('/pelicula', (req, res) =>{

});

//Actualizar pelicula
app.put('/pelicula/:Id', (req, res)=>{

});

//Borrar pelicula
app.delete('/pelicula/:Id', (req, res)=>{
    
});

app.listen(3000, () => {
    console.log('Server iniciando en Port 3000');
});