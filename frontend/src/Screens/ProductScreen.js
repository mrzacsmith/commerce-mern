import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

const ProductScreen = (props) => {
  console.log(props.match.params.id)
  const product = data.products.find((x) => x._id === props.match.params.id)
  console.log(product.image)
  return (
    <div>
      <div>
        <Link to="/">back to results</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="image"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} stars ({product.numReivews} reviews)
            </li>
            <li>
              <b>{product.price}</b>
            </li>
            <li>
              description: <div>{product.description}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
