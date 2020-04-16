const fs = require('fs');
const path = require('path');
const csv =require('csv-parser');


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

module.exports.getCSV = async function(req,res){
  // use file system library to make modifications and add the file to your structure
  fs.createReadStream(path.join(__dirname,'..','/uploads/csvFiles/avatars',req.params.avatar))
  .pipe(csv())
  .on('data', (row) => {
      data.push(row); // push the data in the array
  })
  .on('end', () => {
      keys = Object.keys(data[0]);
      return res.render('showFile',{
          title: "showFile", //send data to the views
          keys:keys, // get the keys out of the data
          data: data,
          avatar:req.params.avatar
      });
  });
}