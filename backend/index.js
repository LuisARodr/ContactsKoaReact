
const mongoogse = require('mongoose')
const app = require('./app')
const config = require('./config')

//starting the service
mongoogse.connect(config.db, (err,res) =>{
  if (err){
    return console.log("failed to connect to server")
  }
  console.log("connected to the database")
})

app.listen(config.port, ()=>{
  console.log(`API REST whoa en http://localhost:${config.port}`)
})

