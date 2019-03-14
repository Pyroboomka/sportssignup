import Router from 'koa-router'
import config from 'config'
import convert from 'koa-convert'
import KoaBody from 'koa-body'

const router = new Router();
const koaBody = convert(KoaBody());

router
  .get('/event', async (ctx, next) => {
    ctx.body = "Hello, here are events"
  })
  

export default {
  routes: router.routes(),
  allowedMethods: router.allowedMethods()
}
