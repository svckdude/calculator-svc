import { createServer } from 'http';
import { parse } from 'url';
import { addService } from './calculator.service';

const server = createServer((req, res) => {
  const url = parse(req.url);
  switch(url.pathname){
    case '/add':
      addService(req, res);
      break;
    default:
      res.statusCode = 404;
      res.end();
  }
});

server.listen(3000);
