"use strict";

const mongoose = require("mongoose");
const Product = mongoose.model("product");

exports.post = (req, res, next) => {
  var product = new Product(req.body);
  product.save().then(() => {
    res.status(201).send({ message: 'Produto cadastrado com sucesso!'});

  }).catch(e => {
    res.status(400).send({ message: 'Falha ao cadastar produto', data: e });
  });
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send({
    id: id,
    item: req.body
  });
};

exports.delete = (req, res, next) => {
  res.status(200).send(req.body);
};
