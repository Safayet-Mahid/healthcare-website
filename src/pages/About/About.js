import React from 'react';
import { Accordion } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='about container mx-auto my-5' >

            <div className='row justify-content-center'>
                <div className="about-image  col-sm-12 col-md-10 col-lg-6">
                    <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                <div className="about-accordian col-sm-12 col-md-10 col-lg-6">
                    <h3 className='text-center mt-md-5' >About MEDICENTER</h3>
                    <p className='my-4'>Personalized patient care is what sets MEDICENTER apart. When you visit us you can expect to receive world class care. Expert physician specialists and caring clinical staff provide you with an exceptional health care experience.</p>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><span className='fw-bold'>WHY CHOOSE US?</span></Accordion.Header>
                            <Accordion.Body>
                                We now hope with the co-operation of the Doctors Community this new generation cardiac Center & Neurosurgery Hospital will be able to provide world class services. Due to rapid increase of cardiac and neurology patients in Bangladesh resulting from socio-economic changes and liberal food habit, treating patients within the country saving cost and foreign currency is a crying need of the nation. MMC has a farsighted vision of reaching the most with utmost sincerity at heart.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className='fw-bold'>WHAT WE DO?</span></Accordion.Header>
                            <Accordion.Body>
                                We now hope with the co-operation of the Doctors Community this new generation cardiac Center & Neurosurgery Hospital will be able to provide world class services. Due to rapid increase of cardiac and neurology patients in Bangladesh resulting from socio-economic changes and liberal food habit, treating patients within the country saving cost and foreign currency is a crying need of the nation. MMC has a farsighted vision of reaching the most with utmost sincerity at heart.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><span className='fw-bold'>OFFER SERVICES</span></Accordion.Header>
                            <Accordion.Body>
                                We now hope with the co-operation of the Doctors Community this new generation cardiac Center & Neurosurgery Hospital will be able to provide world class services. Due to rapid increase of cardiac and neurology patients in Bangladesh resulting from socio-economic changes and liberal food habit, treating patients within the country saving cost and foreign currency is a crying need of the nation. MMC has a farsighted vision of reaching the most with utmost sincerity at heart.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>

    );
};

export default About;