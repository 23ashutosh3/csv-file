module.exports.home = function(req, res){
    
    return res.render('home', {
        title: "Home"
    });
}

module.exports.upload = function(req, res){
    
    const testFolder = 'uploads';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

  
return res.send('upload');
}
