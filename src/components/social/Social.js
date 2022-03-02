import React from 'react';

const Social = (props) => {
    const {image, title, description, href} = props
    return (
        <div>
            <a href={href} target="blank">
                <img src={image} alt={title}/>
            </a>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Social;