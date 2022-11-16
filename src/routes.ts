import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

// USECASES OF CATEGORIES
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

// USECASES OF PRODUCTS
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';

// USECASES OF ORDERS
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

const updload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

// list categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', updload.single('image') ,createProduct);

// list orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
