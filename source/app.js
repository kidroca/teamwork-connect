/* globals require console */

// App modules
const config = require("./config/environment");
const app = require("./config/application");
require("./routers");

app.listen(config.port, () => console.log(`Running at: ${config.port}`));