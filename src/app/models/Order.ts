import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    // O STATUS SÓ PODE SER UM DESSE VALORES
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  created_at: {
    type: Date,
    // DEFINE A DATA ATUAL COMO DEFAULT
    default: Date.now,
  },
  products: {
    required: true,
    type: [{
      product: {
        // PEGA O OBJECTID DO SCHEMAS POIS NO JS PADRÃO NÃO TEM
        type: Schema.Types.ObjectId,
        required: true,
        // REFERENCIA O MODEL DE PRODUCT
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }]
  }
}));




