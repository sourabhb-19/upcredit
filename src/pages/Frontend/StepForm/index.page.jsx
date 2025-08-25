import { Container } from "react-bootstrap"
import Step1 from "./Step1";
import { useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { Image } from "../../../components/CommonElement";

export default function StepForm() {
  const [currentStep, setCurrentStep] = useState(1);  

  const handleNextStep = () => {  
    setCurrentStep((prevStep) => prevStep + 1);
  }
  const steps = [
    { number: 1, label: "Profile Information" },
    { number: 2, label: "Personal details" },
    { number: 3, label: "Security Verification " },
    { number: 4, label: "Payment Information" },
  ];
  return (
    <main className="stepForm">
      <div className="stepForm_header bg-white py-2 mb-3 mb-md-4">
        <Container>
          <Image source="logo.png" alt="logo" width="150" imageFor="frontend" />
        </Container>
      </div>
      <Container>
        <div className="d-flex align-items-center justify-content-lg-center mb-3 mb-md-4 stepForm_row">
        {steps.map((step, index) => (
          <div key={step.number} className="stepForm_wrapper d-flex align-items-center">
            <div
              className={`stepForm_circle ${
                currentStep === step.number
                  ? "active"
                  : currentStep > step.number
                  ? "completed"
                  : ""
              }`}
            >
              {currentStep > step.number ? (
                <i className="bi bi-check-lg"></i>
              ) : (
                step.number
              )}
            </div>
            <div
              className={`stepForm_label ${
                currentStep === step.number ? "active" : ""
              }`}
            >
              {step.label}
            </div>
            {index < steps.length - 1 && <div className="stepForm_line"></div>}
          </div>
        ))}
        </div>
        <div  className="stepForm_content mx-auto">
          {currentStep === 1 && <Step1 handleNextStep={handleNextStep} /> }
          {currentStep === 2 && <Step2 handleNextStep={handleNextStep} /> }
          {currentStep === 3 && <Step3 handleNextStep={handleNextStep} /> }
          {currentStep === 4 && <Step4 handleNextStep={handleNextStep} /> }
        </div>
      </Container>
    </main>
  );
}