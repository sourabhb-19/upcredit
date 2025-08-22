import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Faq, GetFinancial } from "../../../components";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";

export default function HelpAndSupport (){
    const cardData = [
        {
            title: "How To Use Upcredit: Step-by-Step Guide",
            desc: "If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make ...",
            link: "#!",
        },
        {
            title: "How Much Does It Cost to Use Sprint Mail to Send My Upcredit Attack Letters?",
            desc: "If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make ...",
            link: "#!",
        },
        {
            title: "What to Expect After Sending Your Upcredit Attack",
            desc: "Improving your credit is not easy, but you’re not alone in this journey. Many people just like you have faced ...",
            link: "#!",
        },
        {
            title: "How to Check Your Sprint Mail Order Status",
            desc: "If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make ...",
            link: "#!",
        },
        {
            title: "How Do I Update My Beast Credit Monitoring Information In Upcredit?",
            desc: "If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make ...",
            link: "#!",
        },
    ];
    
    return(
        <>
            <main className="helpandSupport">
                {/* banner */}
                <section className="innerBanner innerBanner-helpandsupport d-flex align-items-center justify-content-center" >
                    <Container className="h-100"    >
                        <div className="commonHeading zindex-1 position-relative text-center mb-0">
                            <h1 className="commonHeading_title">How can we <span>help you?</span></h1>
                            <p className="commonHeading_cnt text-white mb-3">Get in touch with our Upcredit support team with any <br /> credit questions you may have.</p>
                        </div>
                    </Container>
                </section>
                {/* info cards */}
                <section className="info py-60">
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div className="infoCard text-center">
                                    <em className="bi bi-chat-left-dots"></em>
                                    <div className="infoCard_title fw-bold mt-1">Upcredit Support</div>
                                    <p className="mt-1 mb-3">Need assistance or have a question? Our Help & Support section is designed to provide you with the resources you need. Find answers to frequently asked questions, access helpful guides, and get in touch with our support team.</p>
                                    <Link to={frontendRouteMap.CONTACTUS.path} className="btn btn-primary">Contact Support</Link>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="infoCard text-center">
                                    <em className="bi bi-people"></em>
                                    <div className="infoCard_title fw-bold mt-1">Partner with Upcredit</div>
                                    <p className="mt-1 mb-3">Whether you need assistance with our products, require technical support, we’re here to help. Explore partnership opportunities with us to create meaningful connections and unlock mutual growth with <strong>AI</strong>.</p>
                                    <Link to="#!" className="btn btn-primary">Comming Soon</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* credit gudies */}
                <section className="creditGuides bg-light py-60">
                    <Container>
                        <div className="commonHeading text-center">
                            <h2 className="commonHeading_title text-dark">Need more help? Read our popular <br className="d-none d-md-block" /> <span>Credit step-by-step</span> guides</h2>
                        </div>
                        <Row className="g-0">
                            {cardData.map((item, index) => (
                                <Col md={6} key={index} >
                                    <div
                                    className={`h-100 creditGuides_card`}
                                    style={{
                                        backgroundColor: (index === 1 || index === 2) ? "#f0f4ff" : "#fff",
                                    }}
                                    >
                                    <div className="title fw-bold">{item.title}</div>
                                    <p>{item.desc}</p>
                                    <Link href={item.link} className="d-flex align-items-center link-primary">
                                        Read More <em className="bi bi-arrow-right"></em>
                                    </Link>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                {/* faq */}
                <Faq/>
                {/* contact us */}
                <section className="contactUs">
                    <Container>
                        <div className="contactUs_wrap py-60 px-4">
                            <div className="commonHeading mb-2">
                                <h2 className="commonHeading_title">Get a hold of <span>our team</span></h2>
                                <p className="text-white">Have any other questions? Contact us directly below.</p>
                            </div>
                            <ul className="list-unstyled">
                                <li><em className="bi bi-building me-1"></em> 300 Delaware Ave. Suite 210 #503 Wilmington, DE, 19801</li>
                                <li><em className="bi bi-phone me-1"></em> 844-786-8060</li>
                            </ul>
                            <Link className="btn btn-primary mt-3">Contact support</Link>
                        </div>
                    </Container>
                </section>
                {/* get financial feture */}
                <GetFinancial/>
            </main>
        </>
    )
}