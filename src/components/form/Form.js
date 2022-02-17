import React from 'react';
import styleForm from './Form.module.css'

const Form = () => {
    return (
        <div className={styleForm.formBg}>
            <form action="" className={styleForm.form}>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='E-mail'/>
                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder={'Enter your message'}></textarea>
                </div>
                <button type={"submit"}>Send message</button>
            </form>

        </div>
    );
};

export default Form;

