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
          <div className="row g-0 mt-5">
            <div className="col-6">
              <img
                src={product.image}
                style={{
                  maxHeight: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-6 cardBody">
              <div className="card-body p-5">
                <h3 className="text-uppercase fw-bold">{product.name}</h3>
                <p className="card-text mt-3 fs-2 priceText fst-italic">
                  $USD: {product.price}
                </p>
                <p className="card-text">{product.description}</p>
                <hr className="mt-5" />
                <p>CATEGORY: {product.category}</p>
                <p className="text-body-secondary ">STOCK: {product.stock}</p>
                <hr className="mt-2" />
                <div className="d-flex justify-content-end mt-5 ">
                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center px-4 py-2 addToCartButton"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductsAdmin;
