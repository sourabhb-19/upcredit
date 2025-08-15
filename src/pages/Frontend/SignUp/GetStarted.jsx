import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";
export default function GetStarted({ handleStepChange }) {
    return (
        <>
            <div className="form">
                <h2 className=" md-3 mb-md-4">Get started with Dispute Beast today </h2>
                <div className="ai-attack-container">
                    <p>
                        Send your first <Link to={'#!'} className="highlight">AI Attack</Link> with these 2 steps in less than 5 minutes.
                    </p>
                    <div className="step-card">
                        <div className="step-header">
                            <span className="step-number">1</span>
                            <div className="step-title">Dispute Beast Account</div>
                            <span className="price-tag free">Free</span>
                        </div>
                        <p className="step-description">
                            No expertise needed—use it on any device and start sending attacks with disputes easily.
                        </p>
                    </div>
                    <div className="step-card">
                        <div className="step-header">
                            <span className="step-number">2</span>
                            <div className="step-title">Connect Beast Credit Monitoring</div>
                            <span className="price-tag">$49.99/m</span>
                        </div>
                        <p className="step-description">
                            Provides data to our AI from all 3 Bureaus and enables the creation of precise and effective disputes to help your credit score.
                            <span className="required">*Required</span>
                        </p>
                    </div>
                </div>
                <Button variant="primary" className="mt-3 w-100" onClick={handleStepChange}>
                    Get Started
                </Button>
                <p className="text-4 text-center mt-3">
                    Already have an account? <Link to={frontendRouteMap.LOGIN.path} className="link-primary">Login</Link>
                </p>
            </div>
        </>
    )
}