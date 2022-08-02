const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());

// Download from website method
// http://localhost:4000/images/1658977299045-lung_001.nii.gz
app.use(express.static("./public"));

var storage = multer.diskStorage({

destination: "./public/images",
filename: function (req, file, cb) {
cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage }).array('file');


app.post('/upload',function(req, res) {
 
upload(req, res, function (err) {
       if (err instanceof multer.MulterError) {
           return res.status(500).json(err)
       } else if (err) {
           return res.status(500).json(err)
       }
    // console.log(req.files[0].path)
    // console.log(process.env.PWD)
    // const path = process.env.PWD + '/'+req.files[0].path
    console.log(req.files[0].filename)
  return res.status(200).json(req.files[0].filename)

})

});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {
console.log("server started at port "+PORT);
});
// import cors from 'cors'
// import ImageRouter from './routes/router'

// const app =express()

// //init middleware
// app.use(cors())

// //define routes
// app.use('/api',ImageRouter)

// //define server
// const port = process.env.PORT || 4000
// app.listen(port, ()=>{
//     console.log('Server is up on port ' + port +'.')
// })