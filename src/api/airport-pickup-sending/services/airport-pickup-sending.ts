/**
 * airport-pickup-sending service
 */

export default ({ strapi }) => ({
  async find(ctx) {
    const { city_name, hotel_name } = ctx
    const $or = city_name
      ? [
          { city_name_kr: { $contains: city_name.toLowerCase() } },
          { city_name_en: { $contains: city_name.toLowerCase() } },
        ]
      : []
    const $and = hotel_name
      ? [{ ref_location: { $contains: hotel_name.toLowerCase() } }]
      : []
    const entry = await strapi
      .documents("api::airport-pickup-sending.airport-pickup-sending")
      .findFirst({
        filters: { $or, $and },
        fields: [
          "airport_kr",
          "airport_en",
          "iata",
          "price",
          "car_name",
          "car_type",
          "notice",
          "wait_time_min",
          "number_passengers",
          "luggage",
        ],
      })
    return entry
  },
})
