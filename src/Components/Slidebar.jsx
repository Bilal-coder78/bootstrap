import React from 'react'

function Slidebar() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide animate__animated animate__bounceInDown animate__slow">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner carousel-fade">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1755272853203-1469840c4c60?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="d-block w-100 mx-auto" style={{height: "450px", objectFit: "cover"}}/>
      <div className="carousel-caption">
        <div class="animate__animated animate__fadeInDown animate__delay-1s">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        </div>
        <div class="animate__animated animate__fadeInUp animate__delay-1s">
        <button class="btn btn-primary mx-2 my-2">Web Development</button>
        <button class="btn btn-danger mx-2 my-2">Technology</button>
        <button class="btn btn-success mx-2 my-2">Tools</button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1514342959091-2bffd8a7c4ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="d-block w-100 mx-auto" alt="" style={{height: "450px", objectFit: "cover"}}/>
      <div className="carousel-caption">
        <div class="animate__animated animate__fadeInDown animate__delay-1s">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
        </div>
        <div class="animate__animated animate__fadeInUp animate__delay-1s">
        <button class="btn btn-primary mx-2 my-2">Web Development</button>
        <button class="btn btn-danger mx-2 my-2">Technology</button>
        <button class="btn btn-success mx-2 my-2">Tools</button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="d-block w-100 mx-auto" alt="" style={{height: "450px", objectFit: "cover"}}/>
      <div className="carousel-caption">
        <div class="animate__animated animate__fadeInDown animate__delay-1s">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
        </div>
        <div class="animate__animated animate__fadeInUp animate__delay-1s">
        <button class="btn btn-primary mx-2 my-2">Web Development</button>
        <button class="btn btn-danger mx-2 my-2">Technology</button>
        <button class="btn btn-success mx-2 my-2">Tools</button>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slidebar