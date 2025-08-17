import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "../../../CommonElement";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="footer">
                <Container fluid >
                    <div className="footer-main">
                        <Row>
                            {/* Column 1 */}
                            <Col lg={3} sm={6} xs={12}>
                                <div className="widget widget-menu footer-col-block">
                                    <div className="footer-heading-desktop text-white">
                                        <h4>App Links</h4>
                                    </div>
                                    <ul className="list-unstyled box-menu tf-collapse-content">
                                        <li><Link to="#!">Log In</Link></li>
                                        <li><Link to="#!">Sign Up</Link></li>
                                        <li><Link to="#!">Help & Support</Link></li>
                                        <li><Link to="#!">Training</Link></li>
                                    </ul>
                                </div>
                            </Col>

                            {/* Column 2 */}
                            <Col lg={3} sm={6} xs={12}>
                                <div className="widget widget-menu footer-col-block">
                                    <div className="footer-heading-desktop text-white">
                                        <h4>Helpful Links</h4>
                                    </div>
                                    <ul className="list-unstyled box-menu tf-collapse-content">
                                        <li><Link to="#!">Pricing</Link></li>
                                        <li><Link to="#!">How It Works</Link></li>
                                        <li><Link to="#!">Reviews</Link></li>
                                        <li><Link to="#!">110% Money-Back Guarantee</Link></li>
                                        <li><Link to="#!">Blog</Link></li>
                                    </ul>
                                </div>
                            </Col>

                            {/* Column 3 */}
                            <Col lg={3} sm={6} xs={12}>
                                <div className="widget widget-menu footer-col-block">
                                    <div className="footer-heading-desktop text-white">
                                        <h4>Partner Links</h4>
                                    </div>
                                    <ul className="list-unstyled box-menu tf-collapse-content">
                                        <li><Link to="#!">Credit Monitoring Support</Link></li>
                                        <li><Link to="#!">Spring Mail Support</Link></li>
                                    </ul>
                                </div>
                            </Col>

                            {/* Column 4 */}
                            <Col lg={3} sm={6} xs={12}>
                                <div className="widget widget-menu widget-form footer-col-block">
                                    <div className="footer-heading-desktop text-white">
                                        <h4>Trusted by thousands</h4>
                                    </div>
                                    <Image
                                        source="logo-white.png"
                                        alt="Footer Logo"
                                        width="150"
                                        imageFor="frontend"
                                        className="img-fluid"
                                    />
                                    <div className="d-flex rating my-3">
                                        <span className="rating-icon"><em className="bi bi-star-fill"></em></span>
                                        <span className="rating-icon"><em className="bi bi-star-fill"></em></span>
                                        <span className="rating-icon"><em className="bi bi-star-fill"></em></span>
                                        <span className="rating-icon"><em className="bi bi-star-fill"></em></span>
                                        <span className="rating-icon"><em className="bi bi-star-half"></em></span>
                                    </div>
                                    <p className="text-grey">4.9 out of 5 based on 1000+ reviews</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="footer-bottom">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <p className=" mb-0">© {year} UPCREDIT. All rights reserved.</p>
                            <ul className="list-unstyled d-flex  mb-0">
                                <li className="mx-md-2 mx-1"><Link to="#!">Security</Link></li>
                                <li className="mx-md-2 mx-1"><Link to="#!">Privacy Policy</Link></li>
                                <li className="mx-md-2 mx-1"><Link to="#!">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}