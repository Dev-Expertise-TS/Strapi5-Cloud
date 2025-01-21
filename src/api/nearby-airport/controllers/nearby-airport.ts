/**
 * A set of functions called "actions" for `nearby-airport`
 */

export default {
  getNearbyAirport: async (ctx) => {
    try {
      let results
      const { city_name, hotel_name } = ctx.query
      if (!city_name && !hotel_name) {
        results = {}
      } else {
        results = await strapi
          .service("api::nearby-airport.nearby-airport")
          .getNearbyAirport(ctx.query)
      }

      ctx.send(results)
    } catch (err) {
      ctx.send(err)
      ctx.badRequest("Error in `nearby-airport`", {
        moreDetails: err,
      })
    }
  },
}
