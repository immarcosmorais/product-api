import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Product = db.define(
  "products",
  {
    code: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Product;
