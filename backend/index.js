require('dotenv').config({ debug: false, override: true });

const app=require("./src/app");
const PORT=process.env.PORT;
require("./src/config/dbconn");

app.listen(PORT);