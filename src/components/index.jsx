import React from 'react'
import Search from './searchCategory'
import Slider from './slider'

const index = ({ products }) => {

    const categories = Array.from(new Set(products.map(p => p.category)))
    categories.unshift("Select")
    console.log(categories);
    return (
        <div>
            <div className="row justify-content-end my-4">
                <div className="col-md-5">
                    <Search categories={categories} />
                </div>
            </div>
            <Slider products={products} />
        </div>
    )
}

export default index
