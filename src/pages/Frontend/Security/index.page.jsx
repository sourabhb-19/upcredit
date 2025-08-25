import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "../../../components";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";

export default function Security() {
    const data = [
        {
            "title": "Protect your work",
            "des": "Dispute Beast takes a strong security based approach to protecting your data. We build our platform using best practices for highly available, scalable, and secure cloud applications."
        },
        {
            "title": "Security Infrastructure",
            "des": "Our approach to security starts at the foundational level and includes protocols such as password hashing, routine security assessments, least privilege access, security-focused software development."
        },
        {
            "title": "Uptime & Continuity",
            "des": "Together with a 99.9% uptime on our server, Dispute Beast’s infrastructure also provides daily backups, in order to have the ability to recover all work and data in the event of unavoidable failures."
        }
        ]

    return(
        <>
            <main className="securityPage">
                {/* banner */}
                <section className="innerBanner innerBanner-privacy d-flex align-items-center justify-content-center" >
                    <Container className="h-100"    >
                        <div className="commonHeading zindex-1 position-relative text-center mb-0">
                            <Image source='soc-logo.png' alt="logo" width="100px" imageFor="frontend" />
                            <h1 className="commonHeading_title">Upcreditis <span>SOC 2</span> Compliant</h1>
                            <p className="commonHeading_cnt text-white mb-3">We take protecting your credit data seriously. Our SOC 2 compliance, achieved through rigorous third-party auditing, <br className="d-none d-lg-block" /> means your Social Security number, credit reports, and financial details are safeguarded by  the same security <br className="d-none d-lg-block" /> standards banks use. Read more about what this means below.</p>
                            <Link to={frontendRouteMap.SOC.path} className="link-primary">Read more about our security</Link>
                        </div>
                    </Container>
                </section>
                {/* credit data */}
                <section className="creditData py-60">
                    <Container>
                        <div className="commonHeading text-center">
                            <h2 className="commonHeading_title text-dark">Your <span>Credit Data</span> is Our <br className="d-none d-xl-block" />Top Priority</h2>
                        </div>
                        <Row className="g-3">
                            {
                                data.map((item, index) => (
                                    <Col md={4} key={index}>
                                        <div className="creditData_card text-center">
                                            <em className="bi bi-shield-check text-primary h2"></em>
                                            <div className="creditData_title h4 mt-2 mt-lg-3">{item.title}</div>
                                            <p className="mb-0 text-grey">{item.des}</p>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}