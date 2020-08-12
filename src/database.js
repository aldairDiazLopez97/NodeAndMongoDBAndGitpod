const mongoose = require('mongoose'); 
mongoose.connect('',{ //La ruta sera ejecutada con la direccion que tengo en mongoDBAtlas 
    useNewUrlParser : true,
    useUnifiedTopology: true
})
                    .then(()=>console.log('DB is connected'))
                    .catch(e=>console.log(e))