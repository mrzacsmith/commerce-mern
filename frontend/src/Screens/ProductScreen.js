import React from 'react'
import data from '../data'

const ProductScreen = (props) => {
  console.log(props.match.params.id)
  const product = data.products.find((x) => x._id === props.match.params.id)
  return (
    <div>
      <h2>{product.name}</h2>
    </div>
  )
}

export default ProductScreen
