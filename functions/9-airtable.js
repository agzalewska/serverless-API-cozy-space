require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appEVg5VlmweVVsin')
  .table('products');

exports.handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      const { id } = product;
      const {
        name,
        image,
        price,
        stock,
        reviews,
        category,
        company,
        shipping,
        description,
        featured,
        colors,
      } = product.fields;
      const images = image[0].url;
      return {
        id,
        name,
        images,
        price,
        category,
        reviews,
        stock,
        company,
        shipping,
        description,
        featured,
        colors,
      };
    });
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 500,
      body: 'Server Error',
    };
  }
};
