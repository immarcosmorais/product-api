import Product from "../models/product.model.js";

async function create(product) {
  try {
    return await Product.create(product);
  } catch (err) {
    throw err;
  }
}

async function all() {
  try {
    return await Product.findAll();
  } catch (err) {
    throw err;
  }
}

async function find(code) {
  try {
    return await Product.findByPk(code);
  } catch (err) {
    throw err;
  }
}

async function update(product, code) {
  try {
    await Product.update(product, {
      where: {
        code: code,
      },
    });
    return await find(code);
  } catch (err) {
    throw err;
  }
}

async function remove(code) {
  try {
    await Product.destroy({
      where: {
        code: code,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default { create, all, find, update, remove };
