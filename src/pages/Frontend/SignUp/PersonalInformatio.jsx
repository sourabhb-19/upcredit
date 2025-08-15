import { useState } from "react";
import DatePicker from "react-datepicker";
import { Button, Col,  Form, FormGroup, Row } from "react-bootstrap";
import { Input, SelectPicker } from "../../../components/Frontend";

export default function PersonalInformation({ handleStepChange  }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const stateOptions = [
        { label: "Alabama", value: "AL" },
        { label: "Alaska", value: "AK" },
        { label: "Arizona", value: "AZ" },
        { label: "Arkansas", value: "AR" },
        { label: "California", value: "CA" },
    ]
    return (
        <>
            <div className="form3 ">
                <h2 className="text-7 mb-4">Personal Information</h2>
                <Row>
                    <Col xs={12}>
                        <FormGroup className="form-group">
                            <div className="form-label-group">
                                <Form.Label>Address</Form.Label>
                            </div>
                            <div className="form-control-wrap">
                                <Input type="text" placeholder="Enter address" />
                            </div>
                        </FormGroup>
                    </Col>

                    <Col xs={12} md={6}>
                        <FormGroup className="form-group">
                            <div className="form-label-group">
                                <Form.Label>City</Form.Label>
                            </div>
                            <div className="form-control-wrap">
                                <Input type="text" placeholder='Enter city' />
                            </div>
                        </FormGroup>
                    </Col>

                    <Col xs={12} md={6}>
                        <FormGroup className="form-group">
                            <div className="form-label-group">
                                <Form.Label>State</Form.Label>
                            </div>
                            <div className="form-control-wrap">
                                <SelectPicker placeholder="Select State" options={stateOptions} />
                            </div>
                        </FormGroup>
                    </Col>

                    <Col xs={12} md={6}>
                        <FormGroup className="form-group">
                            <div className="form-label-group">
                                <Form.Label>Zip Code</Form.Label>
                            </div>
                            <div className="form-control-wrap">
                                <Input type="text" placeholder='Enter zipcode' />
                            </div>
                        </FormGroup>
                    </Col>

                    <Col xs={12} md={6}>

                        <FormGroup className="form-group">
                            <div className="form-label-group">
                                <Form.Label>Date of Birth</Form.Label>
                            </div>
                            <div className="form-control-wrap fieldicon position-relative">
                                <div className="form-icon fieldicon-right">
                                    <em className="bi bi-calendar"></em>
                                </div>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    placeholderText="Enter DOB"
                                    className="form-control fieldicon-input-right"
                                />
                            </div>
                        </FormGroup>
                    </Col>

                    <Col xs={12} md={6}>
                        <FormGroup className="form-group">
                            <div className="form-label-group">
                                <Form.Label>Last 4 digits of SSN</Form.Label>
                            </div>
                            <div className="form-control-wrap">
                                <Input type="text" placeholder="Enter SSN" maxLength={4} />
                            </div>
                        </FormGroup>
                    </Col>
                </Row>


                <Button variant="primary" className="mt-3 w-100"  onClick={handleStepChange}>
                    Continue
                </Button>
            </div>
        </>
    );
}