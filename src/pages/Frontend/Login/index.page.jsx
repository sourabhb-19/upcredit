import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Input } from "../../../components/Frontend";
import { Link, Links } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";
import Image from "../../../components/CommonElement/Image";
export default function Login(){
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
                                        <h2 className="text-7 md-3 mb-md-4">Login </h2>
                                        <FormGroup className="form-group">
                                            <div className="form-label-group">
                                                <Form.Label>Email</Form.Label>
                                            </div>
                                            <div className="form-control-wrap">
                                                <Input type="text" placeholder="Enter email" />
                                            </div>
                                        </FormGroup>
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
                                                />
                                            </div>
                                        </FormGroup>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Form.Check 
                                                type="checkbox" 
                                                label="Remember me" 
                                                name="rememberMe"
                                                className="text-4"
                                                id="rememberMeCheck"
                                            />

                                            <Link to={frontendRouteMap.FORGOTPASSWORD.path} className="text-4 link-primary">Forgot password?
                                            </Link>
                                        </div>
                                        <Button as={Link} to={frontendRouteMap.HOME.path} variant="primary" className="mt-3 w-100">
                                            Login
                                        </Button>
                                        <p className="text-4 text-center mt-3">
                                            Don't have an account? <Link to={frontendRouteMap.SIGNUP.path} className="text-primary">Sign up</Link>
                                        </p>
                                        
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