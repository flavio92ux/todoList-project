const { ObjectId } = require('bson');

module.exports = (req, _res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    next({ status: 400, message: 'Invalid id' });
  }
    next();
};