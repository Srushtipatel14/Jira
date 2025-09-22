require('dotenv').config({ debug: false, override: true });

const mongoose=require("mongoose");

const MONGO_URL=process.env.MONGO_URL;

mongoose.connect(MONGO_URL)

module.exports={mongoose,MONGO_URL};