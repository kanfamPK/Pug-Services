var express = require('express')
var app = express();

app.use(express.json());
app.use(express.text())

app.get('/', (req,res,next) => {
    res.send('Hello there')
})

app.listen(8080, () => {
    console.log("Listening on port 8080")
})