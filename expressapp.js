const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//can add multiple routes easily (all the headers are also already set)
app.get('/about',(req,res)=>{res.send("risriddle")})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})