import Sequelize from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  // process.env.DB,
  // process.env.USERNAME,
  // process.env.PASSWORD,
  process.env.DB_URL,
  {
    // host: process.env.HOST,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
