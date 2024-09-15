import React from 'react';
import logo from './Logo.png';
import IconLocation from './IconLocation.png';
import IconPhone from './IconPhone.png';
import { useLanguage } from './LanguageContext'; 

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="header">
      <div className="headerText">
        <img className='icon' src={IconLocation} alt="Location Icon"/>
        <p>{language === 'en' ? 'Chicago, Illinois, US' : 'Чикаго, Иллинойс, США'}</p>
      </div>
      <img className='logo' src={logo} alt="Logo"/>
      <div className="headerText">
        <img className='icon' src={IconPhone} alt="Phone Icon"/>
        <a className='contact' href='tel:+13125508916'>
          {language === 'en' ? '+1 (312) 550 89 16' : '+7 (312) 550 89 16'}
        </a>
      </div>
      <div className='ruEn'>
        <button className='btnRuEn' onClick={toggleLanguage}>
          {language === 'en' ? 'RU' : 'EN'}
        </button>
      </div>
    </div>
  );
};

export default Header;
