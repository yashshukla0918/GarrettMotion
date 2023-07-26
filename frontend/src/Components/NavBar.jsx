import React, { useContext } from 'react'
import { AppContext } from '../Model/AppContext'

const NavBar = () => {
  const {setItem} = useContext(AppContext)
  const kartHandler = ()=>{
    setItem((prev)=>({...prev,...{open:true}}))
  }
  return (
<nav className="navbar navbar-expand-lg sticky-sm-top navbar-dark bg-dark ">
  <div className="container-fluid">
    <h4 className="navbar-brand" >Garrett Motion Product</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      </ul>
      <div className='d-flex text-light'>
        <button onClick={kartHandler} className='btn btn-warning'>Go to Kart <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar
