const { config } = require("dotenv");
const { join } = require("path");

const env = config({ path: '.env' });

module.exports = {

  envMissing: () => (env.error ? true : false),

  envGet: (key, defaultValue) => {
    const e = env.parsed || {};
    return e[key] || defaultValue || "";
  },

  envAll: () => env.parsed || {}

};
