import { Col, Container, Row } from "react-bootstrap";
import { Image } from "../../../components/CommonElement";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";

export default function FinancialFeture (){
    return(
        <>
            <section className="financialFeture py-60">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <Image source="home/disputebeast-aicreditrepair.webp" alt="Financial feture" className="img-fluid" imageFor="frontend" />
                        </Col>
                        <Col lg={7}>
                            <div className="commonHeading  mb-0">
                                <span className="financialFeture_tag">Rated 4.78 Stars by 1,700+ Users</span>
                                <h2 className="commonHeading_title mt-3">Get your <span>financial future</span> secured with Dispute Beast</h2>
                                <p className="commonHeading_cnt text-white">Take the first step towards a better financial future today. You deserve financial freedom because you’re more than a credit score and Dispute Beast is here to help you achieve it.</p>
                                <Link to={frontendRouteMap.SIGNUP.path} className="btn btn-primary mt-4">Get Started</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}