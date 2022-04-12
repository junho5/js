const http = require('http');
const fs = require('fs').promises;

const shoes = {}; // shoes와 관련된 데이터 저장하기위해 있는 변수
const port = 8080;

const ShoesServer = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      // GET 부분 (조회)
      if (req.url === '/') {
        const data = await fs.readFile('./ShoesFront.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/about') {
        const data = await fs.readFile('./about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/shoes') {
        res.writeHead(200, { 
            'Content-Type': 'application/json; charset=utf-8', 
        });
        res.end(JSON.stringify(shoes));
      }else{
      try {
        const data = await fs.readFile(`.${req.url}`);
        res.end(data);
      } catch (err) {
        console.error(err);
        res.writeHead(404,{'Content-Type': 'text/html; charset=utf-8'});
        res.end('NOT FOUND');
      }
    }
    } else if (req.method === 'POST') {
      // POST 부분 (등록)
      if (req.url === '/shoe') {
        req.on('data', (data) => {
            console.log('POST 본문(Body):', data.toString());
            const { name } = JSON.parse(data);
            const { price } = JSON.parse(data);
            const { stock } = JSON.parse(data);
            const id = Date.now();
            shoes[id] = [name,price,stock];
            // 리스트형태로 name,price,stock 값을 shoes[id]에 넘겨준다.
            res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('ok');
        });
      } else{
          console.error(err);
          res.statusCode = 404;
          res.end('NOT FOUND');
      }
    } else if (req.method === 'PUT') {
      // PUT 부분 (수정)
      if (req.url.startsWith('/shoe/')) {
        const key = req.url.split('/')[2];
        req.on('data', (data) => {
          console.log('PUT 본문(Body):', data.toString());
          const name = JSON.parse(data).name
          const price = JSON.parse(data).price
          const stock = JSON.parse(data).stock
          shoes[key] = [name,price,stock]
          // 리스트형태로 name,price,stock 값을 shoes[key]에 넘겨준다.
          res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('ok');
        });
      }else{
        console.error(err);
        res.statusCode = 404;
        res.end('NOT FOUND');
    }
    } else if (req.method === 'DELETE') {
      // DELETE 부분 (삭제)
      if (req.url.startsWith('/shoe/')) {
        const key = req.url.split('/')[2];
        delete shoes[key];
        // shoes 객체에서 key값에 해당되는 부분 삭제
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('ok');
      }else{
        console.error(err);
        res.statusCode = 404;
        res.end('NOT FOUND');
        }
    } else{
        console.error(err);
        res.statusCode = 400;
        res.end('BAD REQUEST');
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
})

ShoesServer.listen(port, () => {
    console.log('8080번 포트에서 서버 대기 중입니다');
  });