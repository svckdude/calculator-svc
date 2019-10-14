import { IncomingMessage, ServerResponse } from "http";
import { parse } from 'url';
import { add } from "./calculator";

export function addService(req: IncomingMessage, res: ServerResponse) {
  // parsing parameters
  const url = parse(req.url, true);
  const query = url.query;
  
  // n1 & n2 harus ada
  if (!query['n1'] || !query['n2']) {
    res.statusCode = 400;
    res.end();
    return;
  }

  // n1 & n2 harus angka
  const n1 = parseInt(query['n1'] as string, 10);
  const n2 = parseInt(query['n2'] as string, 10);
  if(isNaN(n1) || isNaN(n2)){
    res.statusCode = 400;
    res.end();
    return;
  }

  // add
  const n3 = add(n1, n2);

  // encode results
  const output = {
    result: n3
  };
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(output));
  res.end();
}
