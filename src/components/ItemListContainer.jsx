import React from 'react'
import "../App.css";

const ItemListContainer = ({greeting}) => {
  return (
    <div 
    style={{
        fontSize: "2rem", top:"50%", left:"50%"
    }}>{greeting}</div>
  )
}

export default ItemListContainer
