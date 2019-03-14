
export const withCombinedRoutes = (routes, app) => {
  routes.forEach(route => {
    app.use(route.routes)
    app.use(route.allowedMethods)
  })
}