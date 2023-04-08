import http from "../http-common";

class ProductsDataService {
  getAll() {
    return http.get("/san-pham");
  }

  get(id) {
    return http.get(`/san-pham/${id}`);
  }

  create(data) {
    return http.post("/san-pham", data);
  }

  update(id, data) {
    return http.put(`/san-pham/${id}`, data);
  }

  delete(id) {
    return http.delete(`/san-pham/${id}`);
  }

  deleteAll() {
    return http.delete(`/san-pham`);
  }

  findByTitle(product_name) {
    return http.get(`/san-pham?title=${product_name}`);
  }
}

export default new ProductsDataService();