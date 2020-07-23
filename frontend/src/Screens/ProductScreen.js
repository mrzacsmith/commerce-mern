import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

const ProductScreen = (props) => {
  console.log(props.match.params.id)
  const product = data.products.find((x) => x._id === props.match.params.id)
  console.log(product.image)
  return (
    <div>
      <div className="back-to-results">
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
              Price: <b className="details-info-price">${product.price}</b>
            </li>
            {product.description ? (
              <li>
                description: <div>{product.description}</div>
              </li>
            ) : (
              'empty'
            )}

            {/* remove 'empty' for description */}
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: ${product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Qty:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="button primary">add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
