import React from 'react'

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg sticky-sm-top navbar-dark bg-dark ">
  <div className="container-fluid">
    <h4 className="navbar-brand" >Garrett Motion Product</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    </div>
  </div>
</nav>
  )
}

export default NavBar
