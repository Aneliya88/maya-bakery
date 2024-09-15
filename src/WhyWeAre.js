import { useLanguage } from './LanguageContext'; 

const WhyWeAre = () => {
    const { language } = useLanguage();
    return (<div className="why">
       <h3 className='headerMoments'>{language === 'en' ? 'Why choose us?' : 'Почему выбирают нас?'}</h3>
        <p className="whyText">{language === 'en' ? 'Individual approach: we listen to the wishes of our clients and strive to implement even the most daring ideas.' : 'Индивидуальный подход: мы слушаем пожелания наших клиентов и стремимся реализовать даже самые смелые идеи.'}</p>
        <p className="whyTextPink">{language === 'en' ? 'Quality Ingredients: We use only fresh and natural ingredients to ensure the unrivaled taste and high quality of our products.' : 'Качество ингредиентов: мы используем только свежие и натуральные продукты, чтобы обеспечить непревзойденный вкус и высокое качество нашей продукции.'}</p>
        <p className="whyText">{language === 'en' ? 'Fast and reliable execution: we guarantee timely execution of your order and strict compliance with all agreements. We ensure that each stage of the work is performed at the highest level.' : 'Быстрое и надежное выполнение: мы гарантируем своевременное выполнение вашего заказа и строгое соблюдение всех договоренностей. Мы следим за тем, чтобы каждый этап работы был выполнен на высшем уровне.'}</p>
    </div>)
}
export default WhyWeAre;