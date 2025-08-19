import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Input, SelectPicker } from "../../../components/Frontend";

export default function Step1({ handleNextStep }) {
      const stateOptions = [
            { label: "MH - Marshall Islands", value: "MH" },
            { label: "CA - California", value: "CA" },
            { label: "NY - New York", value: "NY" },
            // Add more states here...
        ];
  return (
    <>
        <div className="stepForm_head">
            <div className="title fw-bold">Jhon Mart, Let's get started by finding your Credit Profile</div>
            <p>Fill out the form below to set up your account and get access to 3-Bureau monitoring!</p>
        </div>
        <Row>
            {/* First Name */}
            <Col md={6}>
            <FormGroup className="form-group">
                <div className="form-label-group">
                <Form.Label>First Name<sup className="text-danger">*</sup></Form.Label>
                </div>
                <div className="form-control-wrap">
                <Input type="text" placeholder="Enter first name" />
                </div>
            </FormGroup>
            </Col>

            {/* Last Name */}
            <Col md={6}>
            <FormGroup className="form-group">
                <div className="form-label-group">
                <Form.Label>Last Name<sup className="text-danger">*</sup></Form.Label>
                </div>
                <div className="form-control-wrap">
                <Input type="text" placeholder="Enter last name" />
                </div>
            </FormGroup>
            </Col>

            {/* Address */}
            <Col md={6}>
            <FormGroup className="form-group">
                <div className="form-label-group">
                <Form.Label>Address<sup className="text-danger">*</sup></Form.Label>
                </div>
                <div className="form-control-wrap">
                <Input type="text" placeholder="Enter address" />
                </div>
            </FormGroup>
            </Col>

            {/* City */}
            <Col md={6}>
            <FormGroup className="form-group">
                <div className="form-label-group">
                <Form.Label>City<sup className="text-danger">*</sup></Form.Label>
                </div>
                <div className="form-control-wrap">
                <Input type="text" placeholder="Enter city" />
                </div>
            </FormGroup>
            </Col>

            {/* State */}
            <Col md={6}>
            <FormGroup className="form-group">
                <div className="form-label-group">
                <Form.Label>State<sup className="text-danger">*</sup></Form.Label>
                </div>
                <div className="form-control-wrap">
                <SelectPicker
                    data={stateOptions}
                    placeholder="Select state"
                    style={{ width: "100%" }}
                />
                </div>
            </FormGroup>
            </Col>

            {/* Zip Code */}
            <Col md={6}>
            <FormGroup className="form-group">
                <div className="form-label-group">
                <Form.Label>Zip Code<sup className="text-danger">*</sup></Form.Label>
                </div>
                <div className="form-control-wrap">
                <Input type="text" placeholder="Enter zip code" />
                </div>
            </FormGroup>
            </Col>
    

            <Col md={6}>
            <FormGroup className="form-group">
                <div className="form-label-group">
                <Form.Label>Phone Number<sup className="text-danger">*</sup></Form.Label>
                </div>
                <div className="form-control-wrap">
                <Input type="text" placeholder="Enter phone number" />
                </div>
            </FormGroup>
            </Col>
            
        </Row>
        <Button variant="primary" onClick={handleNextStep}>Continue</Button>       
      </>
  );
}