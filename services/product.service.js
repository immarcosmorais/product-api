import productRepository from "../repositories/product.repository.js";

async function create(product) {
  return await productRepository.create(product);
}

async function all() {
  return await productRepository.all();
}

async function find(id) {
  return await productRepository.find(id);
}

async function remove(id) {
  await productRepository.remove(id);
}

async function update(product, id) {
  return await productRepository.update(product, id);
}

export default { create, all, find, remove, update };
