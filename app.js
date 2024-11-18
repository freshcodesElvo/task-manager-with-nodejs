const express = require('express');
const tasks = require('./routes/task-routes');
const connect_datbase = require('./database/mongodb-connection');
require('dotenv').config()
const app = express();

//MIDDLE WARE////////////////////////////
app.use(express.json())
app.use('/api/v1/tasks', tasks);

const port = 3000;


const start = async()=>{
    try{
        await connect_datbase(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is listening in port ${port}...`))

    }catch(error){
        console.log(error)
    }
}
start()

