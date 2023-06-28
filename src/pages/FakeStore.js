  import React, { useEffect, useState } from "react";
  import Header from "../components/Header";
  import Carousel from "../components/Carousel";

  export default function FakeStore() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      //Fetch products from http://fakestoreapi.com/products.
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log("Error is " + error));
    }, []);

    return (
      <>
        <Header></Header>
        <Carousel></Carousel>
        <div>
          <h3 className="m-5 text-center">WHAT WE CAN DO</h3>
          {/* Services Starts here  */}
          <div className="services d-flex flex-xsm-column flex-sm-column flex-md-column flex-lg-row justify-content-between">
            <div className="service text-dark text-center fs-3">
              <i className="fa fa-clock" />
              <h3>24/7</h3>
              <p>Customer Service</p>
            </div>
            <div className="service text-center fs-3">
              <i className="fa fa-users" />
              <h3>1000</h3>
              <p>Esteemed Users</p>
            </div>
            <div className="service text-center fs-3">
              <i className="fa fa-handshake" />
              <h3>300</h3>
              <p>Completed Deals</p>
            </div>
            <div className="service text-center fs-3">
              <i className="fa fa-truck" />
              <h3>100%</h3>
              <p>Swift Delivery</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="m-5 text-center">PRODUCT GALLERY</h3>
          <section className="d-flex flex-wrap justify-content-center px-1">
           
            {products.map (x=>  {
              return <div className="card" style={{ width: "18rem" }}>
              <img
                src={x.image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{x.title}</h5>
                <h5 className="card-title"> <i className="fa fa-star text-warning"></i>{x.rating.rate}{x.rating.count}</h5>

                <p className="card-text">{x.description}
              
                </p>
                <a href="#" className="btn btn-danger w-100">${x.price}
                
                </a>
              </div>
            </div>
            })}
           
            
          </section>
        </div>
      </>
    );
  }
