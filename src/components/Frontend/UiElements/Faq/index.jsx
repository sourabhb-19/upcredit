import { Accordion, Container } from "react-bootstrap";

export function Faq(){
    const faqData = [
        {
            id: 1,
            question: "Is Upcredit really Free?",
            answer:
            "Yes! Upcredit is 100% free, but in order to use our AI features you need an active Beast Credit Monitoring subscription which costs 49.99 and provides access to 3-Bureau advanced reports."
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
            "If you hire a credit repair company for a year, you could pay anywhere from $1200 to $3000 or more, considering the monthly fees and setup charges. Using Upcredit is free, but credit monitoring will cost you only $49.99 per month."
        },
        {
            id: 5,
            question: "What if I want to mail my own letters?",
            answer:
            "You can easily print and mail your letters at home, a service center or other similar place."
        },
        {
            id: 6,
            question: "How does Upcredit mailing work?",
            answer:
            `After you create your attack in Upcredit, our third-party partner, 
            <a href="https://sprintmail.io/" target="_blank" rel="noopener noreferrer" class="link-primary"><strong>Sprint Mail</strong></a>, 
            will handle the mailing process on your behalf. Your letters will be sent via USPS First-Class Mail (does not include tracking), 
            and you’ll receive an email confirmation once they’re on their way. Additionally, the status inside your Upcredit portal will be updated to reflect this progress.`
        },
        {
            id: 7,
            question: "How secure is Upcredit?",
            answer:
            "We want you to know that your security is our top priority. Our website and servers are fortified with typical website encryption (SSL/TLS), ensuring that your data travels through a secure tunnel. This means all information exchanged between your browser and our servers remains confidential and protected from prying eyes. Rest assured, your personal details are safe and sound with us. We continuously update our security measures to stay one step ahead of potential threats."
        }
    ];
    return(
        <section className="faq py-60">
            <Container>
                <div className="commonHeading text-center">
                    <h2 className="commonHeading_title text-dark">Frequently <span>asked questions</span></h2>
                    <p className="commonHeading_cnt">Here's what people usually wonder about Upcredit</p>
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
    )
}