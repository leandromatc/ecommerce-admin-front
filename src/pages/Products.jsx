import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import FormUs from "../components/FormUs";
import FormUp from "../components/FormUp";
import FormDelete from "../components/FormDelete";

function Products() {
  const [product, setProduct] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenDel, setModalIsOpenDel] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModalDel = () => {
    setModalIsOpenDel(true);
  };
  const closeModalDel = () => {
    setModalIsOpenDel(false);
  };

  useEffect(() => {
    closeModal();
  }, []);
  useEffect(() => {
    openModal();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/admin/Product`,
      });
      setProduct(response.data);
    };
    getProduct();
  }, []);

  return (
    product && (
      <section id="products">
        <div className="p-4 d-flex justify-content-between align-items-center">
          <h2 className="fw-bold m-0">Products</h2>

          {<FormUs />}
        </div>
        <div className="row mx-4 chart">
          <table className="table text-center ">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Stock</th>
                <th scope="col">Top</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, id) => (
                <tr key={id}>
                  <td>
                    <img
                      className="img-fluid img-thumbnail p-0"
                      src={`https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/products/${item.image}?//t=2023-09-19T13%3A20%3A01.474Z`}
                    />
                  </td>
                  <td className="col">{item.name}</td>
                  <td className="col">{item.price}</td>
                  <td className="col">
                    {item.description.substring(0, 20)}...
                  </td>
                  <td className="col">{item.category}</td>
                  <td className="col">{item.stock}</td>
                  <td className="col">{item.top === true ? "SI" : "NO"}</td>

                  <td className="col">
                    <FormDelete
                      onClick={openModalDel}
                      isOpen={modalIsOpenDel}
                      onClose={closeModalDel}
                      item={item}
                    />

                    <FormUp
                      onClick={openModal}
                      isOpen={modalIsOpen}
                      onClose={closeModal}
                      item={item}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  );
}

export default Products;
