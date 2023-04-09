const db = require("../models")

const Blog = db.blog

// Them moi
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Tiêu đề bài viết không được để trống!" })
        return;
    }

    if (!req.body.content) {
        res.status(400).send({ message: "Nội dung bài viết không được để trống!" })
        return;
    }

    // Tao bai viet
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        image_blog: req.body.image_blog
    })

    // Luu bai viet vao database
    blog.save()
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

// Tim tat ca bai viet
exports.findAll = (req, res) => {
    const blog = req.query.title
    var condition = blog ? {
        blog: {
            $regex: new RegExp(blog, "i")
        }
    } :
        Blog.find(condition)
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

// Tim 1 bai viet theo id
exports.findOne = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({
                    message: "Không tìm thấy bài viết theo id đã chọn !"
                })
            else
                res.send(data)
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Có lỗi khi truy xuất bài viết có id =" + id })
        })
}

// Sua bai viet
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Dữ liệu khi cập nhật không được để trống !"
        })
    }
    const id = req.params.id
    Blog.findByIdAndUpdate(
        id,
        req.body,
        { useFindAndModify: false }
    )
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Không tìm thấy bài viết có id = ${id}.`
                })
            } else {
                res.send({ message: "Bài viết được cập nhật thành công." })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Lỗi khi cập nhật bài viết với id=" + id
            })
        })
}

// Xoa bai viet
exports.delete = (req, res) => {
    const id = req.params.id
    Blog.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Không tìm thấy bài viết có id=${id}`
                })
            } else {
                res.send({
                    message: "bài viết được xóa thành công !"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Không thể xóa bài viết có id = " + id
            })
        })
}

// Xoa tat ca bai viet
exports.deleteAll = (req, res) => {
    Blog.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Các bài viết được xóa thành công !`
            })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Có lỗi khi xóa dữ liệu trong bảng bài viết.."
            })
        })
}
