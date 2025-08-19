import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap"
import { Input } from "../../../components/Frontend"
import { Image } from "../../../components/CommonElement"
import { Link } from "react-router-dom"

export default function Step4() {
    const scores = [
        {
            title: "TransUnion Credit Score2",
        },
        {
            title: "Equifax Credit Score2",
        },
        {
            title: "Experian Credit Score2",
        },
        {
            title: "Pulling Your Accounts on File2",
        },
        {
            title: "Credit Bureau Monitoring",
        },
    ]
    return (
        <>
            <section className="paymentInfo">
                <div className="stepForm_head mb-3">
                    <h5>Your identity has been confirmed and your scores are ready!</h5>
                </div>
                {
                    scores.map((item, index) => (
                        <div className="d-flex align-items-center justify-content-between paymentInfo_scores" key={index}>
                            <div className="txt">{item.title}</div>
                            <span>Processed</span>
                        </div>
                    ))
                }
                <div className="stepForm_head mt-4">
                    <div className="title fw-bold">Payment Information</div>
                    <p>Tell us which card you would like to use for your membership fees</p>
                </div>
                <Form>
                    <FormGroup className="form-group">
                        <div className="form-label-group">
                            <Form.Label>Payment method</Form.Label>
                        </div>
                        <div className="form-control-wrap d-flex gap-2 paymentInfo_cards">
                            <input type="radio" id="debitCard" name="card" />
                            <label htmlFor="debitCard">Debit Card</label>
                            <input type="radio" id="creditCard" name="card" />
                            <label htmlFor="creditCard">Credit Card</label>
                        </div>
                    </FormGroup>
                    <div className="noticeBox">
                        <strong><em className="bi bi-info-circle-fill"></em> Billing Address Notice</strong>
                        <p className="mb-0 mt-2">
                            Please ensure your billing address on your payment method matches your address
                            entered in the previous steps. These two (2) need to match or else you will encounter
                            issues.
                        </p>
                    </div>
                    <FormGroup className="form-group mt-3">
                        <div className="form-label-group">
                            <Form.Label>Select Cards</Form.Label>
                        </div>
                        <div className="form-control-wrap d-flex gap-2 paymentInfo_cardType">
                            <input type="radio" id="master" name="creditCard" />
                            <label htmlFor="master">
                                <Image source="master.png" alt="master" imageFor="frontend" />
                            </label>
                            <input type="radio" id="discover" name="creditCard" />
                            <label htmlFor="discover">
                                <Image source="discover.png" alt="discover" imageFor="frontend" />
                            </label>
                            <input type="radio" id="amex" name="creditCard" />
                            <label htmlFor="amex">
                                <Image source="amex.png" alt="amex" imageFor="frontend" />
                            </label>
                            <input type="radio" id="visa" name="creditCard" />
                            <label htmlFor="visa">
                                <Image source="visa.png" alt="visa" imageFor="frontend" />
                            </label>
                        </div>
                    </FormGroup>
                    <Row>
                        <Col md={6}>
                            <FormGroup className="form-group">
                                <div className="form-label-group">
                                    <Form.Label>Name on Card<sup className="text-danger">*</sup></Form.Label>
                                </div>
                                <div className="form-control-wrap">
                                    <Input type="text" placeholder="Enter name" />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup className="form-group">
                                <div className="form-label-group">
                                    <Form.Label>Card Number<sup className="text-danger">*</sup></Form.Label>
                                </div>
                                <div className="form-control-wrap">
                                    <Input type="text" placeholder="Enter card number" />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={8}>
                                    <FormGroup className="form-group">
                                        <div className="form-label-group">
                                            <Form.Label>Expiration Date<sup className="text-danger">*</sup></Form.Label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <Input type="text" placeholder="MM/YY" />
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup className="form-group">
                                        <div className="form-label-group">
                                            <Form.Label>CVV<sup className="text-danger">*</sup></Form.Label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <Input type="text" placeholder="---" />
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <FormGroup className="form-group">
                        <h6 className="fw-bold mt-2">100% Satisfaction Guaranteed</h6>
                        <Image source="guaranteed-logo.png" alt="guaranteed" width="150px" imageFor="frontend" />
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Form.Check
                            type="checkbox"
                            label="Use same billing address"
                            name="rememberMe"
                            className="text-4"
                            id="rememberMeCheck"
                        />
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Form.Check
                            type="checkbox"
                            label={<>I agree by enrolling the monthly membership charges below will
                                appear on my card from <b>beastcreditmonitoring.com</b></>}
                            name="agree"
                            className="text-4"
                            id="agree"
                        />
                    </FormGroup>
                    <p className="text-muted small">
                        You understand by clicking on the button below, you click to
                        accept and agree to our{" "}
                        <Link to="#!" className="text-primary">
                            Privacy Policy
                        </Link>{" "}
                        and agree to the{" "}
                        <Link to="#!" className="text-primary">
                            Terms of Use
                        </Link>.
                    </p>

                    <Card className="border-0 mb-4">
                        <Card.Body>
                            <Row className="text-center align-items-center">
                                <Col md={4} className="border-end">
                                    <div className="fw-bold text-primary">
                                        $49.99 charged on <br /> 8/3/2025
                                    </div>
                                </Col>
                                <Col md={4} className="border-end">
                                    <div>
                                        Monthly Membership for just{" "}
                                        <span className="fw-bold text-primary">$49.99</span> <br />
                                        automatically billed to account
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div>
                                        For questions or to cancel, call <br />
                                        <a href="tel:8447868060" className="text-primary fw-bold">
                                            (844) 786-8060
                                        </a>{" "}
                                        or{" "}
                                        <a href="#" className="text-primary fw-bold">
                                            login to account
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Button variant="primary" >Take me to my scores</Button>
                </Form>
                <div className="text-success mt-3 fw-medium fs-14"><em className="bi bi-lock-fill"></em> Website protected by SSL Encryption</div>
            </section>
        </>
    )
}