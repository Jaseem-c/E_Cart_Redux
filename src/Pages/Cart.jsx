import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../Redux/Slices/CartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {
    const cartArray = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch((state) => state.cartReducer)
    console.log(cartArray);

    // navigate
    const navigate = useNavigate();
    // total
    const [totalPrice, setTotalPrice] = useState(0)
    const getTotal = () => {
      if(cartArray.length>0)
      {
        setTotalPrice(cartArray.map((item => item?.price)).reduce((n1, n2) => n1 + n2))
      }
      else{
        setTotalPrice(0)
      }
    }


    const handleCheckout=()=>{
        alert("Order Placed")
       dispatch(emptyCart())
       navigate('/')
    }

    useEffect(() => {
        getTotal()
    }, [])

    return (
        <>

            {cartArray.length > 0 ? <div className="container-fluid mt-3">
                <h1 className='text-center text-danger mt-md-5'>CART</h1>
                <div className="row mb-3 mt-md-5 w-100 ">
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <div style={{ width: "100%" }} className='d-flex align-items-center justify-content-center ' >
                            <table className='table table-bordered shadow'>
                                <thead>
                                    <tr>
                                        <th className='bg-secondary p-md-3'>#</th>
                                        <th className='bg-secondary p-md-3'>Title</th>
                                        <th className='bg-secondary p-md-3'>Image</th>
                                        <th className='bg-secondary p-md-3'>Price</th>
                                        <th className='text-center bg-secondary p-md-3'>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {cartArray.map((item, index) => (<tr>
                                        <td>{index + 1}</td>
                                        <td>{item?.title}</td>
                                        <td><img src={item?.thumbnail} alt="" width={"150px"} height={"150px"} /></td>
                                        <td>${item?.price}</td>
                                        <td className='text-center'>
                                            <button className='btn btn-danger' onClick={() => dispatch(removeFromCart(item.id))}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='shadow rounded  p-4'>
                            <h3>Cart Summary</h3>
                            <h4>Total Number Of Products :{cartArray?.length}</h4>
                            <h4>Grand Total is :{totalPrice}</h4>
                            <button className='btn btn-success w-100 mt-3 ' onClick={handleCheckout}>CheckOut</button>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>


            </div> :
                <div>
                    <div className='d-flex justify-content-center alihn-items-center ' style={{ width: "100%", height: "100%" }} >
                        <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="no image" style={{ width: "100%" }} />
                    </div>
                </div>
            }

        </>
    )
}

export default Cart