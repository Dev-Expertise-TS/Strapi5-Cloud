/**
 * A set of functions called "actions" for `nearby-airport`
 */

export default {
  getNearbyAirports: async (ctx) => {
    try {
      const result = await strapi
        .service("api::nearby-airport.nearby-airport")
        .getNearbyAirports(ctx.query)
      ctx.body = result
    } catch (err) {
      ctx.body = err
      ctx.badRequest("nearby-airport 컨트롤러에서 에러 발생", {
        moreDetails: err,
      })
    }
  },
}
