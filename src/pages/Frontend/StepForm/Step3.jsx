import { Button, Col, Form, FormGroup, Row } from "react-bootstrap"
import { Input } from "../../../components/Frontend"
import { useState } from "react"

export default function Step3 ({handleNextStep}){
    const [showForm, setshowForm] = useState(true);
    const handleshowForm = () =>{
        setshowForm(false);
    }
    return(
        <>
            <div className="stepForm_head">
                <div className="title fw-bold">Identity Verification</div>
                <p>You're almost there! For the protection of your information, we
                just need to confirm your identity before proceeding.</p>
            </div>
            {showForm ? 
                (
                    <Form>
                        <Form.Group className="form-group">
                            <label className="form-label fw-bold h6" htmlFor="name">Please select your preferred method of Authentication?
                                (Standard text message and voice rates apply)*
                            </label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Deliver passcode via Text Message"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    className="mb-2 mb-md-0"
                                />
                                <Form.Check
                                    inline
                                    label="Deliver passcode via Voice Call"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                </div>
                            ))}
                        </Form.Group>
                        <Button variant="primary" onClick={handleshowForm}>Continue</Button>
                    </Form>
                ):
                (
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup className="form-group">
                                    <div className="form-label-group">
                                        <Form.Label>Enter the passcode you received:</Form.Label>
                                    </div>
                                    <div className="form-control-wrap">
                                        <Input type="text" placeholder="Enter passcode" />
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button variant="primary"  onClick={handleNextStep}>Submit Authentication</Button>
                    </Form>
                )

            }
            <div className="text-success mt-3 fw-medium fs-14"><em className="bi bi-lock-fill"></em> Website protected by SSL Encryption</div>
        </>
    )
}