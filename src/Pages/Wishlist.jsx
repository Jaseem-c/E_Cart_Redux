import React from 'react'
import { faCartShopping, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlist } from '../Redux/Slices/WishlistSlice'
import { addToCart } from '../Redux/Slices/CartSlice'

function Wishlist() {
    const dispatch=useDispatch((state) => state.wishlistReducer)
    const WishlistArray = useSelector((state) => state.wishlistReducer)
    console.log(WishlistArray);


    const handleCart=(item)=>{
        dispatch(addToCart(item))
        dispatch(deleteWishlist(item.id))

    }
    return (
        <>
            <div className="container-fluid mt-md-5" >
                <h1 className='text-danger text-center mt-5'>WISHLIST</h1>
                
                <div className="row px-md-4 ">
                    {WishlistArray.length>0?
                    WishlistArray.map((item)=>( <div className="col-md-3 px-2 my-4 d-flex justify-content-center" key={item}>
                        <Card style={{ width: '100%' }} className='shadow rounded border-0'>
                            <Card.Img variant="top" src={item.thumbnail} style={{ width: "100%", height: "260px" }} />
                            <Card.Body>
                                <Card.Title>{item?.title}</Card.Title>
                                <Card.Text>
                                    {item?.description}
                                </Card.Text>
                                <p className='fw-bolder'>Price :${item?.price}</p>
                                <div className='d-flex justify-content-between'>
                                    <Button variant="danger"  onClick={()=>dispatch(deleteWishlist(item?.id))}><FontAwesomeIcon icon={faTrash} /></Button>
                                    <Button variant="success" onClick={()=>handleCart(item)}><FontAwesomeIcon icon={faCartShopping} /></Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>)):
                  

                    <div>
                        <div className='d-flex justify-content-center alihn-items-center ' style={{ width: "100%", height: "100%" }} >
                            <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="no image" style={{ width: "100%" }} />
                        </div>
                    </div>}
                </div>

{/* 
                <div className='row w-100 '>
                    <div className="col-md-1"></div>

                    
                    <div className="col-md-1"></div>

                </div> */}

            </div>
        </>
    )
}

export default Wishlist