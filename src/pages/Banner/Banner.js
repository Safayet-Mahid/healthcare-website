import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner '>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://onlinepharmacymart.com/wp-content/uploads/2019/07/Specialists-Secrets.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='banner-title'>The New Way to Healthy Life</h3>
                        <p className='w-75 mx-auto'>Think you're leading a healthy lifestyle? Aside from occasionally veering off the path, most of us think we do a fair job of maintaining our health with good (or at least OK) eating habits and physical activity whenever we manage to fit it in. But is that enough to be considered "healthy?"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://images.squarespace-cdn.com/content/v1/57be42e42994ca630afe691d/1507036379768-S3AM4V7X0E2YRRMY2V69/North+York+Doctors+Home.jpg?format=1500w"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'>The New Way to Treatment</h3>
                        <p className='w-75 mx-auto'>Today, doctors and nurses use handheld devices to record patients' real-time data and instantly update their medical history. This makes more accurate and more efficient diagnoses and treatments.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://1.bp.blogspot.com/-MJcKrnaAHW0/X48O5kaEjmI/AAAAAAACf6k/7e5qP6hoERIrv9os2GE9XdlwZ6zZ6S94ACLcBGAsYHQ/s0/the-good-doctor-episode-401-frontline-part-1-promotional-photo.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'>The New Way to Diagonastic</h3>
                        <p className='w-75 mx-auto'>The diagnostic process proceeds as follows: First, a patient experiences a health problem. The patient is likely the first person to consider his or her symptoms and may choose at this point to engage with the health care system.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;