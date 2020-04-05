const express = require('express')
const multer = require('multer');

const port = 8000;
const path =require('path');


 
// SET STORAGE
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname+ '-' + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({ storage: storage }).single('myfile');

const app = express();
app.use(express.urlencoded());

 
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.post('/upload',(req, res) =>{
    upload(req, res, (err) =>{
        if(err){
            res.render('home',{
                msg: err
            });
        }else{
            console.log(req.file);
            res.redirect('back')
        }
    });
});

app.listen(port, function(err){
    if (err){

        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});