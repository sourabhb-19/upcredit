import { Col, Container, Row } from "react-bootstrap";
import { Image } from "../../../components/CommonElement";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";

export default function Blog (){
    const blog = [
        {
            category:"Disputing",
            img:"home/blog-thumb-01.png", 
            title:"How to Check Your Sprint Mail Order Status",
            des:"If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make sure to read the ultimate Dispute",
            delay:"200"
        },
        {
            category:"Disputing",
            img:"home/blog-thumb-02.png", 
            title:"A Detailed Explanation the Upcredit Credit Repair Attack Strategy and Letters",
            des:"If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make sure to read the ultimate Dispute",
            delay:"400"
        },
        {
            category:"Disputing",
            img:"home/blog-thumb-03.png", 
            title:"Upcredit FAQ: Everything You Need to Know To Get The Best Credit Repair Results",
            des:"Jump into our ultimate Upcredit FAQ and uncover all the secrets to mastering your credit repair game like a pro! Discover how Upcredit’s",
            delay:"600"
        }
    ]
    return(
        <>
            <section className="blogSec py-60">
                <Container>
                    <div className="commonHeading text-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
                        <h2 className="commonHeading_title text-dark">
                            Learn all about <span>Upcredit's AI</span> to <br className="d-none d-md-block" /> help elevate your finances
                        </h2>
                    </div>
                    <Row className="g-3">
                        {
                            blog.map((item, index) => (
                                <Col md={4} key={index} data-aos="fade-up" data-aos-delay={blog.delay} data-aos-duration="800" data-aos-easing="linear">
                                    <div className="blog" >
                                        <Image source={item.img} alt="Blog" className="img-fluid" imageFor="frontend" />
                                        <div className="category">{item.category}</div>
                                        <Link to={frontendRouteMap.BLOGDETAILS.path} className="title fw-bold">{item.title}</Link>
                                        <p className="mb-0">{item.des}</p>
                                        <Link to={frontendRouteMap.BLOGDETAILS.path} className="link-primary d-flex align-items-center mt-4"> Read More <em className="bi bi-arrow-right"></em></Link>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}