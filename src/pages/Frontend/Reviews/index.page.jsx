import {  Accordion, Button, Container, Spinner } from "react-bootstrap";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";
import { Link } from "react-router-dom";
import { Faq, GetFinancial, Image } from "../../../components";

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
                <section className="userReviews py-60 pb-0">
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
                <Faq/>
                {/* get financial feture */}
                <GetFinancial/>
            </main>
        </>
    )
}