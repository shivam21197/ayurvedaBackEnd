const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator/check');

const Store = require('../models/store');
const User = require('../models/user');

const error = (message, code = 500) => {
  const err = new Error(message);
  err.code = code;
  if (data) {
      err.data = data;
  }
  throw err;
};

exports.getStores = async (req, res, next) => {
  const {pin, location} = req.query;

  try {
    let stores = [];
  if(pin && !location) {
    stores = await Store.find();
  }
  else if(pin && location) {
    stores = await Store.find({pin, location})
  }

  return res.status(200).json(stores);
} catch(e) {
  if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
}
};

exports.findStoresByItem = async (req, res, next) => {
  const {searchQuery} = req.params;

  try {
    let stores = [];
  if(searchQuery) {
    stores = await Store.aggregate([
      {$match: {'items.name': searchQuery}}
    ]);
  }
  
  return res.status(200).json(stores);
}catch(e) {
  if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
}
  
};