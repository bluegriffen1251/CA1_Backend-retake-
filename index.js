const express = require('express')
const app = express()
const PORT=3000

app.use(express.json())

app.post('/login',(req,res)=>{
    const{ email, password} = req.body;

    if(!email){
        return res.status(400).send({error:"Email cannot be empty"});
    }

    if(!password){
        return res.status(400).send({error:"Password cannot be empty"});
    }

    const data = {
        "Email":email,
        "password":password
    }

    return res.json(data)

})

app.listen(PORT,()=>{
    console.log(`Port is running on ${PORT}`)
})





