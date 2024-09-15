import ReviewCarousel from "./ReviewCarousel";
import { useLanguage } from './LanguageContext'; 

const Review = () => {
    const { language } = useLanguage();
    return (<div className="review">
        <h3 className='headerReview'>{language === 'en' ? 'Review' : 'Отзывы'}</h3>
        <ReviewCarousel />
    </div>)
}
export default Review;