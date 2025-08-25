import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Modal, Row } from "react-bootstrap";
import { GetFinancial, Input } from "../../../components/Frontend";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";

export default function Training (){

    // video modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    const steps = [
        {
        number: 1,
        title: "Sign up for Monitoring & get your Free Upcredit account",
        desc: "All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $29.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status."
        },
        {
        number: 2,
        title: "Sign up for Monitoring & get your Free Upcredit account",
        desc: "All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $29.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status."
        },
        {
        number: 3,
        title: "Sign up for Monitoring & get your Free Upcredit account",
        desc: "All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $29.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status."
        },
        {
        number: 4,
        title: "Sign up for Monitoring & get your Free Upcredit account",
        desc: "All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $29.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status."
        }
    ];

    return(
        <>
            <main className="training">
                {/* banner */}
                <section className="innerBanner innerBanner-training d-flex align-items-center justify-content-center" >
                    <Container className="h-100"    >
                        <div className="commonHeading zindex-1 position-relative text-center">
                            <h1 className="commonHeading_title">How to use <span>Upcredit</span></h1>
                            <p className="commonHeading_cnt text-white">Sign up for our in-depth live app training. We offer trainings multiple times a week, <br className="d-none d-md-block" /> sign up below to help you get started!</p>
                            <div role="button" className="innerBanner_video d-inline-block mt-3" onClick={handleShow}><em className="bi bi-play-circle-fill"></em> Watch video</div>
                        </div>
                    </Container>
                </section>
                {/* next training */}
                <section className="nextTraining py-60">
                    <Container>
                        <div className="commonHeading text-center">
                            <h2 className="commonHeading_title text-dark">Don't miss out on the <span>next Training!</span></h2>
                            <p className="commonHeading_cnt">Be the first to unlock expert insights and powerful tools with Upcredit. Sign up below to get notified about <br className="d-none d-lg-block" />  our next live app training and take one step closer to mastering your credit journey.</p>
                        </div>
                        <div className="nextTraining_wrap mx-auto">
                            <Row className="gx-3">
                                <Col xs={12} md={6}>
                                    <FormGroup className="form-group">
                                        <div className="form-label-group">
                                            <Form.Label>First Name</Form.Label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <Input type="text" placeholder="Enter first name" />
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FormGroup className="form-group">
                                        <div className="form-label-group">
                                            <Form.Label>Last Name</Form.Label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <Input type="text" placeholder="Enter last name" />
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FormGroup className="form-group">
                                        <div className="form-label-group">
                                            <Form.Label>Email</Form.Label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <Input type="text" placeholder="Enter email" />
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FormGroup className="form-group">
                                        <div className="form-label-group">
                                            <Form.Label>Phone</Form.Label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <Input type="text" placeholder="Enter phone" />
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <div className="form-group">
                                <Form.Check 
                                    type="checkbox" 
                                    label="I agree to the Upcredit privacy policy, and I agree to be contacted by email or phone with marketing communication and materials." 
                                    name="agree"
                                    className="text-4"
                                    id="agreeCheck"
                                />
                            </div>
                            <div className="text-center">
                                <Button variant="primary" className="px-5">Sign up for the training</Button>
                            </div>
                        </div>
                    </Container>                        
                </section>
                {/* step process */}
                <section className="stepsProcess py-60">
                    <Container>
                        <div className="commonHeading text-center md-4 mb-md-5" data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
                            <h2 className="commonHeading_title">Start your <span>DIY process</span> in just 5 minutes</h2>
                            <p className="commonHeading_cnt mb-0 text-white">
                                When you’re enrolled with Beast Monitoring partner service, using Upcredit is entirely free to dispute letters. <br className="d-none d-lg-block" /> We’re offering an entirely new & automated disputing solution to improve your scores.
                            </p>
                            <Link to={frontendRouteMap.SIGNUP.path} className='btn btn-primary mt-3'>Get started</Link>
                        </div>
                        <Row className="align-items-center g-4 position-relative" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-easing="linear">
                            {steps.map((step, index) => (
                                <Col key={index} md={6}>
                                    <div className={`stepsProcess_card ${step.number % 2 === 0 ? "ps-4" : "pe-4"}`}>
                                        <div className="number">{step.number}</div>
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                {/* get financial feture */}
                <GetFinancial/>
            </main>

            {/* video */}
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="videoModal">
                <Modal.Header  className="bg-transparent pb-1 pe-0">
                    <button type="button" className="close bg-transparent border-0 ms-auto text-white p-0" onClick={handleClose} aria-label="Close">
                        <em className="bi bi-x"></em>
                    </button>
                </Modal.Header>
                <Modal.Body className="p-0" bg="transparent">
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/nB8JOUEsQVs"  frameBorder="0"  allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}