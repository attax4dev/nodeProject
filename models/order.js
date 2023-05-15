// const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);

// const orderValidSchema = Joi.object({
//   date: Joi.date().default(Date.now),
//   status: Joi.string().valid('created', 'canceled').default('created'),
//   client: Joi.objectId().required(),
//   total: Joi.number().optional(),
//   items: Joi.array().items(
//     Joi.object({
//       item: Joi.objectId().required(),
//       quantity: Joi.number().required(),
//     })
//   ).required(),
// });

// function validateOrder(order) {
//   return orderValidSchema.validate(order);
// }

// module.exports = {
//   validateOrder,
// };

// const mongoose = require('mongoose');
// const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);

// const orderSchema = new mongoose.Schema({
//   date: { type: Date, default: Date.now },
//   status: { type: String, enum: ['created', 'canceled'], default: 'created' },
//   client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   total: { type: Number },
//   items: [
//     {
//       item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
//       quantity: { type: Number, required: true }
//     }
//   ]
// });

// const Order = mongoose.model('Order', orderSchema);

// const orderValidSchema = Joi.object({
//   date: Joi.date().default(Date.now),
//   status: Joi.string().valid('created', 'canceled').default('created'),
//   client: Joi.objectId().required(),
//   total: Joi.number().optional(),
//   items: Joi.array()
//     .items(
//       Joi.object({
//         item: Joi.objectId().required(),
//         quantity: Joi.number().required()
//       })
//     )
//     .required()
// });

// function validateOrder(order) {
//   return orderValidSchema.validate(order);
// }

// module.exports = {
//   Order,
//   validateOrder
// };
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const orderSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['created', 'canceled'], default: 'created' },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  total: { type: Number },
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
      quantity: { type: Number, required: true }
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

const orderValidSchema = Joi.object({
  date: Joi.date().default(Date.now),
  status: Joi.string().valid('created', 'canceled').default('created'),
  client: Joi.objectId().required(),
  total: Joi.number().optional(),
  items: Joi.array()
    .items(
      Joi.object({
        item: Joi.objectId().required(),
        quantity: Joi.number().required()
      })
    )
    .required(),
  user: Joi.objectId().required() // Add this line
});

function validateOrder(order) {
  return orderValidSchema.validate(order);
}

module.exports = {
  Order,
  validateOrder
};

