import { Container } from "react-bootstrap"
import Step1 from "./Step1";
import { useState } from "react";
import Step2 from "./Step2";

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
      <Container>
        <div className="d-flex align-items-center justify-content-center py-3">
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
        </div>
      </Container>
    </main>
  );
}