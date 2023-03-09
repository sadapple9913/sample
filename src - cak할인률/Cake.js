import React, { Component } from 'react'

export class Cake extends Component {
  state = {
    price: 10000,
    discountPrice: 0
  }
  discount = () => {
    this.setState(current => ({
      discountPrice: current.price * 0.7
    }))
  }
  render() {
    return (
      <>
        <h1>CAKE</h1>
        <h2>cake 가격 : {this.state.price}</h2>
        <h3>할인 가격 : {this.state.discountPrice} </h3>
        <button onClick={this.discount}>30%할인하기</button>
      </>
  );
 }
}

export default Cake; 