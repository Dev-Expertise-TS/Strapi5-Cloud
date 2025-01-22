export default {
  routes: [
    {
      method: "GET",
      path: "/airport-pickup-sending",
      handler: "airport-pickup-sending.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}
