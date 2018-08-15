import React from 'react'
import CartItemComponent from './CartItemComponent'

const CartItems = ({cartItemList}) => {
    console.log('CARTITEMLIST:', cartItemList)
    
    const listItem = cartItemList.map((product) => <CartItemComponent key={product.id} product={product}/>)
    console.log(listItem)
    return(
        <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div>
                </div>
                {listItem}
            </div>
        </div>
    )
}

export default CartItems