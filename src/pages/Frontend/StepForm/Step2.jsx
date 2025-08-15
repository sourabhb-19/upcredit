import { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Input } from "../../../components/Frontend";
import { Link } from "react-router-dom";

export default function Step2({ handleNextStep }) {
    const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
        <h5>Verification Information - All Fields Required.</h5>
        <p>All information you provide is transmitted over a safe and secure connection.</p>
        <Row>
            <Col md={6}>
               <Form.Group >
                <Form.Label>Social Security Number <span className="text-danger">*</span></Form.Label>
                    <Row>
                        <Col xs={4}>
                            <Input type="text" maxLength="3" />
                        </Col>
                        <Col xs={4}>
                            <Input type="text" maxLength="2" />
                        </Col>
                        <Col xs={4}>
                            <Input type="text" maxLength="4" />
                        </Col>
                    </Row>
                </Form.Group>
            </Col>
            <Col xs={12} md={6}>
                <FormGroup className="form-group">
                    <div className="form-label-group">
                        <Form.Label>Date of Birth<span className="text-danger">*</span></Form.Label>
                    </div>
                    <div className="form-control-wrap fieldicon position-relative">
                        <div className="form-icon fieldicon-right">
                            <em className="bi bi-calendar"></em>
                        </div>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            placeholderText="Enter DOB"
                            className="form-control fieldicon-input-right w-100"
                        />
                    </div>
                </FormGroup>
            </Col>
            <Col xs={12} className="mt-4 mb-3">
                <h6>Create Username & Password</h6>
            </Col>
            <Col md={6}>
                <Form.Group className="form-group">
                    <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                    <Input type="email" placeholder="Enter email" />
                </Form.Group>
            </Col>
            <Col md={6}>
                <FormGroup className="form-group">
                    <div className="form-label-group">
                        <Form.Label> Password <span className="text-danger">*</span></Form.Label>
                    </div>
                    <div className="form-control-wrap fieldicon position-relative">
                        <Input
                        type="password"
                        position="right"
                        placeholder="Enter password"
                        className="fieldicon-input-right"
                        />
                    </div>
                </FormGroup>
            </Col>            
        </Row>
        <p className="small text-muted">
        You understand by clicking on the "Continue" button below, you click to accept and agree
        to the <Link to={'#!'} className="link-primary">Terms and Conditions</Link>, acknowledge receipt of our{" "}
        <Link to={'#!'} className="link-primary">Privacy Policy</Link> and agree to its terms, are providing{" "}
        <strong>"written instructions"</strong> to obtain your credit profile...
      </p>

      {/* Continue Button */}
      <Button variant="primary" onClick={handleNextStep} >
        Continue
      </Button>
    </>
  );
}