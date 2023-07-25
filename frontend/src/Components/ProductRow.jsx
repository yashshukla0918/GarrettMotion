import React from 'react'
import ProductCard from './ProductCard';

const ProductRow = ({data}) => {
  return (
    <div className="row">
        {
            [...data].map((item)=>{
                return <div key={item.id} className="col-sm-3">
                    <ProductCard  item={item}/>
                </div>
            })
        }
    </div>
  )
}

export default ProductRow
