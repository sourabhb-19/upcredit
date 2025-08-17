import { Col, Container, Row } from "react-bootstrap";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";
import { Link } from "react-router-dom";

export default function Banner ({handleShow}){
    return(
        <>
            <section className="banner py-60">
                <div className="bannerContent text-center zindex-1 position-relative my-auto h-100">
                    <Container className="h-100"    >
                        <Row className="align-items-center justify-content-center h-100">
                            <Col sm={12} md={10} className="align-items-center ">
                                <h1 className="bannerTitle text-white fw-bold">The <span className="text-primary">most advanced AI</span> <br className="d-none d-sm-block" /> Financial app ever created</h1>
                                <p className="bannerSubtitle text-white py-2 py-xl-3">Your ultimate DIY Credit dispute assistant tool with a 110% Money-back guarantee.</p>
                                <div className="d-flex align-items-center justify-content-center gap-3">
                                    <Link to={frontendRouteMap.SIGNUP.path} className='btn btn-primary'>Get started</Link>
                                    <div role="button" className="bannerVideo" onClick={handleShow}><em className="bi bi-play-circle-fill"></em> Watch video</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}