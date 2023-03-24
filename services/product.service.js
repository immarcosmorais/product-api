import productRepository from "../repositories/product.repository.js";

async function create(product) {
  const productExist = await productRepository.find(product.code);
  if (productExist) {
    return await productRepository.update(product, product.code);
  }
  return await productRepository.create(product);
}

async function all() {
  return await productRepository.all();
}

async function find(code) {
  return await productRepository.find(code);
}

async function remove(code) {
  await productRepository.remove(code);
}

async function update(product, code) {
  return await productRepository.update(product, code);
}

export default { create, all, find, remove, update };
