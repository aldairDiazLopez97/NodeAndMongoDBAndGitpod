const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://Aldair:Aldair@cluster0.yyhrz.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
                    .then(()=>console.log('DB is connected'))
                    .catch(e=>console.log(e))