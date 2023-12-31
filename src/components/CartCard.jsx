import React, {useState, useContext} from 'react'
import { UserContext } from '../App';

function CartCard() {
    let {product,setProduct} = useContext(UserContext)
    return <>
        <div className="container">
            {
                product.map((e,i)=>{

                    const discountPrice = Math.round(e.price * (e.discountPercentage/100))
                    const [quantity, setQuantity] = useState(1);

                    const addQuantity = () => {
                        setQuantity(quantity+1)
                    }
                
                    const removeQuantity = () => {
                        if (quantity>0){
                            setQuantity(quantity-1)
                        }
                    }

                    return <>
                        <div key={i} className="card mb-5" style={{ minWidth: '100%',maxWidth:'540px'}}>
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img src={e.image} className="w-100 p-5 cardImage" alt="..."/>
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body px-3">                                    
                                        <div className="top">
                                        <div className="top-header d-flex justify-content-between align-items-center">
                                            <h5 className="card-title h1">{e.title}</h5>
                                            <h4 className="card-title h2">${e.price}</h4>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p className="card-text h4">Brand : {e.brand}</p>
                                            <p className="card-text text-danger h4 ">Discount Offer : {e.discountPercentage}%</p>
                                        </div>
                                        <p className="card-text h4 text-muted">{e.description}</p>
                                        <p className="card-text h2">Rating : {e.rating}/5</p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            <div className='d-flex flex-row justify-content-between align-items-center'>
                                                <button type="button" className='btn btn-danger' style={{ marginRight: '8px' }} onClick={() => { removeQuantity() }}> - </button>
                                                <div className='py-1 quantityText'>{quantity}</div>
                                                <button type="button" className='btn btn-success' style={{ marginLeft: '8px' }} onClick={() => { addQuantity() }}> + </button>
                                            </div>
                                        </div>
                                        </div>
                                        <hr />
                                        <div className="bottom">
                                        <div className='d-flex justify-content-between align-items-center text-muted'>
                                            Original Price (1 item) : 
                                            <p className="card-text text-muted">${e.price} </p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center text-muted'>
                                            Discount Amount : 
                                            <p className="card-text text-danger"> - ${discountPrice}</p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center text-muted'>
                                            Final Price : 
                                            <p className="card-text">${e.price - discountPrice}</p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center h2 mt-3'>
                                            Total Amount (Final price * Quantity) : 
                                            <h5 className="card-text">${e.price * quantity}</h5>
                                        </div>
                                        </div>
                                        <button type='button'className='btn btn-outline-success float-end my-3'>Proceed to pay</button>
                                    </div>
                                </div>
                            </div>                      
                        </div>
                    </>
                })
            }
        </div>        
    </>
}

export default CartCard