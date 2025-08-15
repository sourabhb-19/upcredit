
import { Button, Form, FormGroup } from "react-bootstrap";
import { Input } from "../../../components/Frontend";
import { useState } from "react";

export default function CreatePassword({ handleStepChange }) {
    // State for password input
    const [password, setPassword] = useState("");
      // Conditions check
      const rules = [
        {
          text: "At least 8 characters",
          valid: password.length >= 8,
        },
        {
          text: "Contain uppercase letters",
          valid: /[A-Z]/.test(password),
        },
        {
          text: "Contain lowercase letters",
          valid: /[a-z]/.test(password),
        },
        {
          text: "One Number",
          valid: /\d/.test(password),
        },
        {
          text: "One Special Character",
          valid: /[^A-Za-z0-9]/.test(password),
        },
      ];
    return (
        <>
            <div className="form2 ">
                <h2 className="text-7 mb-4">Create A Password </h2>
                <FormGroup className="form-group">
                    <div className="form-label-group">
                        <Form.Label> Password</Form.Label>
                    </div>
                    <div className="form-control-wrap fieldicon position-relative">
                        <Input
                            type="password"
                            position="right"
                            placeholder="Enter password"
                            className="fieldicon-input-right"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </FormGroup>
                <ul className="list-unstyled">
                    {rules.map((rule, index) => (
                        <li key={index} className={`mb-2 d-flex align-items-center ${rule.valid ? "text-success" : ""}`}>
                            <i
                                className={`bi ${rule.valid ? "bi-check-circle-fill text-success" : "bi-circle text-secondary"
                                    } me-2`}
                            ></i>
                            {rule.text}
                        </li>
                    ))}
                </ul>
                <Button variant="primary" className="mt-3 w-100" onClick={handleStepChange}>
                    Continue
                </Button>
            </div>
        </>

    );
}