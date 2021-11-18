import React from 'react'

const carouselItem = ({imgUrl, k}) => {
    return (
        <div class="carousel-item">
            <img src={imgUrl} id={k} class="d-block w-100" alt="..." />
        </div>
    )
}

export default carouselItem
