import React from 'react'
import aboutImg from '../images/about.png';


const Home = () => {
    return (
        <div>
            
            <section className="home-bg">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="m-2 text-content py-5 text-center" style={{position:'relative',top:'150px'}}>
                        <h5 className='text-white '>Feast at Your Fingertips</h5>
                        <h2 className="text-white primary-heading aos-init aos-animate" data-aos="fade-up" style={{fontSize:'3rem'}}>Discover Delightful Dining with Our Online Food Delivery App</h2>
                        <p className="text-white aos-init aos-animate" data-aos="fade-up">
                            Food Munch Restaurant. Developed a responsive website for Food Store.<br/>
                             where users can see a list of food items, detailed information about a food item, and offers.
                        </p>
                        <div className="d-flex justify-content-center">
                            <div>
                                <a href="/sign-up" data-aos="fade-up" className="btn btn-outline-light rounded-pill px-3 py-2 aos-init aos-animate">Registe
                                    Now</a>
                            </div>
                            <div className="mx-2">
                                <a href="/login" data-aos="fade-up" className="btn btn-outline-light rounded-pill px-3 py-2 aos-init aos-animate">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
           
           
         

        </div>
    )
}


export default Home;