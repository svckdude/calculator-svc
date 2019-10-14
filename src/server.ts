import { createServer } from 'http';
import { parse } from "url";
import { calculateService } from './calculator.service';

const server = createServer((req, res) => {
  const url = parse(req.url);
  switch (url.pathname) {
    case '/add':
      calculateService(req, res);
      break;
    
    case '/subtract':
      calculateService(req, res);
      break;

    case '/multiply':
      calculateService(req, res);
      break;

    case '/divide':
      calculateService(req, res);
      break;
  
    default:
      res.statusCode = 404;
      res.end();
      break;
  }
});

server.listen(5000, () => console.log('Server running...'));