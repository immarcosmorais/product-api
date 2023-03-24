import productService from "../services/product.service.js";

function validadeBodyToCreate(body) {
  if (!body.code || !body.description || !body.price) {
    throw new Error("Filds 'code', 'description' e 'price' are mandatories.");
  }
  return body;
}

function validadeBodyToUpdate(body) {
  if (!body.description || !body.price) {
    throw new Error("Filds 'description' e 'price' are mandatories.");
  }
  return body;
}

async function create(req, res, next) {
  const product = validadeBodyToCreate(req.body);
  try {
    res.send(await productService.create(product));
    logger.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function all(req, res, next) {
  try {
    res.send(await productService.all());
    logger.info(`GET /product`);
  } catch (err) {
    next(err);
  }
}

async function find(req, res, next) {
  try {
    res.send(await productService.find(req.params.id));
    logger.info(`GET /product`);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await productService.remove(req.params.id);
    res.end();
    logger.info(`GET /product`);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const product = validadeBodyToUpdate(req.body);
  try {
    res.send(await productService.update(product, req.params.id));
    logger.info(`PUT /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

export default { create, all, find, remove, update };
