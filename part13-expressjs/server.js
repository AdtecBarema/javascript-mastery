import express from  'express'

const app = express()
const port = 3000

//Simple route which response with Hello world
app.get('/hello', (req, res) => {
  res.send('Ola  Mundo  !')
})


//Our DB
const toDos = [
  {id: 1, todo: "learn express", done:false},
  {id: 2, todo: "learn js", done: true},
  {id: 3,todo: "learn react", done:false}
]


app.get('/api/v1/todos', (req, res)=>{
  res.json(toDos);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})