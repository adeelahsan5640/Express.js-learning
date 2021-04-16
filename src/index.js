const path = require('path')
const express = require('express')
const app = express()
const port = 3000


//console.log(__dirname)
const staticPath = path.join(__dirname, "../public")
//builtin middleware
app.use(express.static(staticPath))
app.get('/', (req, res) => {
    res.send("Hello from home page")
})
app.get('/about', (req, res) => {
    res.send("Hello from about page")
})
app.listen(port, () => {
    console.log(`listening to the port ${port}`)
})
