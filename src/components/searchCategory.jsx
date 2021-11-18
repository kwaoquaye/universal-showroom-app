import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


const searchCategory = ({ categories }) => {
   
    
    const HandleSearch = (e) => {
        const selectedCategory = e.target.value
        
            // history.push(`/searchresults/${selectedCategory}`)
            ///alert("Handle search has ben called")
    
           
    }

 

    return (
        <>
          <select onChange={HandleSearch} className="form-select">
                {
                    categories.map((category, k) =>
                        <option id={k} value={category} key={k} disabled={!category || (category==="Select")}>
                        {category+" showroom"} 
                        </option>
                    )
                }
            </select>  
        </>
    )
}

export default searchCategory
