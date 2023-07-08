const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index', {value: 79})
})

app.post('/add-image', (req, res) => {
    console.log(req.body)
    // res.send("received")
    // let data = req.body
    res.render('receiver', {data: req.body})
})

app.get('/api/elements', (req, res) => {
    const allElements = [
        { "image_path": "path-of-image/filename.png", "username": "name of user", "age": "numbericalvalue" },
        { "image_path": "path-of-image/filename.png", "username": "name of user", "age": "numbericalvalue" },
        { "image_path": "path-of-image/filename.png", "username": "dummy doe", "age": "55" },
        { "image-path": "path-of-image/filename.png", "username": "naman", "age": "6"}
    ]
    res.json(allElements)
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})