export default {
  routes: [
    {
      method: "GET",
      path: "/nearby-airport",
      handler: "nearby-airport.getNearbyAirport",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}
