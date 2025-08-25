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
                {/* faq */}
                <Faq/>
                {/* contact us */}
                <section className="contactUs">
                    <Container>
                        <div className="contactUs_wrap py-60 px-2 px-md-4 d-flex flex-column justify-content-center">
                            <div>
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
                        </div>
                    </Container>
                </section>
                {/* get financial feture */}
                <GetFinancial/>
            </main>
        </>
    )
}