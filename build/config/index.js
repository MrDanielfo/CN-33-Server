"use strict";

var NODE_ENV = process.env.NODE_ENV || "dev";
var ENVS = {
  dev: {
    PORT: 8080,
    SECRET: "micamisaazulquenuncalavo38483",
    CLOUD_NAME: "danielfo4324",
    API_KEY: "975468616714216",
    API_SECRET: "BvNjuqbKtG8cvGjLQcW5uNy-MvQ",
    db: {
      url: "mongodb+srv://mrdanielfo:corvettez6@clustercintanegra-gzdvg.mongodb.net/cintanegra?retryWrites=true&w=majority"
    }
  },
  production: {
    PORT: 8080,
    SECRET: process.env.SECRET,
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
    db: {
      url: "mongodb+srv://mrdanielfo:corvettez6@clustercintanegra-gzdvg.mongodb.net/cintanegra?retryWrites=true&w=majority"
    }
  }
};
module.exports = ENVS[NODE_ENV];
//# sourceMappingURL=index.js.map