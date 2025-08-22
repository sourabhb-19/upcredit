import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "../../../CommonElement";
import frontendRouteMap from "../../../../routes/Frontend/frontendRouteMap";

export function GetFinancial (){
    return(
        <>
            <section className="financialFeture bg-light py-60">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5} >
                            <div className="financialFeture_shape">
                                <Image source="home/disputebeast-aicreditrepair.webp" alt="Financial feture" className="img-fluid d-none d-md-block" imageFor="frontend" />
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="commonHeading mt-2 mt-md-0  mb-0">
                                <span className="financialFeture_tag">Rated 4.78 Stars by 1,700+ Users</span>
                                <h2 className="commonHeading_title mt-3 text-dark">Get your <span>financial future</span> secured with Upcredit</h2>
                                <p className="commonHeading_cnt ">Take the first step towards a better financial future today. You deserve financial freedom because you’re more than a credit score and Upcredit is here to help you achieve it.</p>
                                <Link to={frontendRouteMap.SIGNUP.path} className="btn btn-primary mt-4">Get Started</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}