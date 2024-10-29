const express = require('express')

const app = express()
const port =3000
app.engine('html', require('ejs').renderFile);


app.get('/',(req,res)=>{
    res.send("Yes you just started")
})
app.get('/main',(req,res)=>{

    var name = "Hello dusti bun";
    res.render(__dirname + "/public/index.html",{name:name})
})
app.listen(port, ()=>{

    console.log(`Running on the port ${port}`)
})
