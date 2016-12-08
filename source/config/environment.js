/**
 * Created by kidroca on 8.12.2016 г..
 */
"use strict";

if (process.env.NODE_ENV === "production") {

    module.exports = {
        session: process.env.EXPRESS_SESSION,
        connectionString: process.env.CONNECTION_STRING
    };
}
else {
    module.exports = require("../../secrets");
}