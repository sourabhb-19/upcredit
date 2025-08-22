import React from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { Input } from '../../../components/Frontend';
import { Link } from 'react-router-dom';

export default function ServiceAgreement({ handleStepChange }) {
    return (
        <div className="serviceAgreenment">
            <h2 className="text-7 ">Service Agreement</h2>
             <p className="text-muted mb-4 fs-14">
                By signing below, I hereby agree and consent to Upcredit Terms and
                Services and Privacy Policy. Please view, print, or save the documents
                linked below:
            </p>
            <ul className="list-unstyled mb-4">
                <li className='mb-2'>
                    <Link to={"#!"} className="link-primary ">Upcredit App Terms of Service</Link>
                </li>
                <li>
                    <Link to={"#!"} className="link-primary">Upcredit App Privacy Policy</Link>
                </li>
            </ul>
            <FormGroup className="form-group">
                <div className="form-label-group">
                    <Form.Label>Your digital Signature</Form.Label>
                </div>
                <div className="form-control-wrap">
                    <Input type="text" placeholder="Enter your signature"  />
                </div>
            </FormGroup>
            <p className="text-muted fs-12 mt-5 m-0">
                This site is protected by reCAPTCHA and the Google{" "}
                <Link
                to="#!"
                className="text-muted link-primary"
                >
                Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                to="#!"
                className="text-muted link-primary"
                >
                Terms of Service
                </Link>{" "}
                apply.
            </p>
            <Button variant="primary" className="mt-1 w-100" onClick={handleStepChange}>Sign up & Continue</Button>
        </div>
    );
}