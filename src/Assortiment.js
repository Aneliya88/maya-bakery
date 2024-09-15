import roll from './roll.png';
import honeycake from './honeycake.jpeg';
import napoleon from './napoleon.webp';
import pavlova from './pavlova2.jpeg';
import spanish from './spanish.jpg';
import spartak from './spartak.png';
import { useLanguage } from './LanguageContext';

const Assortiment = () => {
    const { language, toggleLanguage } = useLanguage();
    return (<div className="assortiment">
        <h3 className='headerMoments'>{language === 'en' ? 'Choose your favorite dessert' : 'Выбери свой любимый десерт'}</h3>
        <div className="menu">
            <div className="item">
                <img className='itemImg' src={roll}/>
                <p>Bombiches roll (gf)</p>
                <h4>{language === 'en' ? 'Price: $55/$30' : 'Цена: $55/$30'}</h4>
                <button className='btnHeading'><a className='contact' href='tel:+13125508916'>{language === 'en' ? 'Order now' : 'Заказать сейчас'}</a></button>
            </div>
            <div className="item">
                <img className='itemImg' src={honeycake}/>
                <p>Honeycake</p>
                <h4>{language === 'en' ? 'Price: $45/$25' : 'Цена: $45/$25'}</h4>
                <button className='btnHeading'><a className='contact' href='tel:+13125508916'>{language === 'en' ? 'Order now' : 'Заказать сейчас'}</a></button>
            </div>
            <div className="item">
                <img className='itemImg' src={napoleon}/>
                <p>Napoleon</p>
                <h4>{language === 'en' ? 'Price: $50/$30' : 'Цена: $50/$30'}</h4>
                <button className='btnHeading'><a className='contact' href='tel:+13125508916'>{language === 'en' ? 'Order now' : 'Заказать сейчас'}</a></button>
            </div>
            <div className="item">
                <img className='itemImg' src={spanish}/>
                <p>Spanish cake</p>
                <h4>{language === 'en' ? 'Price: $55/$30' : 'Цена: $55/$30'}</h4>
                <button className='btnHeading'><a className='contact' href='tel:+13125508916'>{language === 'en' ? 'Order now' : 'Заказать сейчас'}</a></button>
            </div>
            <div className="item">
                <img className='itemImg' src={spartak}/>
                <p>Spartak</p>
                <h4>{language === 'en' ? 'Price: $50/$30' : 'Цена: $50/$30'}</h4>
                <button className='btnHeading'><a className='contact' href='tel:+13125508916'>{language === 'en' ? 'Order now' : 'Заказать сейчас'}</a></button>
            </div>
            <div className="item">
                <img className='itemImg' src={pavlova}/>
                <p>Pavlova cake (gf)</p>
                <h4>{language === 'en' ? 'Price: $55/$30' : 'Цена: $55/$30'}</h4>
                <button className='btnHeading'><a className='contact' href='tel:+13125508916'>{language === 'en' ? 'Order now' : 'Заказать сейчас'}</a></button>
            </div>
        </div>
    </div>)
}
export default Assortiment;