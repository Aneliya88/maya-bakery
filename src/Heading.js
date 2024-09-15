import cake1 from './cakeHeading1.png';
import cake2 from './cakeHeading2.png';
import cake3 from './cakeHeading3.png';
import pavlova from './pavlova.png';
import { useLanguage } from './LanguageContext';

const Heading = () => {
    const { language, toggleLanguage } = useLanguage();
    return (<div className="heading">
        <div className='heading1'>
        <img className='cakeHeading' src={cake1}/>
        <div className='textHeading'>
            <h1>{language === 'en' ? 'Come try our deserts!' : 'Приходи к нам за десертом!'}</h1>
            <button className='btnHeading'><a className='contact' href='tel:+13125508916'>{language === 'en' ? 'Order now' : 'Заказать сейчас'}</a></button>
            <img className='cakeHeading' src={cake2}/>
        </div>
        <img className='cakeHeading' src={cake3}/>
        </div>
        <div className='heading2'>
            <h3 className='headerMoments'>{language === 'en' ? 'Tasty moments of life' : 'Вкусные моменты жизни'}</h3>
            <div className='momentsText'>
            <p className='moments'>{language === 'en' ? 'We believe that desserts are not just sweets, but a real art that can give joy. We offer you unique desserts prepared with love and passion for cooking. Each of our cakes, pastries and sweet treats is the result of careful work and the use of only the best ingredients.' : 'Мы верим, в то, что десерты — это не просто сладости, а настоящее искусство, способное даровать радость. Мы предлагаем вам уникальные десерты, приготовленные с любовью и страстью к кулинарии. Каждый наш торт, пирожное и сладкий угощение — это результат тщательной работы и использования только лучших ингредиентов.'}</p>
            <img className='pavlova' src={pavlova}/>
            </div>
        </div>
    </div>)
}
export default Heading;