import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";
import { Image } from "../../../components/CommonElement";

export default function Struggle(){
    const score =[
        {
            icon:"bi bi-graph-down-arrow",
            des:"What? Why did my credit score go down?"
        },
        {
            icon:"bi bi-credit-card",
            des:"I am just not able to get rid of this interest on my card!"
        },
        {
            icon:"bi bi-graph-down-arrow",
            des:"Why cant I get an increase on my credit limit?"
        },
        {
            icon:"bi bi-house",
            des:"Its been months and I just cant get approved for my new home."
        },
        {
            icon:"bi bi-graph-down-arrow",
            des:"I just cant catch a break with all of this interest piling up on me."
        },
        {
            icon:"bi bi-graph-down-arrow",
            des:'Where did all these negative accounts come from?'
        }
    ]
    return(
        <>
            <section className="struggle py-60">
                <Container>
                    <Row className="gx-3 gx-xl-5 align-items-lg-center">
                        <Col md={5} data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
                            <Image source="home/struggle.jpg" alt="struggle" className="img-fluid rounded-2 " imageFor="frontend" />    
                        </Col>
                        <Col md={7} data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
                            <div className="commonHeading mt-3 mt-md-0 mb-lg-4">
                                <h2 className="commonHeading_title text-dark">Millions endure a <span>struggle due to poor credit scores</span>, you can avoid that</h2>
                                <p className="commonHeading_cnt">Navigating the financial turbulence caused by financial issues can feel like an uphill battle, but it doesn’t have to be that way.</p>
                            </div>
                            <Link to={frontendRouteMap.SIGNUP.path} className='btn btn-primary'>Get started</Link>
                        </Col>
                    </Row>
                    <Row className="g-3 g-lg-4 mt-2 mt-lg-4" data-aos="fade-up" data-aos-delay="00" data-aos-duration="800" data-aos-easing="linear">
                        {
                            score.map((item, index)=> (
                                <Col sm={3} md={4} key={index}>
                                    <div className="struggle_card text-center mx-auto">
                                        <em className={item.icon}></em>
                                        <p>"{item.des}"</p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}