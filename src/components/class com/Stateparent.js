import React, { Component } from 'react'
import StateChild from './StateChild'

export class Stateparent extends Component {
  render() {
   let mobiles = [{
        id:"001",
        name :"oneplus11",
        price : 56999,
        isPurchased: true},
        {
        id:"002",
        name : "Vivi Y100",
        price : 24999,
        isPurchased: false},
        {
        id:"003",
        name : "Redmi 10",
        price : 56999,
        isPurchased : true},
        {
        id:"004",
        name : "iphone 13",
        price : 62990,
        isPurchased : false},
        {
        id:"005",
        name : "Nokia",
        price : 12000,
        isPurchased : true},
        {
        id:"006",
        name : "Poco M4",
        price : 13999,
        isPurchased : true}]

    return (
      <div>Stateparent
        <StateChild book={mobiles}/>
      </div>
    )
  }
}

export default Stateparent