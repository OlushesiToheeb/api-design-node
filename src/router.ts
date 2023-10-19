import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { handleInputErrors } from './modules/middleware';
import {
    createProduct,
    deleteProduct,
    getOneProduct,
    getProducts,
    updateProduct,
} from './handlers/product';
import {
    createUpdate,
    deleteUpdate,
    getOneUpdate,
    getUpdates,
    updateUpdate,
} from './handlers/update';

const router = Router();

/**
 * Product
 */
router.get('/product', getProducts);

router.get('/product/:id', getOneProduct);

router.post(
    '/product',
    body('name').isString(),
    handleInputErrors,
    createProduct
);

router.put('/product/:id', body('name').isString(), updateProduct);

router.delete('/product/:id', deleteProduct);

/**
 * Update
 */

router.get('/update', getUpdates);

router.get('/update/:id', getOneUpdate);

router.put(
    '/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status')
        .isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED'])
        .optional(),
    body('version').optional(),
    handleInputErrors,
    updateUpdate
);

router.post(
    '/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    createUpdate
);

router.delete('/update/:id', deleteUpdate);

/**
 * UpdatePoint
 */

router.get('/updatepoint', (req, res) => {});

router.get('/updatepoint/:id', (req, res) => {});

router.post('/updatepoint', (req, res) => {});

router.put('/updatepoint/:id', (req, res) => {});

router.delete('/updatepoint/:id', (req, res) => {});

export default router;
