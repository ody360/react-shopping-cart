import React from 'react'

const CartItemComponent = ({product}) => {

    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">{product.product.name}</div>
                <div className="col-md-2">${Number(product.product.priceInCents/100).toFixed(2)}</div>
                <div className="col-md-2">{product.quantity}</div>
            </div>
        </div>
    )
}

export default CartItemComponent