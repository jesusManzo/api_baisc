
const express = require('express')


const app = express();

app.use(express.json())

const host = '127.0.0.1';
const port = 4000;


// usando rutas con el metodo GET 
app.get('/', (req, res)=>{
    res.send('<h1>pagina principal</h1>')
});

//devolviendo parametros de la url
app.get('/doble/:num', (req, res)=>{
    console.log(req.params)
    res.send('<h1>pagina secundaria<h1/>')
})

//devolviendo un objeto numerico multiplicado por dos
app.get('/api/:id', (req, res)=>{
    console.log(req.params)
    const doble = {
        "id": req.params.id,
        "result": req.params.id * 2

    }
    res.json(doble)
})

//devolviendo el parametro de la url
app.get('/objeto/:id', (req, res)=>{
    const objeto = {
        "id":req.params.id,
        "nombre":"objeto en node",
    }
    res.json(objeto)
})

//devolviendo un objeto y mostrando el parametro de la url
app.get('/json/', (req, res)=>{
    const json = [{
        "id": req.params.id,
        "nombre":"json",
        "correo":"json@gmial.com",
        

    },
    {
        "id": "3",
        "nombre":"gabriel.",
        "correo":"gabriel@gmail.com",
    }]

    res.json(json)
})

//usando rutas con el metodo POST

app.post('/json/', (req, res)=>{

    const  {id, nombre} = req.body
    res.json(id)
    console.log(id)
})


//usando el metodo put

app.put('/json/:id',(req, res)=>{
    const id = req.params.id
    console.log(id)
    res.send('dato actualizado')
})

//usando el metodo delete
app.delete('/json/:id', (req, res)=>{
    const id = req.params.id
    console.log(id)
    res.send('dato eliminado correctamente')
})

app.listen(port, ()=>{
    console.log((host), 'app running on port', (port))
})