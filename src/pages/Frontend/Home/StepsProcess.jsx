import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";

export default function StepsProcess(){
    const steps = [
        {
        number: 1,
        title: "Sign up for Monitoring & get your Free Dispute Beast account",
        desc: "All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $49.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status."
        },
        {
        number: 2,
        title: "Sign up for Monitoring & get your Free Dispute Beast account",
        desc: "All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $49.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status."
        },
        {
        number: 3,
        title: "Sign up for Monitoring & get your Free Dispute Beast account",
        desc: "All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $49.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status."
        },
        {
        number: 4,
        title: "Sign up for Monitoring & get your Free Dispute Beast account",
        desc: "All you need is active Beast Monitoring, the rest is on us. Monitoring is a monthly subscription that costs $49.99, and provides you with advanced 3-Bureau reports on your credit so you can have a better idea of your financial status."
        }
    ];
    return(
        <>
            <section className="stepsProcess py-60">
                <Container>
                    <div className="commonHeading text-center md-4 mb-md-5">
                        <h2 className="commonHeading_title">Start your <span>DIY process</span> in just 5 minutes</h2>
                        <p className="commonHeading_cnt mb-0 text-white">
                            When you’re enrolled with Beast Monitoring partner service, using Dispute Beast is entirely free to dispute letters. <br className="d-none d-md-block" /> We’re offering an entirely new & automated disputing solution to improve your scores.
                        </p>
                        <Link to={frontendRouteMap.SIGNUP.path} className='btn btn-primary mt-3'>Get started</Link>
                    </div>
                    <Row className="align-items-center g-4 position-relative">
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
        </>
    )
}