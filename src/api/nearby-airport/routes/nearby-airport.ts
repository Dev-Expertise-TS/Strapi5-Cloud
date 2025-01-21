export default {
  routes: [
    {
      method: "GET",
      path: "/nearby-airport",
      handler: "nearby-airport.getNearbyAirports",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}
