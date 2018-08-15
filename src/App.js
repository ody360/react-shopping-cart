import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';
import AddItems from './components/AddItems';

class App extends Component {
  constructor() {
  super()
  this.state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
  ],

     cartItemList : [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  }
}

addItem = ({product, quantity}) => {
  
  let p = this.state.products.find((i) => i.id === Number(product))
  const newItem = {id: (this.state.cartItemList.length+1),product: {...p}, quantity}

  this.setState({
    cartItemList: [...this.state.cartItemList, newItem]
  })
  
}

computeTotal = () => {
    let sums = 0
    this.state.cartItemList.forEach((p) => {
    sums += p.product.priceInCents * Number(p.quantity)
  })
  return sums
}

  render() {
    this.computeTotal()
    return (
      <div className="App">
        <CartHeader />
         <CartItems cartItemList={this.state.cartItemList} total={this.computeTotal()}/>
         <AddItems products={this.state.products} addItem={this.addItem}/>
        <CartFooter copyright='2016'/>
      </div>
    )
  }
}

export default App;
