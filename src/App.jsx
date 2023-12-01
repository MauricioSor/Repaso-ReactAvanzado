
import './styles/index.css';
import './styles/features.css';
import hero from '../src/assets/hero-img.png';
import Navbar from './common/Navbar/Navbar';
import FeatureSection from './components/Information/Features/FeatureSection';
import CoursesSection from './components/Information/Courses/CoursesSection';
import InformationSection from './components/Information/InformationSection';
import Footer from './common/Footer/Footer';

const App = () => {

  return (
    <>
      <Navbar />
      <div className='container p-5'>
        <div className='row' style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div className='col-7'>
            <div style={{ fontSize: '60px', fontWeight: 'bold' }}>RollingCode</div>
            <div style={{ fontSize: '30px' }}>Curso de React Avanzado!</div>
            <button className='btn btn-primary btn-lg mt-4'>VER MAS</button>
          </div>
          <div className='col-5'>
            <img src={hero} alt="header image" width={500} />
          </div>
        </div>
      </div>
      <InformationSection/>
      <Footer/>
    </>
  );
}

export default App
