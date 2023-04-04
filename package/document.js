const axios = require("axios");
const yaml = require("yaml");
const SwaggerClient = require("swagger-client");

const getDocument = async (url, resolve) => {
  if (resolve) {
    let swaggerClient = await new SwaggerClient({ url });
    return swaggerClient.spec;
  } else {
    res = await axios.get(url);
    if (typeof res.data == "object") {
      return res.data;
    }
    if (url.slice(-1) == "l") {
      return yaml.parse(res.data);
    }
    if (url.slice(-1) == "n") {
      console.log(typeof res.data);
      return JSON.parse(res.data);
    }
  }
};

module.exports = { getDocument };
