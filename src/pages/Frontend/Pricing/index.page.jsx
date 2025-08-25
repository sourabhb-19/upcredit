import { Col, Container, Row } from "react-bootstrap";
import { Image } from "../../../components/CommonElement";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { GetFinancial } from "../../../components";


export default function Pricing (){
    const features = [
        {
        icon: "bi bi-file-earmark-text",
        title: "Full Credit Breakdown",
        desc: "Get a detailed analysis of your credit report to identify areas for improvement with precision."
        },
        {
        icon: "bi bi-bezier",
        title: "AI Engine Disputing",
        desc: "Our AI curates precise verbiage to navigate credit disputes effectively with the bureaus and creditors."
        },
        {
        icon: "bi bi-envelope-paper",
        title: "Printing & Mailing Done For You",
        desc: "Effortless dispute process—we’ve partnered with Sprint Mail to print and mail all your credit dispute letters, saving you time and hassle."
        },
        {
        icon: "bi bi-file-earmark-x",
        title: "No Contracts – Cancel Anytime",
        desc: "Enjoy the freedom to better your credit with no strings attached—cancel our services at any time without penalty."
        },
    ];

    const cards = [
        {
            img: "home/secure.svg",
            alt: "secure",
            title: "Secure & Reliable",
            text: "Our platform holds the highest standards of security, and our customer support team is available 24/7 to assist you throughout the process.",
            delay:"300"
        },
        {
            img: "home/risk.svg",
            alt: "risk",
            title: "Risk-Free Process",
            text: "Built to deliver real results and confident in our product. If no changes occur, every payment you’ve made will be fully refunded.",
            delay:"400"
        },
        {
            img: "home/trusted.svg",
            alt: "trust",
            title: "Trust & Transparency",
            text: "We stand by the effectiveness of our service, which is why we offer the best guarantee in the credit repair industry.",
            delay:"600"
        },
    ];

    const core = [
        {
            "icon": "bi bi-people", 
            "title": "Open to Everyone",
            "description": "Upcredit is committed to ensuring that its credit analysis and disputing tools are easily accessible for everyone, irrespective of their technical or financial background. It is our goal to break down barriers in financial services, ensuring that solutions are inclusive and can be utilized by every consumer to manage their credit more effectively."
        },
        {
            "icon": "bi bi-book",
            "title": "Empowering & Educational",
            "description": "By providing comprehensive knowledge and tools for understanding and managing credit, Upcredit empowers consumers to make informed financial decisions. This commitment to financial literacy is a cornerstone of helping users lead a more affordable lifestyle through better credit management."
        },
        {
            "icon": "bi bi-shield-check",
            "title": "Transparency & Trust",
            "description": "Upcredit upholds a commitment to transparency in all its operations. This principle is fundamental in building trust with consumers, as it ensures clarity in how their credit information is analyzed and disputed, making the process understandable and secure. We are SOC Compliant."
        }
    ]

    const reviewsData =[
        {
            des:'After the 1st round, my score shot up over 220 points',
            name:'Jhon M',
            date: 'May 2025'
        },
        {
            des:'An absolute game-changer when it comes to resolving disputes.',
            name:'Ron L',
            date: 'April 2025'
        },
        {
            des:'I recommend this service to all friends and family. It really works!',
            name:'Remy A',
            date: 'April 2025'
        },
        {
            des:"The platform's user-friendly interface made it incredibly easy for me",
            name:'Irvin J',
            date: 'March 2025'
        },
    ]

    return(
        <>
            <main className="pricing">
                {/* banner */}
                <section className="innerBanner innerBanner-pricing d-flex align-items-center justify-content-center" >
                    <Container className="h-100"    >
                        <div className="commonHeading zindex-1 position-relative text-center">
                            <h1 className="commonHeading_title">From bad credit to <br className="d-none d-md-block"/> <span>Beast credit</span></h1>
                            <p className="commonHeading_cnt text-white">Lorem Ipsum has been the industry's standard dummy text ever since <br className="d-none d-md-block" />  , scrambled it to make a type specimen book.</p>
                        </div>
                    </Container>
                </section>
                {/* credit monitoring */}
                <section className="creditMonitoring py-60 ">
                    <Container>
                        <div className="commonHeading text-center">
                            <h2 className="commonHeading_title text-dark">All you need is active <span>Credit Monitoring</span>, <br className="d-none d-md-block" /> the rest is on us, for Free.</h2>
                            <p className="commonHeading_cnt">Navigating the financial turbulence caused by credit issues can feel like an uphill battle, but it doesn’t have to be that way.</p>
                            <p className="commonHeading_cnt">Credit Monitoring is a monthly subscription that costs $29.99, and provides you with advanced reports on your credit so you can have a better idea of your financial status.</p>
                            <Link to={frontendRouteMap.SIGNUP.path} className='btn btn-primary mt-3'>Get started</Link>
                        </div>
                    </Container>
                    <Row className="row-cols-1 row-cols-lg-2 g-0">
                        <Col>
                            <Image source="credit-monitoring.jpg" alt="credit" className="img-fluid" imageFor="frontend" />
                        </Col>
                        <Col>
                            <div className="creditMonitoring_wrap h-100">
                                <h3>Having great credit shouldn’t be that hard, with the Beast it’s easy.</h3>
                                <p>Our proprietary Upcredit AI engine has processed over half a million letters to dispute items on consumer’s accounts.</p>
                                 <div className="feature mt-4">
                                    {features.map((item, index) => (
                                        <div className="feature-box  d-flex align-items-center" key={index}>
                                            <div className="icon">
                                                <em className={item.icon}></em>
                                            </div>
                                            <div>
                                            <h5 className="feature-title">{item.title}</h5>
                                            <p className="feature-desc">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>  
                            </div>
                        </Col>
                    </Row>
                </section>
                {/*  Upcredit */}
                <section className="disputeBeast">
                    <Container>
                        <div className="commonHeading text-center">
                            <h2 className="commonHeading_title text-dark">What you get with <span>Upcredit</span></h2>
                        </div>
                        <Row className="g-4">
                            {features.map((item, index) => (
                                <Col sm={6} md={3} key={index}>
                                    <div className="feature-box feature-card  text-center h-100">
                                        <div className="icon bg-transparent text-primary w-auto h-auto">
                                            <em className={item.icon}></em>
                                        </div>
                                        <div>
                                        <h5 className="feature-title">{item.title}</h5>
                                        <p className="feature-desc">{item.desc}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                {/* credit score */}
                <section className="creditScore">
                    <Container>
                        <div className="creditScore_wrap text-center d-flex flex-column justify-content-center px-2">
                            <div className="commonHeading zindex-1 position-relative mb-0 py-2 py-md-0 px-2 px-md-3 px-lg-5">
                                <Image source="beast-credit-monitoring-logo.webp" width="150"  imageFor="frontend" alt="Beast credit monitoring" className="img-fluid zIndex-2" />
                                <h2 className="commonHeading_title mt-3 mb-4"><span>Credit Monitoring </span>services <br className="d-none d-lg-block" /> offered by our partner(s):</h2>
                                <p className="commonHeading_cnt text-white mb-3">
                                    Credit Monitoring is a monthly subscription that costs $29.99/m, and provides you with advanced 3B reports on your credit so you can have a better idea of your financial status. Navigating the financial turbulence caused by credit issues can feel like an uphill battle, but it doesn’t have to be that way.
                                </p> 
                                <Link to="https://www.beastcreditmonitoring.com/?_ics=1755580362316&im_ref=~c87-87Z6Y50VWSXZ23S0QHICyqnof9eb6~4UVKLFvrjf~0YSNIFw&_gl=1*11jqpbg*_ga*Nzc1NjY0MDIyLjE3NTQ1NTMzODg.*_ga_32W1FZHBGJ*czE3NTU1ODAzNTYkbzM1JGcxJHQxNzU1NTgwNDg5JGo2MCRsMCRoMjAyMjQ2MzYyNA..*_ga_ER6GKD4LFR*czE3NTU1ODAzNTYkbzM1JGcxJHQxNzU1NTgwNDkwJGo2MCRsMCRoMTcwNTc1OTc1Mw..*_gcl_au*NDc5ODc4ODA2LjE3NTQ1NTMzODg" 
                                target="_blank" className="link-primary">Learn more about Beast Credit Monitoring</Link>
                            </div>
                        </div>
                    </Container>
                </section>
                {/* money back */}
                <section className="moneyBack py-60 pt-0">
                    <Container>
                        <div className="commonHeading text-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
                        <Image
                            source="home/money-back.png"
                            width="150"
                            alt="Money back"
                            imageFor="frontend"
                            className="img-fluid"
                        />
                        <h2 className="commonHeading_title text-dark">
                            Upcredit <span>100% Money-Back Guarantee</span>
                        </h2>
                        <p className="commonHeading_cnt">
                            We believe in the quality of our products. If you’re not satisfied,
                            we will return 100% (yes, 100!) <br className="d-none d-md-block" /> back of your money if Upcredit
                            doesn’t help you improve your credit after a year.
                        </p>
                        </div>
            
                        <Row className="text-center gy-3">
                        {cards.map((card, index) => (
                            <Col md={4} key={index}>
                            <div className="moneyBack_card" data-aos="fade-up" data-aos-delay={card.delay} data-aos-duration="800" data-aos-easing="linear">
                                <div className="icon mb-3">
                                <Image
                                    source={card.img}
                                    alt={card.alt}
                                    className="img-fluid"
                                    imageFor="frontend"
                                />
                                </div>
                                <h3>
                                <strong>{card.title}</strong>
                                </h3>
                                <p>{card.text}</p>
                            </div>
                            </Col>
                        ))}
                        </Row>
                    </Container>
                </section>
                {/* reviews */}
                <section className="reviews d-flex align-items-center py-60">
                    <Container>
                        <div className="reviews_wrap position-relative">
                            <Swiper
                                slidesPerView={1}
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
                                        <div className="reviews_slide text-center ">
                                            <em className="bi bi-quote"></em>
                                            <p>"{review.des}"</p>
                                            <div className="reviews_caption">
                                                <div className="title">{review.name}</div>
                                                <span>{review.date}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}                                   
                            </Swiper>
                             {/* Custom Arrows */}
                            <div className="arrow arrow-prev"><em className="bi bi-arrow-left"></em></div>
                            <div className="arrow arrow-next"><em className="bi bi-arrow-right"></em></div>
                        </div>
                    </Container>
                </section>
                {/* core principles */}
                <section className="corePrinciples py-60">
                    <Container>
                        <div className="commonHeading ">
                            <h2 className="commonHeading_title text-dark">Our three <span>core principles</span></h2>
                        </div>
                        <Row className="g-3">
                            {
                                core.map((item, index) => (
                                    <Col key={index} lg={4} className="divider">
                                        <em className={item.icon}></em>
                                        <div className="corePrinciples_title">{item.title}</div>
                                        <p className="mb-0">{item.description}</p>
                                    </Col>  
                                ))                                                          
                            }
                        </Row>
                    </Container>
                </section>
                {/* get financial feture */}
                <GetFinancial/>
            </main>
        </>
    )
}