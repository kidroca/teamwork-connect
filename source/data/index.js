/* globals module require global __dirname */

const mongoose = require("mongoose");

const fs = require("fs");
const path = require("path");
const Team = require("../models/team.js");
const User = require("../models/user.js");

const CONNECTION_URL = "mongodb://localhost/teamCDb";

module.exports = function (config) {
    mongoose.Promise = global.Promise;
    mongoose.connect(CONNECTION_URL);

    let models = { Team, User };
    let data = {};

    fs.readdirSync(__dirname)
      .filter(x => x.includes("-data"))
      .forEach(file => {
          let dataModule = require(path.join(__dirname, file))(models);

          Object.keys(dataModule)
                .forEach(key => {
                    data[key] = dataModule[key];
                });
      });

    return data;
};