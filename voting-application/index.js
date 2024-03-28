const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')
require('dotenv').config()

const PORT = process.env.PORT || 8080
const userRouter = require('./Routes/userRoute')
const candidateRouter = require('./Routes/candidateRoute')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send('welcome to voting website')
})


app.use('/user',userRouter)
app.use('/candidate',candidateRouter)


app.listen(PORT,()=>{
    console.log("app running fine")
})