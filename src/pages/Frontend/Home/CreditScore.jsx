import { Link } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";
import { Container } from "react-bootstrap";

export default function CreditScore (){
    return(
        <>
            <section className="creditScore">
                <Container>
                    <div className="creditScore_wrap text-center d-flex flex-column justify-content-center px-2">
                        <div className="commonHeading zindex-1 position-relative mb-0">
                            <span className="creditScore_tag">Rated 4.78 Stars by 1,700+ Users</span>
                            <h2 className="commonHeading_title mt-3 mb-4">We've helped thousands of users <br className="d-none d-md-block" /> increase their <span>credit score</span> </h2>
                            <Link to={frontendRouteMap.SIGNUP.path} className="btn btn-primary">Get Started</Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}