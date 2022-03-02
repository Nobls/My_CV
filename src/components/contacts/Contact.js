import React from 'react';
import styleContact from  './Contact.module.css'

const Contact = (props) => {
    const {image, titleEng,titleRu, descriptionEng,descriptionRu, lang,} = props
    return (
        <div>
            {lang ?
                <>
                    <div className={styleContact.contact}>
                        <img style={{width:'50px', height:'50px', marginRight:'15px'}} src={image} alt={titleEng}/>
                        <h4 className={styleContact.contactTitle}>{titleEng}</h4>
                        <p>{descriptionEng}</p>
                    </div>
                </>
                :
                <>
                    <div className={styleContact.contact}>
                        <img style={{width:'50px', height:'50px', marginRight:'15px'}} src={image} alt={titleRu}/>
                        <h4 className={styleContact.contactTitle}>{titleRu}</h4>
                        <p>{descriptionRu}</p>
                    </div>
                </>
            }
        </div>
    );
};

export default Contact;