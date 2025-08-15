import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";
import { Link } from "react-router-dom";
import { Image } from "../../../components/CommonElement";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import CreditScore from "./CreditScore";
import MoneyBack from "./MoneyBack";
import FinancialFeture from "./FinancialFeture";
import Blog from "./Blog";


function UserHome() {
    // video modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // reviews data 
    const reviewsData = [
        {
            text: `"I’m amazed with the service provided to me, I’m shocked!! Glad I made the move!"`,
            image: "4.png",
            name: "Rose",
            time: "2 days ago",
            rating: 4.5,
        },
        {
            text: `"The Beast is a BEAST true to they Word i am a witness my score went from 484 to 605 In 30 days exact that was my first Attack!! Honesty the second Attack will tell All stay tuned"`,
            image: "1.png",
            name: "James",
            time: "3 days ago",
            rating: 3.5,
        },
        {
            text: `"I am a witness my score went from 484 to 605 In 30 days exact that was my first Attack!! Honesty the second Attack will tell All stay tuned"`,
            image: "5.png",
            name: "Lili",
            time: "8 days ago",
            rating: 3.5,
        },
        {
            text: `"Wow! I am so impressed, shocked and lost for words(Happy I am🤗). Beast dispute letters of attack are awesome!"`,
            image: "3.png",
            name: "David",
            time: "12 days ago",
            rating: 3.5,
        },
        ];


   

    return (
        <>
            <main className="homePage">
                {/* banner  */}
                <section className="banner py-60">
                    <div className="bannerContent text-center zindex-1 position-relative my-auto h-100">
                        <Container className="h-100"    >
                            <Row className="align-items-center justify-content-center h-100">
                                <div className="col-lg-10 col-md-10 col-sm-12 align-items-center ">
                                    <h1 className="bannerTitle text-white fw-bold">The <span className="text-primary">most advanced AI</span> Financial app ever created</h1>
                                    <p className="bannerSubtitle text-white py-3">Your ultimate DIY Credit dispute assistant tool with a 110% Money-back guarantee.</p>
                                    <div className="d-flex align-items-center justify-content-center gap-3">
                                        <Link to={frontendRouteMap.SIGNUP.path} className='btn btn-primary'>Get started</Link>
                                        <div role="button" className="bannerVideo" onClick={handleShow}><em className="bi bi-play-circle-fill"></em> Watch video</div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </section>
                {/* Struggle */}
                <section className="struggle py-60">
                    <Container>
                        <Row className="gx-5 align-items-center">
                            <Col lg={5}>
                                <Image source="home/struggle.jpg" alt="struggle" className="img-fluid rounded-2 " imageFor="frontend" />    
                            </Col>
                            <Col lg={7}>
                                <div className="commonHeading mb-4">
                                    <h2 className="commonHeading_title text-dark">Millions endure a <span>struggle due to poor credit scores</span>, you can avoid that</h2>
                                    <p className="commonHeading_cnt">Navigating the financial turbulence caused by financial issues can feel like an uphill battle, but it doesn’t have to be that way.</p>
                                </div>
                                <Link to={frontendRouteMap.SIGNUP.path} className='btn btn-primary'>Get started</Link>
                            </Col>
                        </Row>
                        <Row className="g-4 mt-4">
                            <Col md={4}>
                                <div className="struggle_card text-center mx-auto">
                                    <em className="bi bi-graph-down-arrow"></em>
                                    <p>"What? Why did my credit score go down?"</p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="struggle_card text-center mx-auto">
                                    <em className="bi bi-credit-card"></em>
                                    <p>"I am just not able to get rid of this interest on my card!"</p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="struggle_card text-center mx-auto">
                                    <em className="bi bi-graph-down-arrow"></em>
                                    <p>"Why can't I get an increase on my credit limit?"</p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="struggle_card text-center mx-auto">
                                    <em className="bi bi-house"></em>
                                    <p>"It's been months and I just can't get approved for my new home."</p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="struggle_card text-center mx-auto">
                                    <em className="bi bi-graph-down-arrow"></em>
                                    <p>"I just can't catch a break with all of this interest piling up on me."</p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="struggle_card text-center mx-auto">
                                    <em className="bi bi-graph-down-arrow"></em>
                                    <p>"Where did all these negative accounts come from?"</p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </section>
                {/* Financial health */}
                <section className="financialHealth py-60 bg-light">
                    <Container> 
                        <div className="commonHeading text-center">
                            <h2 className="commonHeading_title text-dark">
                                Equipping you with the ability to <br /> take full control of <span>your Financial health</span>
                            </h2>
                            <p className="commonHeading_cnt">At Dispute Beast, we aim to be more than just another app. We strive to become <br /> your trusted partner in your pocket, dedicated to improving your financial well-being.</p>
                        </div>
                        <div className="financialHealth_fullsec d-flex align-items-center justify-content-between gap-4">
                            <h2 className="text-white mb-0">AI that helps you take control of your Credit & financial future</h2>
                            <Image source="home/credit-report.webp" alt="Credit report" className="img-fluid" imageFor="frontend" />
                        </div>
                        <Row className="mt-4">
                            <Col md={6}>
                                <div className="financialHealth_card text-center">
                                    <div className="text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="80" height="80" x="0" y="0" viewBox="0 0 30 30"  xmlSpace="preserve" ><g><path d="M25.748 19.035c.98-.004.981-1.496 0-1.5h-1.867c-.98.004-.981 1.496 0 1.5zM15.765 9.414V7.553a.75.75 0 0 0-1.5 0v1.861c.005.98 1.496.981 1.5 0zM8.22 12.546c.694.668 1.729-.365 1.061-1.06l-1.319-1.32c-.696-.69-1.752.364-1.061 1.061l1.319 1.319zM4.282 17.535c-.98.004-.981 1.496 0 1.5h1.867c.98-.004.981-1.496 0-1.5zM12.835 20.466a3.088 3.088 0 0 0 4.36 0c.994-1.078 3.701-6.411 4.182-7.631.133-.565-.486-1.056-1.009-.827-.077.016-1.933.92-3.849 1.906-2.702 1.166-6.368 3.348-3.684 6.552zm1.06-3.3c1.537-1.166 3.421-1.967 5.107-2.831a37.917 37.917 0 0 1-2.867 5.07 1.584 1.584 0 0 1-2.239-2.239z" fill="currentcolor" opacity="1" data-original="currentcolor" ></path><path d="M22.892 5.809C11.667-1.363-2.763 9.311.777 22.127c.258.961 1.711.568 1.448-.391-3.912-17.15 20.328-23.694 25.582-6.913A13.246 13.246 0 0 1 26.434 25H3.176c-.973 0-.986 1.497 0 1.5h23.679a.752.752 0 0 0 .634-.349c4.348-6.886 2.29-15.994-4.597-20.342z" fill="currentcolor" opacity="1" data-original="currentcolor" ></path></g></svg>                                        
                                    </div>
                                    <h3 className="mt-4">Financial overview & Scores from all 3 Bureaus</h3>
                                    <p className="mb-0">Cost should never be a barrier when it comes to improving personal financial health, and we stand by this.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                            <div className="financialHealth_card text-center">
                                <div className="text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="80" height="80" x="0" y="0" viewBox="0 0 512.009 512.009"  xmlSpace="preserve" ><g><path d="M495.617 367.387H436.84V172.604c0-9.052-7.331-16.383-16.383-16.383s-16.392 7.331-16.392 16.383V387c0 9.185-9.144 16.947-20.024 17.08-.095-.002-.186-.014-.281-.014-.178 0-.351.021-.528.027h-62.816c-.177-.006-.349-.027-.528-.027s-.351.021-.528.027h-62.834c-.177-.006-.349-.027-.527-.027s-.35.021-.527.027h-62.826c-.177-.006-.349-.027-.527-.027s-.35.021-.527.027h-62.826c-.177-.006-.349-.027-.527-.027-.095 0-.187.013-.281.014-10.889-.133-20.024-7.895-20.024-17.08V125.045c0-9.265 9.301-17.093 20.305-17.093H383.76c11.005 0 20.305 7.828 20.305 17.093v3.213c0 9.052 7.339 16.383 16.392 16.383h75.16c9.052 0 16.392-7.331 16.392-16.383s-7.339-16.383-16.392-16.383h-60.659c-4.723-16.174-17.922-29.08-34.807-34.244V25.612c0-9.052-7.339-16.383-16.392-16.383-9.052 0-16.383 7.331-16.383 16.383v49.574H336.27V25.612c0-9.052-7.331-16.383-16.383-16.383s-16.392 7.331-16.392 16.383v49.574H272.38V25.612c0-9.052-7.339-16.383-16.383-16.383s-16.383 7.331-16.383 16.383v49.574h-31.115V25.612c0-9.052-7.339-16.383-16.383-16.383s-16.383 7.331-16.383 16.383v49.574h-31.115V25.612c0-9.052-7.331-16.383-16.383-16.383s-16.383 7.331-16.383 16.383v52.016c-16.884 5.16-30.073 18.065-34.795 34.238H16.383C7.339 111.866 0 119.196 0 128.249c0 9.052 7.339 16.383 16.383 16.383h58.786v222.755H16.383C7.339 367.387 0 374.717 0 383.769c0 9.052 7.339 16.383 16.383 16.383H77.06c4.721 16.173 17.91 29.083 34.796 34.246v51.999c0 9.052 7.331 16.383 16.383 16.383 9.043 0 16.383-7.331 16.383-16.383V436.84h31.115v49.556c0 9.052 7.331 16.383 16.383 16.383 9.043 0 16.383-7.331 16.383-16.383V436.84h31.115v49.556c0 9.052 7.331 16.383 16.383 16.383s16.383-7.331 16.383-16.383V436.84h31.115v49.556c0 9.052 7.339 16.383 16.392 16.383 9.043 0 16.383-7.331 16.383-16.383V436.84h31.106v49.556c0 9.052 7.331 16.383 16.383 16.383s16.392-7.331 16.392-16.383v-52c16.886-5.163 30.073-18.071 34.795-34.244h60.67c9.043 0 16.392-7.331 16.392-16.383-.003-9.052-7.343-16.382-16.395-16.382z" fill="currentcolor" opacity="1" data-original="currentcolor" ></path><path d="M495.617 303.506h-31.771c-9.052 0-16.383 7.331-16.383 16.383s7.331 16.383 16.383 16.383h31.771c9.043 0 16.392-7.331 16.392-16.383s-7.34-16.383-16.392-16.383zM495.617 239.617h-31.771c-9.052 0-16.383 7.331-16.383 16.383s7.331 16.383 16.383 16.383h31.771c9.043 0 16.392-7.331 16.392-16.383s-7.34-16.383-16.392-16.383zM495.617 175.737h-31.771c-9.052 0-16.383 7.331-16.383 16.383s7.331 16.383 16.383 16.383h31.771c9.043 0 16.392-7.331 16.392-16.383s-7.34-16.383-16.392-16.383zM16.383 336.272h31.78c9.043 0 16.383-7.331 16.383-16.383s-7.331-16.383-16.383-16.383h-31.78C7.339 303.506 0 310.846 0 319.889s7.339 16.383 16.383 16.383zM16.383 272.383h31.78c9.043 0 16.383-7.322 16.383-16.374s-7.331-16.383-16.383-16.383h-31.78C7.339 239.626 0 246.965 0 256.009c0 9.043 7.339 16.374 16.383 16.374zM16.383 208.503h31.78c9.043 0 16.383-7.331 16.383-16.383s-7.331-16.383-16.383-16.383h-31.78C7.339 175.737 0 183.068 0 192.12s7.339 16.383 16.383 16.383zM203.08 170.27a16.373 16.373 0 0 0-15.265 10.428l-54.091 138.703c-3.284 8.44.879 17.936 9.31 21.219 8.44 3.284 17.936-.887 21.219-9.31l8.583-22.009h60.488l8.583 22.009c2.52 6.479 8.706 10.437 15.264 10.437 1.979 0 3.994-.364 5.955-1.127 8.422-3.284 12.602-12.788 9.31-21.219l-54.091-138.703a16.382 16.382 0 0 0-15.265-10.428zm-17.467 106.266 17.467-44.791 17.467 44.791h-34.934zM348.723 203.036c9.043 0 16.392-7.331 16.392-16.383s-7.339-16.383-16.392-16.383H302.85c-9.052 0-16.383 7.331-16.383 16.383s7.331 16.383 16.383 16.383h6.55v105.946h-6.55c-9.052 0-16.383 7.331-16.383 16.383s7.331 16.383 16.383 16.383h45.873c9.043 0 16.392-7.331 16.392-16.383s-7.339-16.383-16.392-16.383h-6.541V203.036h6.541z" fill="currentcolor" opacity="1" data-original="currentcolor" ></path></g></svg>
                                </div>
                                <h3 className="mt-4">AI Disputing Engine that does the hard work for you</h3>
                                <p className="mb-0">Our AI engine reviews and highlights the negative items in your report, you’ll know what to attack.</p>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* reviews */}
                <section className="reviews py-60">
                    <Container>
                        <div className="commonHeading text-center">
                            <h2 className="commonHeading_title text-dark">Hear from our <span>users</span></h2>
                        </div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".arrow-next",
                                prevEl: ".arrow-prev",
                            }}
                            modules={[Navigation, Autoplay]}
                            className="reviews_slider"
                            >
                            {reviewsData.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="reviews_slide bg-white px-3 py-4 d-flex flex-column">
                                        <p>{review.text}</p>
                                        <div className="reviews_slide_bottom d-flex align-items-center justify-content-between mt-auto">
                                        <div className="profile d-flex align-items-center">
                                            <Image source={review.image} alt="user" imageFor="frontend" />
                                            <div className="profile_cnt">
                                            <div className="title">{review.name}</div>
                                            <div className="time">{review.time}</div>
                                            </div>
                                        </div>
                                        <div className="d-flex rating my-3">
                                            {Array.from({ length: 5 }).map((_, i) => {
                                            const isHalf = review.rating - i === 0.5;
                                            const isFull = review.rating - i >= 1;
                                            return (
                                                <span className="rating-icon" key={i}>
                                                <em
                                                    className={`bi ${
                                                    isFull
                                                        ? "bi-star-fill"
                                                        : isHalf
                                                        ? "bi-star-half"
                                                        : "bi-star"
                                                    }`}
                                                ></em>
                                                </span>
                                            );
                                            })}
                                        </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                                {/* Custom Arrows */}
                                <div className="arrow arrow-prev"><em className="bi bi-arrow-left"></em></div>
                                <div className="arrow arrow-next"><em className="bi bi-arrow-right"></em></div>
                        </Swiper>
                        <div className="text-center mt-2 mt-sm-3">
                            <Link to={'#!'} className="link-primary">See more people review </Link>
                        </div>
                    </Container>
                </section>
                {/* steps proces */}
                <section className="stepsProcess py-60">
                    <Container>
                        <div className="commonHeading text-center mb-5">
                            <h2 className="commonHeading_title">Start your <span>DIY process</span> in just 5 minutes</h2>
                            <p className="commonHeading_cnt mb-0 text-white">
                                When you’re enrolled with Beast Monitoring partner service, using Dispute Beast is entirely free to dispute letters. <br/> We’re offering an entirely new & automated disputing solution to improve your scores.
                            </p>
                            <Link to={frontendRouteMap.SIGNUP.path} className='btn btn-primary mt-3'>Get started</Link>
                        </div>
                        <Row className="align-items-center g-4 position-relative">
                            <Col md={6}>
                                <div className="stepsProcess_card pe-4">
                                    <div className="number">1</div>
                                    <h3>Sign up for Monitoring & get your Free Dispute Beast account</h3>
                                    <p>All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $49.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="stepsProcess_card ps-4">
                                    <div className="number">2</div>
                                    <h3>Sign up for Monitoring & get your Free Dispute Beast account</h3>
                                    <p>All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $49.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="stepsProcess_card pe-4">
                                    <div className="number">3</div>
                                    <h3>Sign up for Monitoring & get your Free Dispute Beast account</h3>
                                    <p>All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $49.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="stepsProcess_card ps-4">
                                    <div className="number">4</div>
                                    <h3>Sign up for Monitoring & get your Free Dispute Beast account</h3>
                                    <p>All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $49.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* creadit score */}
                <CreditScore/>
                {/* money back */}
                <MoneyBack/>
                {/* financial feture */}
                <FinancialFeture/>
                {/* blog */}
                <Blog/>
            </main>

            {/* video */}
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="videoModal">
                <Modal.Header  className="bg-transparent pb-1 pe-0">
                    <button type="button" className="close bg-transparent border-0 ms-auto text-white p-0" onClick={handleClose} aria-label="Close">
                        <em className="bi bi-x"></em>
                    </button>
                </Modal.Header>
                <Modal.Body className="p-0" bg="transparent">
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/nB8JOUEsQVs"  frameBorder="0"  allowfullscreen></iframe>
                </Modal.Body>
                
            </Modal>
        </>
    );
}   

export default UserHome;