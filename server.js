require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/database");

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database Connected");

    app.listen(PORT, () => {
      console.log(`Server Running on ${PORT}`);
    });
  })
  .catch(console.error);