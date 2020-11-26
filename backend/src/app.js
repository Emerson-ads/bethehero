const express = require ('express')
const router = require('./routes')
const cors = require('cors')

app = express();

app.use(cors())
app.use(express.json())
app.use(router)




app.listen(5000, ()=>{
    console.log('server is running ')
})