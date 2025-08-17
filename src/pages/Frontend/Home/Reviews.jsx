import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Container } from 'react-bootstrap';
import { Image } from '../../../components/CommonElement';
import { Link } from 'react-router-dom';

export default function Reviews (){
    const reviewsData = [
        {
            text: `"I’m amazed with the service provided to me, I’m shocked!! Glad I made the move!"`,
            image: "4.png",
            name: "Rose",
            time: "2 days ago",
            rating: 4.5,
        },
        {
            text: `"The Beast is a BEAST true to they Word i am a witness my score went from 484 to 605 In 30 days exact that was my first Attack!! Honesty the second Attack will tell All stay tuned"`,
            image: "1.png",
            name: "James",
            time: "3 days ago",
            rating: 3.5,
        },
        {
            text: `"I am a witness my score went from 484 to 605 In 30 days exact that was my first Attack!! Honesty the second Attack will tell All stay tuned"`,
            image: "5.png",
            name: "Lili",
            time: "8 days ago",
            rating: 3.5,
        },
        {
            text: `"Wow! I am so impressed, shocked and lost for words(Happy I am🤗). Beast dispute letters of attack are awesome!"`,
            image: "3.png",
            name: "David",
            time: "12 days ago",
            rating: 3.5,
        },
    ];
    return(
        <>
            <section className="reviews py-60">
                <Container>
                    <div className="commonHeading text-center">
                        <h2 className="commonHeading_title text-dark">Hear from our <span>users</span></h2>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".arrow-next",
                            prevEl: ".arrow-prev",
                        }}
                        modules={[Navigation, Autoplay]}
                        className="reviews_slider"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                        >
                        {reviewsData.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div className="reviews_slide bg-white px-3 py-4 d-flex flex-column">
                                    <p>{review.text}</p>
                                    <div className="reviews_slide_bottom d-md-flex align-items-center justify-content-between mt-auto">
                                        <div className="profile d-flex align-items-center">
                                            <Image source={review.image} alt="user" imageFor="frontend" />
                                            <div className="profile_cnt">
                                            <div className="title">{review.name}</div>
                                            <div className="time">{review.time}</div>
                                            </div>
                                        </div>
                                        <div className="d-flex rating my-3">
                                            {Array.from({ length: 5 }).map((_, i) => {
                                            const isHalf = review.rating - i === 0.5;
                                            const isFull = review.rating - i >= 1;
                                            return (
                                                <span className="rating-icon" key={i}>
                                                <em
                                                    className={`bi ${
                                                    isFull
                                                        ? "bi-star-fill"
                                                        : isHalf
                                                        ? "bi-star-half"
                                                        : "bi-star"
                                                    }`}
                                                ></em>
                                                </span>
                                            );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                            {/* Custom Arrows */}
                            <div className="arrow arrow-prev"><em className="bi bi-arrow-left"></em></div>
                            <div className="arrow arrow-next"><em className="bi bi-arrow-right"></em></div>
                    </Swiper>
                    <div className="text-center mt-2 mt-sm-3">
                        <Link to={'#!'} className="link-primary">See more people review </Link>
                    </div>
                </Container>
            </section>
        </>
    )
}