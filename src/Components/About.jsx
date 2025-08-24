import React from 'react'
import img from "../assets/1.jpg"

function About() {
  return (
    <div className='container my-3'>
      <div className="row align-items-stretch g-3 g-md-0 g-lg-0 g-sm-0" style={{ minHeight: "500px" }}>
        
        {/* Image column */}
        <div className="col-12 col-md-6 col-lg-6 animate__animated animate__fadeInLeft">
          <div className="w-100 h-100">
            <img 
              src={img} 
              alt="about" 
              className="w-100 h-100 rounded" 
              style={{ objectFit: "cover" }} 
            />
          </div>
        </div>

        {/* Text column */}
        <div className="col-12 col-md-6 col-lg-6 text-white bg-dark rounded d-flex flex-column align-items-center justify-content-center animate__animated animate__fadeInRight">
          <h3 className='my-5 animate__animated animate__bounce animate__slow'>About me</h3>
          <p className='px-3 animate__animated animate__fadeInUp animate__delay-1s'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex sint, nihil perspiciatis quos repudiandae sequi eum temporibus porro vitae minus corrupti obcaecati officiis sed fugit, quidem distinctio nostrum autem aperiam voluptatem molestias dolor eaque!
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
