import Router from 'koa-router'
import convert from 'koa-convert'
import KoaBody from 'koa-body'
import user from '../../models/user'

const router = new Router();
const koaBody = convert(KoaBody());

router
  .get('/user/:id', async (ctx, next) => {
    ctx.status = 200;
    if (isNaN(ctx.params.id)) {
      throw {
        statusCode: 400,
        message: 'Invalid type of id parameter supplied.',
      }
    }
    let userData = await user.get(ctx.params.id);
    ctx.body = userData;
  })
  .post('/user', koaBody, async (ctx, next) => {
    ctx.status = 201;
    let createdUser = await user.create(ctx.request.body);
    console.log('CreatedUser', createdUser)
    ctx.body = createdUser;
  })
  .put('/user/:id', koaBody, async (ctx, next) => {
    ctx.status = 200;
    let updatedUser = await user.update(ctx.request.body);
    console.log('Updated user data', updatedUser);
    ctx.body = updatedUser;
  })

export default {
  routes: router.routes(),
  allowedMethods: router.allowedMethods()
}
