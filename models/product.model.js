import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Product = db.define(
  "products",
  {
    productId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    code: {
      type: Sequelize.STRING,
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
