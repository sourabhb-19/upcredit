import {  Col, Container, Row } from "react-bootstrap";
import CreateAccount from "./CreateAccount";
import CreatePassword from "./CreatePassword";
import PersonalInformation from "./PersonalInformatio";
import { useState } from "react";
import GetStarted from "./GetStarted";
import Image from "../../../components/CommonElement/Image";
import ServiceAgreement from "./ServiceAgreement";
import ConnectBeast from "./ConnectBeast";

export default function SignUp(){
    
const [step, setStep] = useState(1);

    // Function to handle step change
    const handleStepChange = () => {
        setStep((prevStep) => prevStep + 1);
    };
   


    
    return (
        <>
            <main className="authPages">
               <Container fluid className="p-0">
                    <Row className="g-0 min-h-100vh row-cols-1 row-cols-md-2">
                        <Col >
                            <div className="authPage_left  ">
                                <div className="mx-auto w-100 h-100 d-flex flex-column z-index-1">
                                    {/* Logo Row */}
                                    <Row className="g-0">
                                        <Col xs={10} lg={9} className="mx-auto">
                                            <div className="logo my-3 my-lg-5 text-white">
                                                <Image source="logo-white.png" alt="Logo" className="img-fluid" imageFor="frontend" />    
                                            </div>
                                        </Col>
                                    </Row>

                                    {/* Content Row */}
                                    <Row className="g-0 my-auto">
                                        <Col xs={10} lg={9} className="mx-auto">
                                        <h1 className="text-11 text-white mb-2 mb-md-4">Upcredit 100% <br /> Money Back Guarantee</h1>
                                        <p className="text-4 text-white lh-base mb-2 mb-lg-5">
                                            We believe in the quality of our products. If you're not satisfied, we will return 100% back of your money if Upcredit doesn’t help you improve your credit after a year.
                                        </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col  className="d-flex align-items-center justify-content-center">
                            <div className="authPage_right py-3 py-md-0 px-3 w-100">
                                <Row className="g-0 w-100 justify-content-center">
                                    <Col xs={11} lg={9} xl={8}  >
                                        
                                        {step === 1 && (<GetStarted handleStepChange={handleStepChange} />)}
                                        {step === 2 && (<CreateAccount handleStepChange={handleStepChange} />)}
                                        {step === 3 && (<CreatePassword handleStepChange={handleStepChange} />)}
                                        {step === 4 && (<PersonalInformation handleStepChange={handleStepChange} />)}
                                        {/* {step === 5 && (<ServiceAgreement handleStepChange={handleStepChange} />)} */}
                                        {step === 5 && (<ConnectBeast  />)}
                                                                              
                                    </Col>
                                </Row>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}