import { useEffect, useState } from "react";

import axios from "axios";

function ProductsAdmin() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/admin/products`,
        /* headers: {
          Authorization: "Bearer " + (user && user.token),
        }, */
      });
      console.log(response.data);
      response && setProduct(response.data);
    };
    getProduct();
  }, []);

  return (
    product && (
      <div className="container-fluid main-container">
        <div className="container d-flex justify-content-center align-items-center mb-3 data-container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">CATEGORY</th>
                <th scope="col"> stock</th>
                <th scope="col">top</th>
              </tr>
              {console.log("product", product)}
            </thead>
            <tbody>
              {product.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.stock}</td>
                  <td>{item.top === true ? "SI" : "NO"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
}

export default ProductsAdmin;
