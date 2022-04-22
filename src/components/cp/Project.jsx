import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img from "../../assets/images/2.jpg";

import "./project.css";

const Project = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="project__container">
      <div style={{textAlign: 'center', maxWidth: '500px'}}>
        <h2 style={{fontSize: '3rem'}}>Our Lastest Courses</h2>
        <p style={{paddingBlock: '2rem'}}>
          Happi Travel is regulated Happi Group of companies aiming travel to
          Europea countries
        </p>
      </div>
      <div className="project__card">
        <Carousel responsive={responsive}>
          <div className="card card-shadow">
            <div className="card-img">
              <img src={img} alt="bag" />
            </div>
            <div className="card-header">
              <h4>head</h4>
              <h2 className="card__h4">Business Administration</h2>
              <p>
                Happi Travel is regulated Happi Group of companies aiming travel
                to Europea countries
              </p>
              <hr />
              <button>View More</button>
            </div>
          </div>

          <div className="card card-shadow">
            <div className="card-img">
              <img src={img} alt="bag" />
            </div>
            <div className="card-header">
              <h4>head</h4>
              <h2 className="card__h4">Business Administration</h2>
              <p>
                Happi Travel is regulated Happi Group of companies aiming travel
                to Europea countries
              </p>
              <hr />
              <button>View More</button>
            </div>
          </div>

          <div className="card card-shadow">
            <div className="card-img">
              <img src={img} alt="bag" />
            </div>
            <div className="card-header">
              <h4>head</h4>
              <h2 className="card__h4">Business Administration</h2>
              <p>
                Happi Travel is regulated Happi Group of companies aiming travel
                to Europea countries
              </p>
              <hr />
              <button>View More</button>
            </div>
          </div>

          <div className="card card-shadow">
            <div className="card-img">
              <img src={img} alt="bag" />
            </div>
            <div className="card-header">
              <h4>head</h4>
              <h2 className="card__h4">Business Administration</h2>
              <p>
                Happi Travel is regulated Happi Group of companies aiming travel
                to Europea countries
              </p>
              <hr />
              <button>View More</button>
            </div>
          </div>

          <div className="card card-shadow">
            <div className="card-img">
              <img src={img} alt="bag" />
            </div>
            <div className="card-header">
              <h4>head</h4>
              <h2 className="card__h4">Business Administration</h2>
              <p>
                Happi Travel is regulated Happi Group of companies aiming travel
                to Europea countries
              </p>
              <hr />
              <button>View More</button>
            </div>
          </div>

          <div className="card card-shadow">
            <div className="card-img">
              <img src={img} alt="bag" />
            </div>
            <div className="card-header">
              <h4>head</h4>
              <h2 className="card__h4">Business Administration</h2>
              <p>
                Happi Travel is regulated Happi Group of companies aiming travel
                to Europea countries
              </p>
              <hr />
              <button>View More</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
