const express = require('express')

const app = express()
const port =3000

app.get('/',(req,res)=>{
    res.send("Yes you just started")
})

app.listen(port, ()=>{

    console.log(`Running on the port ${port}`)
})