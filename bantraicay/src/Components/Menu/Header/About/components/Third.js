import React from 'react'

export default function Third(props) {
  return (
    <div className="container">
      <div className="row ThirdCss">
        <div className="col-xl-6"> 
            <h3>Subcribe to our Newsletter</h3>
            <h5>Get e-mail updates about our latest shops and special offers</h5>
        </div>
        <div className="col-xl-6 Third">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Enter email address" aria-label="Search"/>
                <button className ="btn btn-outline-success" type ="submit">Subscribe</button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>

  )
}
