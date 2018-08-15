import React, { Component } from 'react'


class AddItems extends Component {
    constructor(props) {
        super(props)
        this.state = {          
            quantity:''
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        this.props.addItem(this.state)
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