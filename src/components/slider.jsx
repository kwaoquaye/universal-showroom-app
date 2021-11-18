import React from 'react'
import { Carousel } from 'react-bootstrap'

const slider = ({products}) => {
    // console.log(imgDataSet);
    return (
            <div className="row">
                <div className="col-12">
                    <Carousel>
                        
                    {
                        products.map(({imgUrl, name , price}, k) => <Carousel.Item key={k}><img
                        className="d-block w-100"
                        src= {imgUrl}
                        alt="First slide"
                        /><Carousel.Caption>
                                <h3>{name}</h3>
                                <p style={{color: "gold"}}>Value: ${price}</p>
                        </Carousel.Caption></Carousel.Item>)
                        }
                    </Carousel>
                </div>
            </div>
    )
}

export default slider