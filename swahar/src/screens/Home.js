import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [search,setSearch] = useState('');
  const [foodcat, setFoodcat] = useState([]);
  const [fooditem, setFooditem] = useState([]);

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    //console.log(response[0],response[1])
    setFooditem(response[0]);
    setFoodcat(response[1]);
  };

  useEffect(() => {
    loaddata();
  }, []);
  var i = 0;
  return (
    <div>
      <Navbar />
      <div className="container">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="container carousel-inner" style={{height:"500px", width:"50rem"}}>
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://source.unsplash.com/random/900x900/?burger"
                className="d-block w-100"
                alt="..." 
                style={{height:"500px", width:"50rem"}}
              />
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img
                src="https://source.unsplash.com/random/900x900/?noodles"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img
                src="https://source.unsplash.com/random/900x900/?biryani"
                className="d-block w-100"
                alt="..."
              />
            </div>
           
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
          <div className="carousel caption m-3" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search} onChange={(e)=>{setSearch(e.target.value)}}
                />
                {/* <button
                  className="btn btn-outline-success text-white bg-success"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
            </div>
        </div>
        
      </div>
      <div className="container m-3">
        {foodcat !== []
          ? foodcat.map((data) => {
              return (
                <>
                  <div className="  row mb-3">
                    <div className=" fs-3 m-3" key={data._id}>
                      {data.CategoryName}
                    </div>
                    <hr />
                    <div>
                      {fooditem !== []
                        ? fooditem
                            .filter(
                              (item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search))
                            )
                            .map((filterItems) => {
                              return (
                                <>
                                  <div
                                    className="d-inline col-12 col-md-6 col-lg-3"
                                    key={filterItems._id}
                                  >
                                    <Card
                                      foodname={filterItems.name}
                                      options={filterItems.options[0]}
                                      imgsrc={filterItems.img}
                                    ></Card>
                                  </div>
                                </>
                              );
                            })
                        : "no data found"}
                    </div>
                  </div>
                </>
              );
            })
          : ""}
      </div>

      <Footer />
    </div>
  );
}
