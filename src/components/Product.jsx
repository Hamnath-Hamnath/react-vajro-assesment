import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

const Product = (props) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      setData(await response.clone().json());
      setFilter(await response.json());
    })();
  }, []);
  const filterProducts = (items) => {
    const particularProduct = data.filter((x) => x.category === items);
    setFilter(particularProduct);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex flex-nowrap overflow-auto justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product.id} >
              <div className="card h-100 text-center p-4" >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{product.title}</h5>
                  <p className="card-text mb-0 fw-bold lead">
                    <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {Number.parseInt(product.price * 79.58)}
                  </p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark mt-2"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="fw-bolder text-center display-6">
            Newly Arrived Product
          </h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center"><ShowProducts /></div>
    </div>
  );
};
export default Product;
