import React from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Input, InputTextArea, SelectPicker } from "../../../components/Frontend";

function ComponentPreview() {
  const defaultOptions =[
    { value: "01", label: "Option 01" },
    { value: "02", label: "Option 02" },
  ]
  return (
    <>
      <main>
        <Container className="py-4">
          <h2>Component Preview</h2>
          <h3>Form</h3>
          <Row className="g-3">
            <Col md={3}>
              <FormGroup className="form-group">
                <div className="form-label-group">
                  <Form.Label>Input text Default</Form.Label>
                </div>
                <div className="form-control-wrap">
                  <Input type="text" placeholder="Input placeholder" />
                </div>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup className="form-group">
                <div className="form-label-group">
                  <Form.Label>Input with Icon Left</Form.Label>
                </div>
                <div className="form-control-wrap fieldicon position-relative">
                  <Input
                    type="text"
                    position="left"
                    iconName="user"
                    placeholder="Input placeholder"
                    className="fieldicon-input-left"
                  />
                </div>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup className="form-group">
                <div className="form-label-group">
                  <Form.Label>Input with Icon Right</Form.Label>
                </div>
                <div className="form-control-wrap fieldicon position-relative">
                  <Input
                    type="text"
                    position="right"
                    iconName="envelope"
                    placeholder="Input placeholder"
                    className="fieldicon-input-right"
                  />
                </div>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup className="form-group">
                <div className="form-label-group">
                  <Form.Label>Input with Password</Form.Label>
                </div>
                <div className="form-control-wrap fieldicon position-relative">
                  <Input
                    type="password"
                    position="right"
                    placeholder="Input placeholder"
                    className="fieldicon-input-right"
                  />
                </div>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup className="form-group">
                <div className="form-label-group">
                  <Form.Label>Textarea</Form.Label>
                </div>
                <div className="form-control-wrap">
                  <InputTextArea
                    className="no-resize"
                    placeholder="Input placeholder"
                  />
                </div>
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup className="form-group">
                <div className="form-label-group">
                  <Form.Label>Default</Form.Label>
                </div>
                <div className="form-control-wrap">
                  <SelectPicker
                    options={defaultOptions}
                    placeholder="Select placeholder"
                  />
                </div>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup className="form-group">
                <div className="form-label-group">
                  <Form.Label>Default Search</Form.Label>
                </div>
                <div className="form-control-wrap">
                  <SelectPicker
                    isSearchable
                    options={defaultOptions}
                    placeholder="Select placeholder"
                  />
                </div>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup className="form-group">
                <div className="form-label-group">
                  <Form.Label>Multi Select</Form.Label>
                </div>
                <div className="form-control-wrap">
                  <SelectPicker
                    isMulti
                    options={defaultOptions}
                    placeholder="Select placeholder"
                  />
                </div>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default ComponentPreview;
