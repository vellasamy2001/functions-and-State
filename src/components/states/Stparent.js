import React, { useState } from 'react'

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

const Main = () => {
    const [values , setState] = useState(mobiles)
    
    let ascending = [...mobiles].sort((a,b) => {
        let letter = a.name.toLowerCase();
        let letter2= b.name.toLowerCase();
        
        if(letter < letter2){
            return -1;
        }else if(letter > letter2){
            return 1;
        }
    })
    let descending = [...ascending].reverse();


    let priceAsc = [...mobiles].sort((a,b) => {
         return a.price - b.price;
    })
    let priceDec = [...priceAsc].reverse();


    let purchase = [...mobiles].filter(e => {
      if(e.isPurchased == true){
        return e.name;
      }
    })
    
  
  return (
    <div>
      <button onClick={() => setState(ascending)}>Ascending</button>
      <button onClick={() => setState(descending)}>Descending</button>
      <button onClick={() => setState(priceAsc)}>Low to High</button>
      <button onClick={() => setState(priceDec)}>High to Low</button>
      <button onClick={() =>setState(purchase)}>purchase filter</button>
      {values.map((e,i) => <h2 key={i}>{e.name} : {e.price}</h2>)}
    </div>
  )
}

export default Main