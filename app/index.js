import Koa from 'koa';
import logger from 'koa-logger'
import config from 'config';
import errorHandling from './middlewares/error';
import routes from './middlewares/routes'
import { withCombinedRoutes } from './utils'
import withPassport from './middlewares/auth'

const app = new Koa();

app.use(logger());
app.use(errorHandling);
withCombinedRoutes(routes, app);


app.listen(config.server.port, () => {
  console.log('%s listening at port %d', config.app.name, config.server.port);
});

export default app
