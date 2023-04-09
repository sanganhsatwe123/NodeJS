const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/sport_store', { useNewUrlParser: true });

const db = {}
db.mongoose = mongoose
db.url = "mongodb://127.0.0.1:27017/sport_store"
//db.tutorial = require("./tutorial.model.js")(mongoose)
db.product = require("./product.model.js")(mongoose)
db.blog = require("./blog.model.js")(mongoose)

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db
