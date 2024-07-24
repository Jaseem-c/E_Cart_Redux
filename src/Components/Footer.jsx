import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div className="container-fluid bg-primary text-light p-4">
    <div className="row">
        <div className="col-md-4 px-md-5">
            <div>
                <h3><FontAwesomeIcon icon={faCartShopping}  className='me-2'/>E-Cart</h3>
                <p className='mt-4' style={{textAlign:"justify"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto ullam. Libero esse labore nihil quibusdam, natus facere ad rem tenetur, necessitatibus doloribus unde voluptatum doloremque vitae iste magnam. Quod.</p>
            </div>
        </div>
        <div className="col-md-2 d-md-flex justify-content-center mt-5 mt-md-0">
           <div >
                <h3>Links</h3>
                <Link to={'/'}><p className='mt-4 text-light' >Home Page</p></Link>
                <Link to={'/Wishlist'}><p className='text-light'>Wish List</p></Link>
               <Link to={'/Cart'}> <p className='text-light'>Cart</p></Link>
           </div>
        </div>
        <div className="col-md-2 d-md-flex justify-content-center mt-5 mt-md-0">
           <div >
                <h3>Guides</h3>
                <Link to={'https://react.dev/'}><p className='mt-4 text-light'>React</p></Link>
                <Link to={'https://react-bootstrap.netlify.app/'}><p className='text-light'>React Bootstrap</p></Link>
               <Link to={'https://bootswatch.com/'}> <p className='text-light'>Bootswatch</p></Link>
           </div>
        </div>
        <div className="col-md-4 px-md-5 mt-5 mt-md-0">
            <h3>Contact Us</h3>
            <div className="d-flex mt-4">
                <input type="text" placeholder='Email Id' className='form-control me-3'/>
                <button className='btn btn-warning rounded'>Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-4">
            <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
            <FontAwesomeIcon icon={faLinkedinIn}className='fa-2x' />
            <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
            <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Footer