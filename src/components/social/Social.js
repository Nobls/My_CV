import React from 'react';

const Social = (props) => {
    const {image, title, description} = props
    return (
        <div>
            <a href={description}>
                <img src={image} alt={title}/>
            </a>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Social;