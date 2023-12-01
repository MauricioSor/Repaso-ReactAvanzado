
import './styles/index.css';
import './styles/features.css';
import hero from '../src/assets/hero-img.png';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  return (
    <>
    <Navbar/>

      <div className='container p-5'>
        <div className='row'  style={{ justifyContent: 'center', alignItems: 'center'}}>
            <div className='col-7'>
                <div style={{fontSize: '60px', fontWeight: 'bold'}}>RollingCode</div>
                <div style={{fontSize: '30px'}}>Curso de React Avanzado!</div>
                <button className='btn btn-primary btn-lg mt-4'>VER MAS</button>
            </div>
            <div className='col-5'>
                <img src={hero} alt="header image" width={500}/>
            </div>
        </div>
      </div>

      <div className="px-4 py-5 " id="featured-3" style={{ backgroundColor: '#f7f8f9'}}>
        <div className='container'>
          <h2 className="pb-2 border-bottom ">NOVEDADES</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col ">
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="text-info">
                Call to action
              </a>
            </div>
            <div className="feature col ">
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="text-info">
                Call to action
              </a>
            </div>
            <div className="feature col ">
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="text-info">
                Call to action
              </a>
            </div>
          </div>
  
          <h2 className="pb-2 border-bottom pt-5 ">CURSOS</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col ">
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="text-info">
                Call to action
              </a>
            </div>
            <div className="feature col ">
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="text-info">
                Call to action
              </a>
            </div>
            <div className="feature col ">
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="text-info">
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <footer className="py-5 px-5 bg-white container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </footer>
      
    </>
  );
}

export default App
