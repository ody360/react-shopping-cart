import React from 'react'
import CartItemComponent from './CartItemComponent'

const CartItems = ({cartItemList, total}) => {    
    const listItem = cartItemList.map((product) => <CartItemComponent key={product.id} product={product}/>)
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
            <p>Total: ${Number(total/100).toFixed(2)}</p>
        </div>
    )
}

export default CartItems