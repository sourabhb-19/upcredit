import { Container } from "react-bootstrap";
import { GetFinancial, Image } from "../../../components";

export default function Soc() {
    return (
        <>
            <main className="socPage">
                {/* banner */}
                <section className="innerBanner innerBanner-privacy d-flex align-items-center justify-content-center" >
                    <Container className="h-100">
                        <div className="commonHeading zindex-1 position-relative text-center mb-0">
                            <Image source='soc-logo.png' alt="logo" width="100px" imageFor="frontend" />
                            <h1 className="commonHeading_title">Upcreditis <span>SOC 2</span> Compliant</h1>
                            <p className="commonHeading_cnt text-white mb-3">With SOC 2 compliance backing our AI-powered credit repair platform, you can start your credit <br /> improvement journey with complete confidence in your data security.</p>
                        </div>
                    </Container>
                </section>
                {/* question anwser */}
                <section className="questionAnwser py-60">
                    <Container>
                        <div className="commonHeading text-center text-center">
                            <h2 className="commonHeading_title text-dark">What is <span>SOC 2</span> Compliance?</h2>
                        </div>
                        <div className="questionAnwser_row">
                            <div className="title h4 mb-2">What it actually means:</div>
                            <p>SOC 2 (System and Organization Controls) is the gold standard for data security in the financial services industry. It’s not just a checkbox, it’s a comprehensive examination of our entire system by independent auditors who verify that we meet strict standards for:</p>
                            <div className="subTitle h6">Security</div>
                            <p>Your data is protected against unauthorized access with multiple layers of security controls</p>
                            <div className="subTitle h6">Availability</div>
                            <p>Our AI credit repair platform is reliable and available when you need it most</p>
                            <div className="subTitle h6">Processing Integrity</div>
                            <p>Every credit repair action we take is accurate, complete, and authorized</p>
                            <div className="subTitle h6">Confidentiality</div>
                            <p>Your sensitive credit information stays confidential and is never shared without your permission</p>
                            <div className="subTitle h6">Privacy</div>
                            <p>Your personal information is collected, used, and protected according to the highest privacy standards</p>
                        </div>
                        <div className="questionAnwser_row">
                            <div className="title h4 mb-2">Why this matters for your Credit journey</div>
                            <p><strong>Bank-Level Security:</strong> We use the same security standards as major financial institutions to protect your credit reports, Social Security number, and financial data.</p>
                            <p><strong>Verified Protection:</strong> An independent auditor has verified that our security measures actually work – we’re not just telling you we’re secure, we’re proving it.</p>
                            <p><strong>Regulatory Compliance:</strong> Our SOC 2 compliance helps ensure we meet the strict regulations that govern credit repair services.</p>
                            <p><strong>Continuous Monitoring:</strong> This isn’t a one-time achievement. We maintain these security standards 24/7 and undergo regular audits to ensure ongoing protection.</p>
                        </div>
                         <div className="questionAnwser_row">
                            <div className="title h4 mb-2">The Audit Process:</div>
                            <p>Our SOC 2 examination wasn’t just paperwork – it was a comprehensive, multi-month commitment that included:</p>
                            <ul>
                                <li><strong>Months of preparation</strong> to ensure every security control
                                    met strict standards</li>
                                <li><strong>Independent testing</strong> of our systems by certified auditors
                                </li>
                                <li><strong>Penetration testing</strong> to verify our defenses against
                                    real-world cyber attacks</li>
                                <li><strong>Verification</strong> that our AI algorithms and data processing
                                    meet integrity requirements</li>
                                <li><strong>Ongoing monitoring</strong> to maintain compliance year-round</li>
                            </ul>
                            <p>This rigorous process gives you confidence that when you trust us with your credit repair, your data is in the most capable hands.</p>
                         </div>
                    </Container>
                </section>
                {/* get financial feture */}
                <GetFinancial/>
            </main>
        </>
    )
}