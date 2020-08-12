//Llama a express
const express = require('express');
const app = express();

const Task=require('./model/task');


//Settings
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

//Middlewre: se ejecutan antes de llegar alas rutas
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Rutas: hace llamado a los paquete o modulos
//Ruta: 
app.get('/', async (req,res)=>{
    const  tasks = await Task.find();
    res.render('index', {tasks});
});


// Create Task
app.post('/create', async (req,res)=>{
    const newTask= new Task({
        task: req.body.task, 
        description: req.body.description
    });
    await newTask.save();
    //res.send('Recieved'); //Escribe en el documento HTML o en la pagina
    res.redirect('/');
})


// STATIC files
app.use(express.static(__dirname + '/public'));
module.exports=app;