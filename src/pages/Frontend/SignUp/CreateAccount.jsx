import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Input, SelectPicker } from "../../../components/Frontend";

export default function CreateAccount({ handleStepChange }) {
    const defaultOptions =[
        { value: "01", label: "Jr" },
        { value: "02", label: "Sr" },
        { value: "03", label: "I" },
        { value: "04", label: "II" },
        { value: "05", label: "III" },
        { value: "06", label: "IV" },
    ]
    return (
        <>
            
            <div className="form1 ">
                <h2 className=" md-3 mb-md-4">Create Your Account </h2>
                <FormGroup className="form-group">
                    <div className="form-label-group">
                        <Form.Label>Email</Form.Label>
                    </div>
                    <div className="form-control-wrap">
                        <Input type="email" placeholder="Enter email" />
                    </div>
                </FormGroup>
                <Row className="gx-3">
                    <Col xs={12} md={6}>
                        <FormGroup className="form-group">
                            <div className="form-label-group">
                                <Form.Label>First Name</Form.Label>
                            </div>
                            <div className="form-control-wrap">
                                <Input type="text" placeholder="Enter first name" />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={6}>
                        <FormGroup className="form-group">
                            <div className="form-label-group">
                                <Form.Label>Middle Name</Form.Label>
                            </div>
                            <div className="form-control-wrap">
                                <Input type="text" placeholder="Enter middle name" />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col xs={12} lg={8}>
                        <FormGroup className="form-group">
                            <div className="form-label-group">
                                <Form.Label>Last Name</Form.Label>
                            </div>
                            <div className="form-control-wrap">
                                <Input type="text" placeholder="Enter last name" />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col xs={12} lg={4}>
                        <FormGroup className="form-group">
                            <div className="form-label-group">
                                <Form.Label>Suffix</Form.Label>
                            </div>
                            <div className="form-control-wrap">
                                <SelectPicker
                                    options={defaultOptions}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup className="form-group">
                    <div className="form-label-group">
                        <Form.Label>Phone</Form.Label>
                    </div>
                    <div className="form-control-wrap">
                        <Input type="text" placeholder="Enter phone" />
                    </div>
                </FormGroup>

                <Button variant="primary" className="mt-3 w-100" onClick={handleStepChange}>
                    Continue
                </Button>
            </div>
        </>
    )
}

