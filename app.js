const express=require('express')
const app= express()
var cors = require('cors')
var mongoose =require('mongoose')
const PORT = process.env.PORT || 4000
var bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))







mongoose.connect('mongodb+srv://venkykalyan:venkatesh@cluster0.mia8j.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Successful connected"))
.catch((err) => console.log("Unsuccessful",err))

app.use (bodyParser.json());
require('./models/user')


app.use(require('./routes/auth'))

if(process.env.NODE_ENV=="production"){
  app.use(express.static('practiceapp/build'))
  const path = require('path')
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'practiceapp','build','index.html'))
  })
}



app.listen( PORT, function(){ 
    //If the server was successfully run and it started listening to port 4000
    //then the 'Listening to port 4000' will be printed in console/terminal
    console.log('Listening to port 4000') 
});