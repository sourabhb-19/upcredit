import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Faq, Input, InputTextArea, SelectPicker } from "../../../components";
import { useState } from "react";

export default function ContactUs(){
    const defaultOptions =[
        { value: "01", label: "Yes" },
        { value: "02", label: "No" },
    ]
    const topicOptions = [
        { label: "Signup/Login", value: "Signup/Login" },
        { label: "Credit Monitoring", value: "Credit Monitoring" },
        { label: "My Credit Scores", value: "My Credit Scores" },
        { label: "My Credit Report", value: "My Credit Report" },
        { label: "Returned Letters", value: "Returned Letters" },
        { label: "Attack Issues", value: "Attack Issues" },
        { label: "My Account", value: "My Account" },
        { label: "Printing & Mailing", value: "Printing & Mailing" },
        { label: "Other", value: "Other" }
    ];

    const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert(`File uploaded: ${file.name}`);
      // Backend API call yaha kar sakte ho
    } else {
      alert("Please select a file first!");
    }
  };
    return(
        <main className="contactUs">
            {/* banner */}
            <section className="innerBanner innerBanner-contactus d-flex align-items-center justify-content-center" >
                <Container className="h-100"    >
                    <div className="commonHeading zindex-1 position-relative text-center mb-0">
                        <h1 className="commonHeading_title">Reach out to <br className="d-none d-md-block" /><span>Customer Support</span></h1>
                        <p className="commonHeading_cnt text-white mb-3">We're here to help, send us your question or request and our team members will get back to you. <br className="d-none d-md-block" /> Please give us up to 24 hours to answer your request.</p>
                    </div>
                </Container>
            </section>
            {/* contact form */}
            <section className="contactForm py-60 bg-light">
                <Container>
                    <Row className="g-0 overflow-hidden rounded-1">
                        <Col lg={6}>
                            <div className="contactForm_left bg-white p-4">
                                <div className="contactForm_title h3 mb-3">
                                    Feel free to <span className="text-primary">get in touch</span> or <br /> visit our location.
                                </div>
                                <Row className="gx-3">
                                    <Col xs={12} md={6}>
                                        <FormGroup className="form-group">
                                            <div className="form-label-group">
                                                <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                                            </div>
                                            <div className="form-control-wrap">
                                                <Input type="text" placeholder="Enter first name" />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <FormGroup className="form-group">
                                            <div className="form-label-group">
                                                <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                                            </div>
                                            <div className="form-control-wrap">
                                                <Input type="text" placeholder="Enter last name" />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6} >
                                        <FormGroup className="form-group">
                                            <div className="form-label-group">
                                                <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                            </div>
                                            <div className="form-control-wrap">
                                                <Input type="text" placeholder="Enter email" />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <FormGroup className="form-group">
                                            <div className="form-label-group">
                                                <Form.Label>Do you have a Upcredit account? <span className="text-danger">*</span></Form.Label>
                                            </div>
                                            <div className="form-control-wrap">
                                                <SelectPicker options={defaultOptions} placeholder="Select account" />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} >
                                        <FormGroup className="form-group">
                                            <div className="form-label-group">
                                                <Form.Label>Select a Topic for Assistance <span className="text-danger">*</span></Form.Label>
                                            </div>
                                            <div className="form-control-wrap">
                                                <SelectPicker options={topicOptions} placeholder="Select topic" />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} >
                                        <FormGroup className="form-group">
                                            <div className="form-label-group">
                                                <Form.Label>How Can We Assist You? <span className="text-danger">*</span></Form.Label>
                                            </div>
                                            <div className="form-control-wrap">
                                                <InputTextArea rows="2" placeholder="Give us a little more context so we can best assist you"/>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} >
                                        <FormGroup className="form-group">
                                            <div className="form-label-group">
                                                <Form.Label>How Can We Assist You? <span className="text-danger">*</span></Form.Label>
                                            </div>
                                            <div className="form-control-wrap">
                                                <div
                                                    className="border border-1 border-dashed p-4 text-center rounded-3"
                                                    style={{ borderStyle: "dashed", cursor: "pointer" }}
                                                    onClick={() => document.getElementById("fileInput").click()}
                                                    >
                                                    <input
                                                        type="file"
                                                        id="fileInput"
                                                        className="d-none"
                                                        onChange={handleFileChange}
                                                    />

                                                    <p className="mb-0 text-muted">
                                                       Upload your <span className="text-primary fw-bold">File</span>
                                                    </p>
                                                    </div>

                                                    {/* Selected File Info */}
                                                    {file && (
                                                    <div className="alert alert-success p-2 mt-3 rounded-1">
                                                        <small><strong>Selected File:</strong> {file.name}</small>
                                                    </div>
                                                    )}
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <small className="text-secondary"><strong>Helpful Tips:</strong> To ensure we can assist you as quickly as possible, please provide details about your request and, if applicable, upload any relevant screenshots. By submitting this form, you agree to receive follow-up communication from Dispute Beast via email or text.</small>
                                </Row>
                                <Button variant="primary" className="mt-3" >
                                    Submit Request
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="contactForm_map h-100" style={{ filter: "grayscale(100%)" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96840.74259815917!2d-74.21035326499913!3d40.66794886378488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1742025261462!5m2!1sen!2sbd"
                                     allowFullScreen="" loading="lazy" width="100%" height="100%"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* faq */}
            <Faq/>
        </main>
    )
}