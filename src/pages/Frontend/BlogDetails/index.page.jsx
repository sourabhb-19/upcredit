import { Container } from "react-bootstrap";
import { Image } from "../../../components";
import { Link } from "react-router-dom";

export default function BlogDetails (){
    return(
        <>
            <main className="blogDetails">
                {/* banner */}
                <section className="innerBanner innerBanner-blog d-flex align-items-center justify-content-center" >
                    <Container className="h-100"    >
                        <div className="commonHeading zindex-1 position-relative text-center">
                            <h1 className="commonHeading_title"><span>Blog</span> Details</h1>                            
                        </div>
                    </Container>
                </section>
                {/* blog content */}
                <section className="blogContent py-60">
                    <Container>
                        <h2 className="blogContent_title">How To Use Upcredit: Step-by-Step Guide</h2>
                        <div className="blogContent_img position-relative">
                            <Image source="home/blog-thumb-01.png" alt="Blog" className="img-fluid" imageFor="frontend" />
                            <div className="blogContent_tag">Dispting</div>
                        </div>
                        <div className="blogContent_note">
                            If you are serious about maximizing your credit repair efforts efficiently and affordably, Upcredit is the ultimate tool. Make sure to read the ultimate Upcredit FAQ to fully understand how you can leverage this powerful DIY Credit Repair system to transform your financial health!
                        </div>
                        
                        <p>Keeping your credit score in good shape is super important, but dealing with credit reports and disputes can feel overwhelming. That’s where Upcredit comes in. With your active subscription to Beast Credit Monitoring, you have access to powerful tools designed to help you fight back against those pesky negative items on your credit report. </p>
                        <p>Every 40 days, you’ll repeat this easy process to send attacks to credit bureaus, secondary bureaus, and data furnishers. If there’s anything negative on your credit report, Upcredit can attack it. This includes late payments, charge-offs, collections, student loans, foreclosures, repossessions, bankruptcies, inquiries—if it’s on your credit report, you can attack it. With just one button, Upcredit, the go-to DIY credit repair software, does all the hard work for you.</p>
                        <Image source="home.png" alt="Blog" className="img-fluid" imageFor="frontend" />
                        <p>Every 40 days, you’ll repeat this easy process to send attacks to credit bureaus, secondary bureaus, and data furnishers. If there’s anything negative on your credit report, Upcredit can attack it. This includes late payments, charge-offs, collections, student loans, foreclosures, repossessions, bankruptcies, inquiries—if it’s on your credit report, you can attack it. With just one button, Upcredit, the go-to DIY credit repair software, does all the hard work for you.</p>
                        <div className="blogContent_footer">
                            <div className="socialMedia d-flex align-items-center justify-content-end">
                                <Link to="#!" className="socialMedia_icon facebook"><em class="bi bi-facebook"></em></Link>
                                <Link to="#!" className="socialMedia_icon twitter"><em class="bi bi-twitter-x"></em></Link>
                                <Link to="#!" className="socialMedia_icon whatsapp"><em class="bi bi-whatsapp"></em></Link>
                                <Link to="#!" className="socialMedia_icon reddit"><em class="bi bi-reddit"></em></Link>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    )
}