/**
 * Created by kidroca on 8.12.2016 г..
 */
"use strict";

let config;

if (process.env.NODE_ENV === "production") {

    config = {
        session: process.env.EXPRESS_SESSION,
        connectionString: process.env.CONNECTION_STRING
    };
}
else {
    config = require("../../secrets");
}

config.port = process.env.PORT || 3001;

module.exports = config;
