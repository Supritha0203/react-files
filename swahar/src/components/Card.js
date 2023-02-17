import React from "react";

export default function Card(props) {
  let option = props.options;

  //console.log(typeof option, props.foodname)
  let priceops = Object.keys(props.options);
  const handleaddcart = () => {};
  return (
    <>
      <div className="card mt-3" style={{ width: "17rem", maxHeight: "400px" }}>
        <img
          className="card-img-top"
          src={props.imgsrc}
          alt="Card image cap"
          style={{ height: "150px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodname}</h5>

          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded">
              {Array.from(Array(5), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              {priceops.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline fs-5">price:</div>
          </div>
          <hr />
          <button
            className="btn btn-succes justify-center ms-2"
            onClick={handleaddcart} style={{borderColor:"white",boxShadow:"1px 1px 1px 0.2px white" }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
