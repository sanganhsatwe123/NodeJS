const db = require("../models")

const Product = db.product

// Them moi
exports.create = (req, res) => {
    // Validate request
    if (!req.body.product_name) {
        res.status(400).send({ message: "Tên sản phẩm không được để trống!" })
        return;
    }

    if (!req.body.price) {
        res.status(400).send({ message: "Giá sản phẩm không được để trống!" })
        return;
    }

    if (!req.body.description) {
        res.status(400).send({ message: "Mô tả sản phẩm không được để trống!" })
        return;
    }

    if (!req.body.category_name) {
        res.status(400).send({ message: "Loại sản phẩm không được để trống!" })
        return;
    }
    // Create a Product instance
    const product = new Product({
        product_name: req.body.product_name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        category_name: req.body.category_name
    })

    // Luu san pham vao database
    product.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Xảy ra lỗi trong quá trình thêm dữ liệu"
            })
        })
}

// Tim tat ca san pham
exports.findAll = (req, res) => {
    const product = req.query.product_name
    var condition = product ? {
        product: {
            $regex: new RegExp(product, "i")
        }
    } :
        Product.find(condition)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Đã xảy ra lỗi trong quá trình truy xuất dữ liệu"
                })
            })
}

// Tim 1 san pham theo id
exports.findOne = (req, res) => {
    const id = req.params.id
    Product.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({
                    message: "Không tìm thấy sản phẩm theo id đã chọn !"
                })
            else
                res.send(data)
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Có lỗi khi truy xuất sản phẩm có id =" + id })
        })
}

// Sua san pham
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Dữ liệu khi cập nhật không được để trống !"
        })
    }
    const id = req.params.id
    Product.findByIdAndUpdate(
        id,
        req.body,
        { useFindAndModify: false }
    )
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Không tìm thấy sản phẩm có id = ${id}.`
                })
            } else {
                res.send({ message: "Sản phẩm được cập nhật thành công." })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Lỗi khi cập nhật sản phẩm với id=" + id
            })
        })
}

// Xoa san pham
exports.delete = (req, res) => {
    const id = req.params.id
    Product.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Không tìm thấy sản phẩm có id=${id}`
                })
            } else {
                res.send({
                    message: "Sản phẩm được xóa thành công !"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Không thể xóa sản phẩm có id = " + id
            })
        })
}

// Xoa tat ca san pham
exports.deleteAll = (req, res) => {
    Product.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Các sản phẩm được xóa thành công !`
            })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Có lỗi khi xóa dữ liệu trong bảng Sản phẩm.."
            })
        })
}
