import { Col, Container, Row } from "react-bootstrap";
import { Image } from "../../../components/CommonElement";

export default function MoneyBack() {
  const cards = [
    {
      img: "home/secure.svg",
      alt: "secure",
      title: "Secure & Reliable",
      text: "Our platform holds the highest standards of security, and our customer support team is available 24/7 to assist you throughout the process.",
    },
    {
      img: "home/risk.svg",
      alt: "risk",
      title: "Risk-Free Process",
      text: "Built to deliver real results and confident in our product. If no changes occur, every payment you’ve made will be fully refunded.",
    },
    {
      img: "home/trusted.svg",
      alt: "trust",
      title: "Trust & Transparency",
      text: "We stand by the effectiveness of our service, which is why we offer the best guarantee in the credit repair industry.",
    },
  ];

  return (
    <>
      <section className="moneyBack py-60 pt-0">
        <Container>
          <div className="commonHeading text-center">
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
              we will return 110% (yes, 110!) <br /> back of your money if Dispute Beast
              doesn’t help you improve your credit after a year.
            </p>
          </div>

          <Row className="text-center">
            {cards.map((card, index) => (
              <Col lg={4} key={index}>
                <div className="moneyBack_card">
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
