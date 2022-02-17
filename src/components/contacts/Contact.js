import React from 'react';

const Contact = (props) => {
    const {image, title, description} = props
    return (
        <div id={'contacts'}>
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Contact;