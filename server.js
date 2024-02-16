const express = require('express')
const cors= require('cors');



const app= express()

//middlewares
app.use(cors())
app.use(express.json())


//routes
//app.use('/api/v1/auth');

//apis
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to decommerce app</h1>")
} )

const PORT= 8080;

app.listen(PORT, ()=>{
    console.log(`Server is listening to ${PORT}`)
})