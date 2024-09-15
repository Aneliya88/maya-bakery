
import './App.css';
import Assortiment from './Assortiment';
import Contact from './Contact';
import Header from './Header';
import Heading from './Heading';
import Review from './Review';
import WhyWeAre from './WhyWeAre';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
      <Header/>
      <Heading/>
      <Assortiment/>
      <WhyWeAre/>
      <Review/>
      <Contact/>
      </LanguageProvider>
    </div>
  );
}
export default App;
