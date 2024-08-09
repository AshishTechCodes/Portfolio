import React from 'react'

const ImageCard = () => {
    return (
        <div className='display'>
            <img src='./Assets/mahadev1.jpg' id='front' />
            <div className="channel">
                <img src='./Assets/mahadev1.jpg' id='logo' />
                <p className='name'>You can watch live video for mahadev temple</p>
            </div>
        </div>
    )
}

export default ImageCard