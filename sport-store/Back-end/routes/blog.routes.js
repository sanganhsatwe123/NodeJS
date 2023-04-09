/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         image:
 *           type: string
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         content: Hello...
 *         image: abc.jpg
 */

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: The blogs managing API
 * /api/blogs:
 *   get:
 *     summary: Lists all the blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: The list of the blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 *   post:
 *     summary: Create a new blog
 *     tags: [Blogs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blog'
 *     responses:
 *       200:
 *         description: The created blog.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       500:
 *         description: Some server error
 * /api/blogs/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [Blogs]
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
 *               $ref: '#/components/schemas/Blog'
 *       404:
 *         description: The Blog was not found
 *   put:
 *    summary: Update the blog by the id
 *    tags: [Blogs]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Blog id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Blog'
 *    responses:
 *      200:
 *        description: The Blog was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Blog'
 *      404:
 *        description: The blog was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the blog by id
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog id
 *
 *     responses:
 *       200:
 *         description: The blog was deleted
 *       404:
 *         description: The blog was not found
 */

module.exports = app => {
    const blogs = require("../controllers/blog.controller")
    var router = require("express").Router();
    // Create a new Blog
    router.post("/", blogs.create);
    // Retrieve all Blog
    router.get("/", blogs.findAll);
    // Retrieve a single Blog with id
    router.get("/:id", blogs.findOne);
    // Update a Blog with id
    router.put("/:id", blogs.update);
    // Delete a Blog with id
    router.delete("/:id", blogs.delete);
    // // Delete all Blog
    // router.delete("/", blogs.deleteAll);
    app.use('/api/blogs', router);
};
