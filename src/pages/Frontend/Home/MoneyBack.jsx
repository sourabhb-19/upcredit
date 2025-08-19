import { Col, Container, Row } from "react-bootstrap";
import { Image } from "../../../components/CommonElement";

export default function MoneyBack() {
  const cards = [
    {
      img: "home/secure.svg",
      alt: "secure",
      title: "Secure & Reliable",
      text: "Our platform holds the highest standards of security, and our customer support team is available 24/7 to assist you throughout the process.",
      delay:"300"
    },
    {
      img: "home/risk.svg",
      alt: "risk",
      title: "Risk-Free Process",
      text: "Built to deliver real results and confident in our product. If no changes occur, every payment you’ve made will be fully refunded.",
      delay:"400"
    },
    {
      img: "home/trusted.svg",
      alt: "trust",
      title: "Trust & Transparency",
      text: "We stand by the effectiveness of our service, which is why we offer the best guarantee in the credit repair industry.",
      delay:"600"
    },
  ];

  return (
    <>
      <section className="moneyBack py-60 pt-0">
        <Container>
          <div className="commonHeading text-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
            <Image
              source="home/money-back.png"
              width="150"
              alt="Money back"
              imageFor="frontend"
              className="img-fluid"
            />
            <h2 className="commonHeading_title text-dark">
              Dispute Beast <span>110% Money-Back Guarantee</span>
            </h2>
            <p>
              We believe in the quality of our products. If you’re not satisfied,
              we will return 110% (yes, 110!) <br className="d-none d-md-block" /> back of your money if Dispute Beast
              doesn’t help you improve your credit after a year.
            </p>
          </div>

          <Row className="text-center gy-3">
            {cards.map((card, index) => (
              <Col md={4} key={index}>
                <div className="moneyBack_card" data-aos="fade-up" data-aos-delay={card.delay} data-aos-duration="800" data-aos-easing="linear">
                  <div className="icon mb-3">
                    <Image
                      source={card.img}
                      alt={card.alt}
                      className="img-fluid"
                      imageFor="frontend"
                    />
                  </div>
                  <h3>
                    <strong>{card.title}</strong>
                  </h3>
                  <p>{card.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
