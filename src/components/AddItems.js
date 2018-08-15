import React, { Component } from 'react'


class AddItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
            quantity:''
        }
       // console.log('ADDITEMS:' ,props)
    }

    onChange = (event) => {
       // console.log(event.target.value, event.target.name)
        this.setState({
            [event.target.name]: event.target.value


        })
        console.log(this.state)
    }

    onSubmit = (event) => {
        event.preventDefault()

        this.props.addItem(this.state)
            // {
            //     product: {
            //         id: this.state.id,
            //         name: this.state.name,
            //         priceInCents: this.state.priceInCents,
            //     },
            //     quantity: this.state.quantity
            // }
        this.setState({
            quantity :''
        })
    }
    
    
    
    


    render() {
        const allProducts=this.props.products.map(item => 
            <option key={item.id} value={item.id}>{item.name}</option>
        )
        
        return (
            <form className="border rounded p-3" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        onChange={this.onChange}
                        type="number"
                        className="form-control"
                        name="quantity"
                        id="quantity"
                        value={this.state.quantity} />                       
                </div>
                <div className="form-group">
                    <label htmlFor="products">Products</label>
                    <select className="form-control" id="products" name="product" onChange={this.onChange}>
                        <option>Select product</option>
                        {allProducts}
                    </select>        
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
                      
        )

    }
}




    export default AddItems