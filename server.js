const http = reqire('http');
const app = reqire('./app.js');

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, ()=> {
  console.log(`App started on port ${port}`);
});