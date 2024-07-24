import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import useFetch from '../Hooks/UseFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../Redux/Slices/WishlistSlice'
import { addToCart } from '../Redux/Slices/CartSlice'

function Home() {
    const data = useFetch('https://dummyjson.com/products')
    console.log(data);
    const dispatch= useDispatch()

    return (
        <>
            <div className="container-fluid mt-md-5">
                <div className="row px-md-4">
                    {data.length>0?
                    data.map((item)=>(<div className="col-md-3 px-2 my-4 d-flex justify-content-center" key={item.id}>
                        <Card style={{ width: '100%' }} className='shadow rounded border-0'>
                            <Card.Img variant="top" src={item?.thumbnail} style={{ width: "100%", height: "260px" }} />
                            <Card.Body>
                                <Card.Title>{item?.title}</Card.Title>
                                <Card.Text >
                                    {item?.description}
                                </Card.Text>
                                <p className='fw-bolder' >Price :${item?.price}</p>
                                <div className='d-flex justify-content-between '>
                                    <Button variant="danger" onClick={()=>dispatch(addToWishlist(item))}><FontAwesomeIcon icon={faHeart}  /></Button>
                                    <Button variant="success" onClick={()=>dispatch(addToCart(item))}><FontAwesomeIcon icon={faCartShopping}  /></Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>)):<p className='text-danger fw-bold fs-1'>Nothing To Display</p>
                    }
                </div>
                {/* <div className="row px-md-4">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <div className="col-md-3 px-2 my-4 d-flex">
                                <Card className='shadow rounded border-0 d-flex flex-column h-100'>
                                    <Card.Img
                                        variant="top"
                                        src={item?.thumbnail}
                                        className="card-img-top"
                                        style={{ height: "260px", objectFit: 'cover' }}
                                    />
                                    <Card.Body className='d-flex flex-column'>
                                        <Card.Title>{item?.title}</Card.Title>
                                        <Card.Text className='flex-grow-1'>
                                            {item?.description}
                                        </Card.Text>
                                        <p className='fw-bolder'>Price: ${item?.price}</p>
                                        <div className='mt-auto d-flex justify-content-between'>
                                            <Button variant="danger">
                                                <FontAwesomeIcon icon={faHeart} />
                                            </Button>
                                            <Button variant="success">
                                                <FontAwesomeIcon icon={faCartShopping} />
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <p className='text-danger fw-bold fs-1'>Nothing To Display</p>
                    )}
                </div> */}

            </div>
        </>
    )
}

export default Home