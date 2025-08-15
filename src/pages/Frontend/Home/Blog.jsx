import { Col, Container, Row } from "react-bootstrap";
import { Image } from "../../../components/CommonElement";
import { Link } from "react-router-dom";

export default function Blog (){
    const blog = [
        {
            category:"Disputing",
            img:"home/blog-thumb-01.png", 
            title:"How to Check Your Sprint Mail Order Status",
            des:"If you are serious about maximizing your credit repair efforts efficiently and affordably, Dispute Beast is the ultimate tool. Make sure to read the ultimate Dispute"
        },
        {
            category:"Disputing",
            img:"home/blog-thumb-02.png", 
            title:"A Detailed Explanation the Dispute Beast Credit Repair Attack Strategy and Letters",
            des:"If you are serious about maximizing your credit repair efforts efficiently and affordably, Dispute Beast is the ultimate tool. Make sure to read the ultimate Dispute"
        },
        {
            category:"Disputing",
            img:"home/blog-thumb-03.png", 
            title:"Dispute Beast FAQ: Everything You Need to Know To Get The Best Credit Repair Results",
            des:"Jump into our ultimate Dispute Beast FAQ and uncover all the secrets to mastering your credit repair game like a pro! Discover how Dispute Beast’s"
        }
    ]
    return(
        <>
            <section className="blogSec py-60">
                <Container>
                    <div className="commonHeading text-center">
                        <h2 className="commonHeading_title text-dark">
                            Learn all about <span>Dispute Beast's AI</span> to <br /> help elevate your finances
                        </h2>
                    </div>
                    <Row>
                        {
                            blog.map((item, index) => (
                                <Col md={4} key={index}>
                                    <div className="blogSec_card">
                                        <Image source={item.img} alt="Blog" className="img-fluid" imageFor="frontend" />
                                        <div className="category">{item.category}</div>
                                        <div className="title fw-bold">{item.title}</div>
                                        <p className="mb-0">{item.des}</p>
                                        <Link to={'#!'} className="link-primary d-flex align-items-center mt-4"> Read More <em className="bi bi-arrow-right"></em></Link>
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