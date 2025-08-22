import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";

export default function Privacy() {
    return (
        <>
            <main className="staticPage">
                {/* banner */}
                <section className="innerBanner innerBanner-privacy d-flex align-items-center justify-content-center" >
                    <Container className="h-100"    >
                        <div className="commonHeading zindex-1 position-relative text-center mb-0">
                            <h1 className="commonHeading_title">Privacy <span>Policy</span></h1>
                            <p className="commonHeading_cnt text-white mb-3">Our Privacy Policy explains how we handle your personal data <br /> with care and transparency.</p>
                        </div>
                    </Container>
                </section>
                {/* content */}
                <section className="content py-60 pt-3">
                    <Container>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{ to: frontendRouteMap.HOME.path, className: "link-primary" }} >Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Privacy</Breadcrumb.Item>
                        </Breadcrumb>
                        <p>Upcredit is committed to protecting your privacy online. This Privacy Policy describes the personal information
                            we collect through this website at disputebeast.com (the “site” or “sites”) and how we collect and use that
                            information.&nbsp;</p>
                        <p>The terms “we,” “us,” and “our” refers to Upcredit LLC. The terms “user,” “you,” and “your” refer to site
                            visitors, customers, and any other users of the Site.</p>
                        <p>The term “personal information” is defined as information that you voluntarily provide to us that personally
                            identifies you and/or your contact information, such as your name, phone number, and email address.&nbsp;</p>
                        <p>Use of Disputebeast.com, including all materials presented herein and all online services provided by Upcredit
                            LLC, is subject to the following Privacy Policy. This Privacy Policy applies to all site visitors, customers, and
                            all other users of the Site. By using the Site or Service, you agree to this Privacy Policy, without modification,
                            and acknowledge reading it.&nbsp;<br class="d-none d-md-block" />Information We collect product Orders. We collect a variety of personal
                            information with each product order.</p>
                        <p>This includes:</p>
                        <p>Your name, address, email address, phone number, and other personal information. This information is shared with our
                            e-commerce software providers to ensure the completion of your order. We use your email to communicate with you
                            about your order and to manage our customer relationship with you. When you place an order, you may be added to our
                            mailing list, from which you can unsubscribe at any time using the unsubscribe link in each email or by contacting
                            us at info@134.122.3.225.</p>
                        <p>Your payment information. We collect payment information for each order, but we do not store payment information on
                            disputebeast.com or Upcredit LLC servers. Your payment information is securely communicated to and processed
                            via our e-commerce software providers.</p>
                        <p>Non-Disparagement</p>
                        <p>The Affiliate agrees not to make any statements, written or verbal, or cause or encourage others to make any
                            statements, written or verbal, that defame, disparage, or in any way criticize the personal or business reputation,
                            practices, or conduct of Upcredit LLC, its employees, directors, or officers. This non-disparagement clause
                            applies to all affiliates and is a material term of the affiliate agreement.</p>
                        <p>Blog Interaction.</p>
                        <p>We only collect the personal information you voluntarily provide to us, which may include the following:</p>
                        <p>Your email address in order to subscribe to our mailing list, sign up for a consultation call, or sign up for one of
                            our interactive forums;&nbsp;<br class="d-none d-md-block" />Your name, email address, and website in order to post a comment on our blog; and
                            your social media profiles in order to share an article from our blog on social media via a third-party provider;
                            Your full name, email address, and message in order to contact us via our contact form.&nbsp;</p>
                        <p>Activity</p>
                        <p>We may record information relating to your use of the Site, such as the searches you undertake, the pages you view,
                            your browser type, IP address, requested URL, referring URL, and timestamp information. We use this type of
                            information to administer the Site and provide the highest possible level of service to you. We also use this
                            information in the aggregate to perform statistical analyses of user behavior and characteristics in order to
                            measure interest in and use of the various areas of the Site.&nbsp;</p>
                        <p>Cookies</p>
                        <p>We may send cookies to your computer in order to uniquely identify your browser and improve the quality of our
                            service. The term “cookies” refers to small pieces of information that a website sends to your computer’s hard drive
                            while you are viewing the Site. We may use both session cookies (which expire once you close your browser) and
                            persistent cookies (which stay on your computer until you delete them). You have the ability to accept or decline
                            cookies using your web browser settings. If you choose to disable cookies, some areas of the Site may not work
                            properly or at all.&nbsp;</p>
                        <p>HOW YOUR INFORMATION IS USED</p>
                        <p>The information you provide is used to process transactions, send periodic emails, and improve the service we
                            provide. We do share your information with trusted third parties who assist us in operating our website, conducting
                            our business, and servicing clients and visitors. These trusted third parties agree to keep this information
                            confidential. Your personal information will never be shared with unrelated third parties.&nbsp;We don’t rent or
                            sell your personal information (any information that is identifiable to you).&nbsp;</p>
                        <p>Third-Party Links</p>
                        <p>The Site may contain links to third-party websites. Except as otherwise discussed in this Privacy Policy, this
                            document only addresses the use and disclosure of information we collect from you on our Site. Other sites
                            accessible through our Site via links or otherwise have their own policies in regard to privacy. We are not
                            responsible for the privacy policies or practices of third parties.&nbsp;<br class="d-none d-md-block" />Security</p>
                        <p>We maintain security measures to protect your personal information from unauthorized access, misuse, or disclosure.
                            However, no exchange of data over the Internet can be guaranteed as 100% secure. While we make every effort to
                            protect your personal information shared with us through our Site, you acknowledge that the personal information you
                            voluntarily share with us through this Site could be accessed or tampered with by a third party. You agree that we
                            are not responsible for any intercepted information shared through our Site without our knowledge or permission.
                            Additionally, you release us from any and all claims arising out of or related to the use of such intercepted
                            information in any unauthorized manner.&nbsp;</p>
                        <p>Children</p>
                        <p>To access or use the Site, you must be 18 years old or older and have the requisite power and authority to enter into
                            this Privacy Policy. Children under the age of 18 are prohibited from using the Site.&nbsp;</p>
                        <p>CONTACT INFORMATION<br class="d-none d-md-block" />Questions about the privacy policy should be sent to us at help (at) disputebeast.com</p>
                    </Container>
                </section>
            </main>
        </>
    )
}