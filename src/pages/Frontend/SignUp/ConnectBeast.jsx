import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";

export default function ConnectBeast({ handleStepChange }) {
    return (
            <div className="connectBeast">
                  {/* Heading */}
                <h6 className="fw-bold mb-4">
                    Are you currently a paid user of Beast Credit Monitoring?
                </h6>

                {/* Cards */}
                <Row className="justify-content-center mb-4 g-3">
                    <Col xs={12} sm={6} >
                    <Link to={frontendRouteMap.STEPFORM.path} className="custom-card primary-card h-100">
                        <div className="card-title">No, I need to Sign Up</div>
                        <div className="card-subtitle">
                        Sign up for only $29.99/m
                        </div>
                    </Link>
                    </Col>
                    <Col xs={12} sm={6} >
                    <Link to={frontendRouteMap.LOGIN.path} className="custom-card outline-card h-100">
                        <div className="card-title">Yes, I have an account.</div>
                        <div className="card-subtitle">
                        Enter monitoring credentials here
                        </div>
                    </Link>
                    </Col>
                </Row>

                {/* Info Alert */}
                <Alert variant="light" className="border-primary text-start">
                    <div className="fw-bold text-primary mb-1">
                    <i className="bi bi-info-circle me-2"></i>
                    Are you new to Upcredit?
                    </div>
                    <div className="fs-14">
                    If you just signed up for Upcredit today, you most probably DO
                    NOT have a Beast Credit Monitoring account yet, please sign up now to
                    get started. Beast Credit Monitoring is required in order to generate
                    letters and attack items using Upcredit’s AI. Sign up or enter
                    credentials below.
                    </div>
                </Alert>

                {/* Footer Link */}
                <div className="mt-3">
                    <Link
                    to="#!"
                    className="link-primary fw-bold fs-14"
                    >
                    Log Out & Connect Monitoring later
                    </Link>
                </div>
            </div>
        )
    }