/**
 * airport-pickup-sending controller
 */

export default {
  find: async (ctx) => {
    try {
      let results
      const { city_name, hotel_name } = ctx.query
      if (!city_name && !hotel_name) {
        results = {}
      } else {
        results = await strapi
          .service("api::airport-pickup-sending.airport-pickup-sending")
          .find(ctx.query)
      }

      ctx.send(results)
    } catch (err) {
      ctx.send(err)
      ctx.badRequest("Error in `airport-pickup-sending`", {
        moreDetails: err,
      })
    }
  },
}
