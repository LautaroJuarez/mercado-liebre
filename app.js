const express = require("express");
const app = express();
const port=3000;
const path= require("path")
//middleware
app.use(express.static("public"))
//route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.listen(port, () => {
console.log(`servidor encendido en el puerto ${port}\n ://localhost:3000 `)
})