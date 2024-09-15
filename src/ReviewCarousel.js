import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import './App.css'; 

const reviews = {
  en: [
    { id: 1, text: 'Thank you so much! I didn’t have time to take a photo - we ate it all. It was very tasty, all compliments!!!' },
    { id: 2, text: 'I’m happy I ordered from you because the cake was incredibly delicious. Thank you, it was made with love, just like mom’s.' },
    { id: 3, text: 'Thank you, the cake was insanely delicious!!! Can I order a cherry cake for tomorrow evening?' },
    { id: 4, text: 'Extremely delicate, ate 3 pieces at night. I couldn’t stop)) Next time I’ll order Napoleon from you)) Thanks' },
  ],
  ru: [
    { id: 1, text: 'Спасибо большое! Не успела сфотографировать - всё съели. Очень вкусно, от всех сплошные комплименты!!!' },
    { id: 2, text: 'Я счастлива, что заказала именно у вас, так как тортик оказался ну просто невероятно вкусный, благодарю вас, прям с душой и как мамин' },
    { id: 3, text: 'Спасибо вам, тортик был безумно вкусный!!! Можно у вас на завтра вечером заказать тортик с вишней?' },
    { id: 4, text: 'Безумно нежный, на ночь 3 кусочка съела. Не могла остановиться)) В следующий раз закажу у вас Наполеон)) Спасибо' },
  ],
};
const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews[language].length);
  };
  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews[language].length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevReview}>
        &lt;
      </button>
      <div className="carousel-content">
        <p className="review-text">{reviews[language][currentIndex].text}</p>
      </div>
      <button className="carousel-button next" onClick={nextReview}>
        &gt;
      </button>
    </div>
  );
};
export default ReviewCarousel;
