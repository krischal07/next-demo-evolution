import React from 'react'

const ProductLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <div>{children}</div>
        <h2>Featured Product Section</h2>

    </div>
  )
}

export default ProductLayout