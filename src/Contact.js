import insta from './insta.png';
import fb from './Fb.png';
import phone from './IconPhone.png';
import logo from './LogoEnd.png';
import { useLanguage } from './LanguageContext'; 

const Contact = () => {
    const { language, toggleLanguage } = useLanguage();
    return (<div className="contactMain">
        <h3 className='headerReview'>{language === 'en' ? 'Contact' : 'Контакты'}</h3>
        <div className="contactItem">
            <img className='icon' src={insta}/>
            <a className='contact'  href='https://www.instagram.com/mayacakes_chicago/'>mayacakes_chicago</a>
        </div>
        <div className="contactItem">
            <img className='icon' src={fb}/>
            <a className='contact'  href='https://www.facebook.com/maya.kay.737001/'>Maya ChicagoBakery</a>
        </div>
        <div className="contactItem">
            <img className='icon' src={phone}/>
            <a className='contact'  href='tel:+13125508916'>mayacakes_chicago</a>
        </div>
        <img className='logo' src={logo} width='300px'/>
    </div>)
}
export default Contact;