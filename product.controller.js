import Product from '../models/Product.js';

export const getAll = async (req, res) => {
  const products = await Product.find();
  res.json({ data: products });
};

export const create = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json({ data: product });
};

export const getOne = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json({ data: product });
};

export const update = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ data: product });
};

export const remove = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
