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

async function find(id) {
  try {
    return await Product.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function update(product, id) {
  try {
    await Product.update(product, {
      where: {
        productId: id,
      },
    });
    return await find(id);
  } catch (err) {
    throw err;
  }
}

async function remove(id) {
  try {
    await Product.destroy({
      where: {
        productId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default { create, all, find, update, remove };
