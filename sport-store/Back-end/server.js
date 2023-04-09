const express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const cors = require("cors")

const app = express()

// khai bao swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

var corsOptions = {
  origin: "*"
}

app.use(cors(corsOptions))

const db = require("./models")

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!")
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err)
    process.exit()
  })


function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}


// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencode
app.use(express.urlencoded({ extended: true }))

// goi swagger
const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// routes
require('./routes/auth.routes.js')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
require("./routes/product.routes.js")(app)
require("./routes/blog.routes.js")(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
module.exports = initial;
