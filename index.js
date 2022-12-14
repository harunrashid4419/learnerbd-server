const express = require ('express');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('learning platform server is running')
})

app.get('/courses', (req, res) =>{
    res.send(courses)
 })

 app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const course = courses.find((n) => n.id === id);
    res.send(course);
 });

app.listen(port, () =>{
    console.log(`server side is running, ${port}`)
})