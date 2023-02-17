import React from 'react'

export default function Carousell() {
  return (
    <>
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner">
    
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://source.unsplash.com/random/900x900/?burger" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src="https://source.unsplash.com/random/900x900/?pizza" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src="https://source.unsplash.com/random/900x900/?sandwich" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel caption" style={{zIndex:"10"}}>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
</>
  )
}
