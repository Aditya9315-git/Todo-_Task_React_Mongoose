const express=require('express')
const app= express()
const routes=require('./Routes/UserRoutes.js')
const cors= require('cors')
const bodyparser= require('body-parser')
app.use(cors())

let db=require('./DatabaseConfigue.js')
db()




app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())

app.use('/api',routes)

app.listen(3000, ()=>{
    console.log("server is running")
})