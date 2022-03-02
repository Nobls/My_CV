import React from 'react';
import styleForm from './Form.module.css'
import style from '../../common/styles.module.css'
import Contact from "../contacts/Contact";
import phoneIcon from '../../images/icons/phone.png'
import emailIcon from '../../images/icons/email.png'
import locationIcon from '../../images/icons/location.png'

const Form = (props) => {

    const {lang} = props

    const contacts = [
        {
            id: 1,
            image: phoneIcon,
            titleEng: 'Phone:',
            titleRu: 'Телефон:',
            descriptionEng: '+375-(29)-163-27-03',
            descriptionRu: '+375-(29)-163-27-03',
        },
        {
            id: 2,
            image: emailIcon,
            titleEng: 'E-mail:',
            titleRu: 'Почта:',
            descriptionEng: 'sergikon92@gmail.com',
            descriptionRu: 'sergikon92@gmail.com',
        },
        {
            id: 3,
            image: locationIcon,
            titleEng: 'Address:',
            titleRu: 'Адрес:',
            descriptionEng: 'Republic of Belarus, Minsk, Partisan Avenue ',
            descriptionRu: 'Republic of Belarus, Minsk, Partisan Avenue ',
        },
    ]

    return (
        <div className={styleForm.formBg}>
            <div className={`${style.container} ${styleForm.form}`}>
                <div className={styleForm.formItemsBg}>
                    {lang ?
                        <>
                            <h5 className={styleForm.formTitle}>Contact with me</h5>
                        </>
                        :
                        <>
                            <h5 className={styleForm.formTitle}>Связаться со мной</h5>
                        </>
                    }
                    <form className={styleForm.formItems}>
                        <div className={styleForm.formInputItem}>
                            <input className={styleForm.formInput} type="text" placeholder='Name'/>
                            <input className={styleForm.formInput} type="text" placeholder='E-mail'/>
                        </div>
                        <div>
                            <textarea className={styleForm.formTextarea} cols="30" rows="10" placeholder={'Enter your' +
                                ' message'}>

                            </textarea>
                        </div>
                        {lang ?
                            <>
                                <button className={styleForm.formBtn} type={"submit"}>Send message</button>
                            </>
                            :
                            <>
                                <button className={styleForm.formBtn} type={"submit"}>Отправить сообщение</button>
                            </>
                        }
                    </form>
                </div>
                <div >
                    {
                        contacts.map(m => {
                            return (
                                <Contact
                                    key={m.id}
                                    image={m.image}
                                    titleEng={m.titleEng}
                                    titleRu={m.titleRu}
                                    descriptionEng={m.descriptionEng}
                                    descriptionRu={m.descriptionRu}
                                    lang={lang}
                                />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Form;

