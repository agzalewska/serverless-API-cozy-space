const items = require('../assets/data-single-11');

exports.handler = async (event, context, cb) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
