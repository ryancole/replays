"use strict";

// development settings
let settings = {
  "API_ADDR": "http://localhost:8080",
  "DOWNLOAD_PREFIX": "https://cdn.dank.gg"
};

// production settings
if (process.env.NODE_ENV === "production") {
  settings = {
    "API_ADDR": "http://api.dank.gg",
    "DOWNLOAD_PREFIX": "https://cdn.dank.gg"
  };
}

module.exports = settings;
