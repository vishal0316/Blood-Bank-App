const mongoose = require("mongoose");
const colors = require("colors");

const conectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected ${mongoose.connection.host}` .bgMagenta.white);
  } catch (error) {
    console.log(`mongo dastabase error ${error}`.bgRed.white);
  }
};
module.exports = conectDB;
