import React from 'react'

const Product = async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div>
      Products page
    </div>
  )
}

export default Product
