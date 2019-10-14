import { IncomingMessage, ServerResponse } from "http";
import { parse } from "url";
import { Calculator } from "./calculator";

export function calculateService(req:IncomingMessage, res: ServerResponse) {
  const url = parse(req.url, true);
  const query = url.query;
  
  if (!query['n1'] || !query['n2']) {
    res.statusCode = 400;
    res.end();
    return;
  }

  // check if query are numbers
  let n1 = parseInt(query['n1'] as string, 10);
  let n2 = parseInt(query['n2'] as string, 10);

  if (isNaN(n1) || isNaN(n2)) {
    res.statusCode = 400;
    res.end();
    return;
  }

  let calculator = new Calculator;
  let result = null;
  switch (url.pathname) {
    case '/add':
      result = calculator.add(n1, n2);
      break;

    case '/subtract':
      result = calculator.subtract(n1, n2);
      break;

    case '/multiply':
      result = calculator.multiply(n1, n2);
      break;

    case '/divide':
      result = calculator.divide(n1, n2);
      break;
  
    default:
      break;
  }

  res.setHeader('content-type', 'application/json');

  res.write(JSON.stringify(result));
  res.end();
}