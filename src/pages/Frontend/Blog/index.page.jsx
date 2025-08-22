import { useState } from "react";
import { Col, Container, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "../../../components/CommonElement";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";

export default function Blog() {
    const [key, setKey] = useState('All');

    const blog = [
        {
            category:"Disputing",
            img:"home/blog-thumb-01.png", 
            title:"How to Check Your Sprint Mail Order Status",
            des:"If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make sure to read the ultimate Dispute",
            delay:"200"
        },
        {
            category:"Reviews",
            img:"home/blog-thumb-02.png", 
            title:"A Detailed Explanation the Upcredit Credit Repair Attack Strategy and Letters",
            des:"If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make sure to read the ultimate Dispute",
            delay:"400"
        },
        {
            category:"Credit Scores",
            img:"home/blog-thumb-03.png", 
            title:"Upcredit FAQ: Everything You Need to Know To Get The Best Credit Repair Results",
            des:"Jump into our ultimate Upcredit FAQ and uncover all the secrets to mastering your credit repair game like a pro! Discover how Upcredit’s",
            delay:"600"
        },
        {
            category:"Reviews",
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
        },
        {
            category:"Credit Monitoring",
            img:"home/blog-thumb-02.png", 
            title:"A Detailed Explanation the Upcredit Credit Repair Attack Strategy and Letters",
            des:"If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make sure to read the ultimate Dispute",
            delay:"400"
        },
        {
            category:"Uncategorized",
            img:"home/blog-thumb-03.png", 
            title:"Upcredit FAQ: Everything You Need to Know To Get The Best Credit Repair Results",
            des:"Jump into our ultimate Upcredit FAQ and uncover all the secrets to mastering your credit repair game like a pro! Discover how Upcredit’s",
            delay:"600"
        },
        {
            category:"Disputing",
            img:"home/blog-thumb-02.png", 
            title:"A Detailed Explanation the Upcredit Credit Repair Attack Strategy and Letters",
            des:"If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make sure to read the ultimate Dispute",
            delay:"400"
        },
        {
            category:"Reviews",
            img:"home/blog-thumb-03.png", 
            title:"Upcredit FAQ: Everything You Need to Know To Get The Best Credit Repair Results",
            des:"Jump into our ultimate Upcredit FAQ and uncover all the secrets to mastering your credit repair game like a pro! Discover how Upcredit’s",
            delay:"600"
        }
    ]

    return (
        <>
            <main className="blogPage">
                {/* banner */}
                <section className="innerBanner innerBanner-blog d-flex align-items-center justify-content-center" >
                    <Container className="h-100"    >
                        <div className="commonHeading zindex-1 position-relative text-center">
                            <h1 className="commonHeading_title"><span>Upcredit Blog</span> articles for <br className="d-none d-md-block" /> your credit journey</h1>
                            <p className="commonHeading_cnt text-white"> Explore expert tips, guides, and insights to improve your credit score <br className="d-none d-md-block" />
                                and make smarter financial decisions with confidence.</p>
                        </div>
                    </Container>
                </section>
                {/* blog listing */}
                <section className="blogListing py-60">
                    <Container>
                        <Tabs
                            id="blog-tabs"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-4"
                            variant="pills"
                            >
                            <Tab eventKey="All" title="All">
                                <div className="text-center py-3 d-none">
                                    <Spinner className="text-primary"></Spinner>
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
                            </Tab>
                            <Tab eventKey="Credit Monitoring" title="Credit Monitoring">
                                Credit Monitoring articles
                            </Tab>
                            <Tab eventKey="Credit Scores" title="Credit Scores">
                                Credit Scores articles
                            </Tab>
                            <Tab eventKey="Disputing" title="Disputing">
                                Disputing articles
                            </Tab>
                            <Tab eventKey="Reviews" title="Reviews">
                                Reviews articles
                            </Tab>
                            <Tab eventKey="Uncategorized" title="Uncategorized">
                                Uncategorized articles
                            </Tab>
                            </Tabs>
                    </Container>
                </section>
            </main>
        </>
    )
}