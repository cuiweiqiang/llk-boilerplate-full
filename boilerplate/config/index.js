const common = require('./env/common');

const env = process.env.NODE_ENV || 'development';
const config = require(`./env/${env}`);

let result = Object.assign({}, common, config);

exports = module.exports = result;