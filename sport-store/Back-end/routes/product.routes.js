/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         product_name:
 *           type: string
 *         price:
 *           type: number
 *         description:
 *           type: string
 *         image:
 *           type: string
 *         category_name: 
 *           type: string
 *       example:
 *         id: d5fE_asz
 *         product_name: The New Turing Omnibus
 *         price: 100000
 *         description: Welcome to Sport Store
 *         image: abc.jpg
 *         category_name: category
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 * /api/products:
 *   get:
 *     summary: Lists all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The created product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 * /api/products/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: The Product was not found
 *   put:
 *    summary: Update the book by the id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Product id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: The Product was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *
 *     responses:
 *       200:
 *         description: The product was deleted
 *       404:
 *         description: The product was not found
 */

module.exports = app => {
    const products = require("../controllers/product.controller.js")
    var router = require("express").Router();
    // Create a new Product
    router.post("/", products.create);
    // Retrieve all Product
    router.get("/", products.findAll);
    // Retrieve a single Product with id
    router.get("/:id", products.findOne);
    // Update a Tutorial with id
    router.put("/:id", products.update);
    // Delete a Product with id
    router.delete("/:id", products.delete);
    // // Delete all Product
    // router.delete("/", products.deleteAll);
    app.use('/api/products', router);
};
