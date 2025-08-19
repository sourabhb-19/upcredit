import {  Accordion, Button, Container, Spinner } from "react-bootstrap";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";
import { Link } from "react-router-dom";
import { Image } from "../../../components";

export default function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "Jacob Jones",
            role: "Team Leader",
            image: "2.png",
            rating: 4.5,
            review: "There are many variations of passages of Lorem Ipsum available..."
        },
        {
            id: 2,
            name: "Theresa Webb",
            role: "Product Manager",
            image: "3.png",
            rating: 5,
            review: "Great experience, the team was very supportive and professional Great experience, the team was very supportive and professional..."
        },
        {
            id: 3,
            name: "Albert Flores",
            role: "UI/UX Designer",
            image: "4.png",
            rating: 4,
            review: "Amazing service!  Great experience, the team was very supportive and professional Great experience, the team was very supportive and professional the way things were handled..."
        },
        {
            id: 4,
            name: "Courtney Henry",
            role: "Developer",
            image: "5.png",
            rating: 4.5,
            review: "Very smooth process, highly recommend to others  Very smooth process, highly recommend to others..."
        },
        {
            id: 5,
            name: "Arlene McCoy",
            role: "QA Tester",
            image: "6.png",
            rating: 5,
            review: "Outstanding service and fast support response time..."
        },
        {
            id: 6,
            name: "Esther Howard",
            role: "Marketing Head",
            image: "7.png",
            rating: 4,
            review: "Helpful team, everything went better than expected..."
        }
        ];

    const faqData = [
        {
            id: 1,
            question: "Is Dispute Beast really Free?",
            answer:
            "Yes! Dispute Beast is 100% free, but in order to use our AI features you need an active Beast Credit Monitoring subscription which costs 49.99 and provides access to 3-Bureau advanced reports."
        },
        {
            id: 2,
            question: "Why do I need Credit Monitoring?",
            answer:
            "Credit monitoring is essential for safeguarding your financial health and security in today’s fast-paced world. By enrolling in a credit monitoring service, you gain valuable insights and real-time updates about changes to your credit report, such as new accounts, inquiries, or potential errors. This proactive approach empowers you to detect any suspicious or unauthorized activities early, reducing the risk of identity theft and fraudulent transactions. With credit monitoring, you can make informed decisions about your financial well-being, spot potential issues before they escalate, and take the necessary steps to maintain a strong credit profile. Protect your financial future and enjoy peace of mind with the vigilant oversight provided by credit monitoring."
        },
        {
            id: 3,
            question: "How long will it take overall?",
            answer:
            "The duration of the credit repair process can vary significantly depending on the complexity of the individual’s credit situation and the extent of the issues that need to be addressed. On average, the credit repair process can take a few months to a year."
        },
        {
            id: 4,
            question: "How much can I save vs. using traditional credit repair companies?",
            answer:
            "If you hire a credit repair company for a year, you could pay anywhere from $1200 to $3000 or more, considering the monthly fees and setup charges. Using Dispute Beast is free, but credit monitoring will cost you only $49.99 per month."
        },
        {
            id: 5,
            question: "What if I want to mail my own letters?",
            answer:
            "You can easily print and mail your letters at home, a service center or other similar place."
        },
        {
            id: 6,
            question: "How does Dispute Beast mailing work?",
            answer:
            `After you create your attack in Dispute Beast, our third-party partner, 
            <a href="https://sprintmail.io/" target="_blank" rel="noopener noreferrer" class="link-primary"><strong>Sprint Mail</strong></a>, 
            will handle the mailing process on your behalf. Your letters will be sent via USPS First-Class Mail (does not include tracking), 
            and you’ll receive an email confirmation once they’re on their way. Additionally, the status inside your Dispute Beast portal will be updated to reflect this progress.`
        },
        {
            id: 7,
            question: "How secure is Dispute Beast?",
            answer:
            "We want you to know that your security is our top priority. Our website and servers are fortified with typical website encryption (SSL/TLS), ensuring that your data travels through a secure tunnel. This means all information exchanged between your browser and our servers remains confidential and protected from prying eyes. Rest assured, your personal details are safe and sound with us. We continuously update our security measures to stay one step ahead of potential threats."
        }
    ];

    return (
        <>
            <main className="reviewsPage">
                {/* banner */}
                <section className="innerBanner innerBanner-reviews d-flex align-items-center justify-content-center" >
                    <Container className="h-100"    >
                        <div className="commonHeading zindex-1 position-relative text-center">
                            <h1 className="commonHeading_title">Trusted by thousands <br /> of <span>users</span></h1>
                            <p className="commonHeading_cnt text-white">We've helped thousands increase their score by hundreds.. That means we've increased <br className="d-none d-md-block" /> probably over a million points total. See the stories for yourself here.</p>
                            <Link to={frontendRouteMap.SIGNUP.path} className='btn btn-primary mt-4'>Get started</Link>
                        </div>
                    </Container>
                </section>
                {/*  user reviews */}
                <section className="userReviews py-60">
                    <Container>
                        <div className="userReviews_grid">
                            {reviews.map((item) => (
                                <div className="userReviews_card" key={item.id}>
                                    <div className="userReviews-header">
                                        <div className="profile-thumb">
                                        <Image source={item.image} alt={item.name} imageFor="frontend" />
                                        </div>
                                        <div className="content">
                                        <div className="title">{item.name}</div>
                                        <p className="text">{item.role}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex rating my-2">
                                        {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                                        <em key={i} className="bi bi-star-fill rating_icon"></em>
                                        ))}
                                        {item.rating % 1 !== 0 && <em className="bi bi-star-half rating_icon"></em>}
                                    </div>
                                    <p>{item.review}</p>
                                    <div className="quote-icon">
                                        <Image source="quote-icon.svg" alt="quote" imageFor="frontend" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <Button variant="primary">Load more <Spinner animation="border" className="ms-2" size="sm" /></Button>
                        </div>
                    </Container>
                </section>
                {/* faq */}
                <section className="faq py-60 pt-0">
                    <Container>
                        <div className="commonHeading text-center">
                            <h2 className="commonHeading_title text-dark">Frequently <span>asked questions</span></h2>
                            <p className="commonHeading_cnt">Here's what people usually wonder about Dispute Beast</p>
                        </div>
                        <Accordion defaultActiveKey="0" className="mx-auto">
                            {faqData.map((item, index) => (
                                <Accordion.Item eventKey={index.toString()} key={item.id}>
                                <Accordion.Header>{item.question}</Accordion.Header>
                                <Accordion.Body>
                                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                </Accordion.Body>
                                </Accordion.Item>
                            ))}
                            </Accordion>
                    </Container>
                </section>
            </main>
        </>
    )
}