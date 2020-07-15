const express = require('express');
const nunjucks = require('nunjucks');

const courses = require("./data-courses");
const about = require("./data-about");

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', (req, res) => {
  return res.render('courses', { courses });
});

server.get('/about', (req, res) => {
  return res.render('about', { about });
});


server.get("/:id", (req, res) => {
  const id = req.params.id;
  
  const course = courses.find( course => course.id == id );

  if(!course) {
    return res.send("Conteúdos não encontrado!");  
  } 

  return res.render('course-details', { course })
});

server.use( (req, res) => {
  res.status(404).render("not-found");
});

server.listen(5000, () => {
  console.log("Server is Running!");
});