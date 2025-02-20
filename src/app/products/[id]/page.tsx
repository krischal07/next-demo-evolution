import React from 'react'

const Products = async ({params}:{params:{id:string}}) => {
    const {id} = await params;
  return (
    <div>Proudcts {id}</div>
  )
}

export default Products