
const express = require('express')
const app = express()
const port = 5000
const mongo= require('./db')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Request-Headers', '*');
  if (req.method === "OPTIONS") {
    res.header('Access-Control-Allow-Methods', '*');
    return res.status(200).json({});
  }
  next();
});
mongo()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api/',require("./Routes/CreateUser"))
app.use('/api/',require("./Routes/DisplayData.js"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
