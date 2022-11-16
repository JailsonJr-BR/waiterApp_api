import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    required: true,
    type: [{
      name: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    }],
  },
  category: {
    // PEGA O OBJECTID DO SCHEMAS POIS NO JS PADRÃO NÃO TEM
    type: Schema.Types.ObjectId,
    required: true,
    // REFERENCIA O MODEL DE CATEGORY
    ref: 'Category',
  },
}));




