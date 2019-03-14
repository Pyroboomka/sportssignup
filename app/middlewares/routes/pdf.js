import Router from 'koa-router'

const router = new Router();

// Source: http://koajs.com/#stream
const PassThrough = require('stream').PassThrough;
const request = require('request');

router.get('/pdf', (ctx) => {
  const url = 'https://collegereadiness.collegeboard.org/pdf/sat-practice-test-8.pdf';
  ctx.set('Content-Type', 'application/pdf');
  console.log(request);
  ctx.body = request(url).pipe(PassThrough());
});

export default {
  routes: router.routes(),
  allowedMethods: router.allowedMethods()
}