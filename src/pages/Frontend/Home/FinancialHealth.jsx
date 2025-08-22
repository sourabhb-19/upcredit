import { Col, Container, Row } from "react-bootstrap";
import { Image } from "../../../components/CommonElement";

export default function FinancialHealth(){
    return(
        <>
            <section className="financialHealth py-60 bg-light">
                <Container> 
                    <div className="commonHeading text-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
                        <h2 className="commonHeading_title text-dark">
                            Equipping you with the ability to <br className="d-none d-md-block" /> take full control of <span>your Financial health</span>
                        </h2>
                        <p className="commonHeading_cnt">At Upcredit, we aim to be more than just another app. We strive to become <br className="d-md-block d-none" /> your trusted partner in your pocket, dedicated to improving your financial well-being.</p>
                    </div>
                    <div className="financialHealth_fullsec d-flex align-items-center justify-content-between gap-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-easing="linear">
                        <h2 className="text-white mb-0">AI that helps you take control of your Credit & financial future</h2>
                        <Image source="home/credit-report.webp" alt="Credit report" className="img-fluid" imageFor="frontend" />
                    </div>
                    <Row className=" gy-3 gy-lg-3 mt-2 mt-lg-4">
                        <Col md={6} data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="linear">
                            <div className="financialHealth_card text-center">
                                <div className="text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="80" height="80" x="0" y="0" viewBox="0 0 30 30"  xmlSpace="preserve" ><g><path d="M25.748 19.035c.98-.004.981-1.496 0-1.5h-1.867c-.98.004-.981 1.496 0 1.5zM15.765 9.414V7.553a.75.75 0 0 0-1.5 0v1.861c.005.98 1.496.981 1.5 0zM8.22 12.546c.694.668 1.729-.365 1.061-1.06l-1.319-1.32c-.696-.69-1.752.364-1.061 1.061l1.319 1.319zM4.282 17.535c-.98.004-.981 1.496 0 1.5h1.867c.98-.004.981-1.496 0-1.5zM12.835 20.466a3.088 3.088 0 0 0 4.36 0c.994-1.078 3.701-6.411 4.182-7.631.133-.565-.486-1.056-1.009-.827-.077.016-1.933.92-3.849 1.906-2.702 1.166-6.368 3.348-3.684 6.552zm1.06-3.3c1.537-1.166 3.421-1.967 5.107-2.831a37.917 37.917 0 0 1-2.867 5.07 1.584 1.584 0 0 1-2.239-2.239z" fill="currentcolor" opacity="1" data-original="currentcolor" ></path><path d="M22.892 5.809C11.667-1.363-2.763 9.311.777 22.127c.258.961 1.711.568 1.448-.391-3.912-17.15 20.328-23.694 25.582-6.913A13.246 13.246 0 0 1 26.434 25H3.176c-.973 0-.986 1.497 0 1.5h23.679a.752.752 0 0 0 .634-.349c4.348-6.886 2.29-15.994-4.597-20.342z" fill="currentcolor" opacity="1" data-original="currentcolor" ></path></g></svg>                                        
                                </div>
                                <h3 className="mt-3 mt-md-4">Financial overview & Scores from all 3 Bureaus</h3>
                                <p className="mb-0">Cost should never be a barrier when it comes to improving personal financial health, and we stand by this.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div className="financialHealth_card text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="350" data-aos-easing="linear">
                            <div className="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="80" height="80" x="0" y="0" viewBox="0 0 512.009 512.009"  xmlSpace="preserve" ><g><path d="M495.617 367.387H436.84V172.604c0-9.052-7.331-16.383-16.383-16.383s-16.392 7.331-16.392 16.383V387c0 9.185-9.144 16.947-20.024 17.08-.095-.002-.186-.014-.281-.014-.178 0-.351.021-.528.027h-62.816c-.177-.006-.349-.027-.528-.027s-.351.021-.528.027h-62.834c-.177-.006-.349-.027-.527-.027s-.35.021-.527.027h-62.826c-.177-.006-.349-.027-.527-.027s-.35.021-.527.027h-62.826c-.177-.006-.349-.027-.527-.027-.095 0-.187.013-.281.014-10.889-.133-20.024-7.895-20.024-17.08V125.045c0-9.265 9.301-17.093 20.305-17.093H383.76c11.005 0 20.305 7.828 20.305 17.093v3.213c0 9.052 7.339 16.383 16.392 16.383h75.16c9.052 0 16.392-7.331 16.392-16.383s-7.339-16.383-16.392-16.383h-60.659c-4.723-16.174-17.922-29.08-34.807-34.244V25.612c0-9.052-7.339-16.383-16.392-16.383-9.052 0-16.383 7.331-16.383 16.383v49.574H336.27V25.612c0-9.052-7.331-16.383-16.383-16.383s-16.392 7.331-16.392 16.383v49.574H272.38V25.612c0-9.052-7.339-16.383-16.383-16.383s-16.383 7.331-16.383 16.383v49.574h-31.115V25.612c0-9.052-7.339-16.383-16.383-16.383s-16.383 7.331-16.383 16.383v49.574h-31.115V25.612c0-9.052-7.331-16.383-16.383-16.383s-16.383 7.331-16.383 16.383v52.016c-16.884 5.16-30.073 18.065-34.795 34.238H16.383C7.339 111.866 0 119.196 0 128.249c0 9.052 7.339 16.383 16.383 16.383h58.786v222.755H16.383C7.339 367.387 0 374.717 0 383.769c0 9.052 7.339 16.383 16.383 16.383H77.06c4.721 16.173 17.91 29.083 34.796 34.246v51.999c0 9.052 7.331 16.383 16.383 16.383 9.043 0 16.383-7.331 16.383-16.383V436.84h31.115v49.556c0 9.052 7.331 16.383 16.383 16.383 9.043 0 16.383-7.331 16.383-16.383V436.84h31.115v49.556c0 9.052 7.331 16.383 16.383 16.383s16.383-7.331 16.383-16.383V436.84h31.115v49.556c0 9.052 7.339 16.383 16.392 16.383 9.043 0 16.383-7.331 16.383-16.383V436.84h31.106v49.556c0 9.052 7.331 16.383 16.383 16.383s16.392-7.331 16.392-16.383v-52c16.886-5.163 30.073-18.071 34.795-34.244h60.67c9.043 0 16.392-7.331 16.392-16.383-.003-9.052-7.343-16.382-16.395-16.382z" fill="currentcolor" opacity="1" data-original="currentcolor" ></path><path d="M495.617 303.506h-31.771c-9.052 0-16.383 7.331-16.383 16.383s7.331 16.383 16.383 16.383h31.771c9.043 0 16.392-7.331 16.392-16.383s-7.34-16.383-16.392-16.383zM495.617 239.617h-31.771c-9.052 0-16.383 7.331-16.383 16.383s7.331 16.383 16.383 16.383h31.771c9.043 0 16.392-7.331 16.392-16.383s-7.34-16.383-16.392-16.383zM495.617 175.737h-31.771c-9.052 0-16.383 7.331-16.383 16.383s7.331 16.383 16.383 16.383h31.771c9.043 0 16.392-7.331 16.392-16.383s-7.34-16.383-16.392-16.383zM16.383 336.272h31.78c9.043 0 16.383-7.331 16.383-16.383s-7.331-16.383-16.383-16.383h-31.78C7.339 303.506 0 310.846 0 319.889s7.339 16.383 16.383 16.383zM16.383 272.383h31.78c9.043 0 16.383-7.322 16.383-16.374s-7.331-16.383-16.383-16.383h-31.78C7.339 239.626 0 246.965 0 256.009c0 9.043 7.339 16.374 16.383 16.374zM16.383 208.503h31.78c9.043 0 16.383-7.331 16.383-16.383s-7.331-16.383-16.383-16.383h-31.78C7.339 175.737 0 183.068 0 192.12s7.339 16.383 16.383 16.383zM203.08 170.27a16.373 16.373 0 0 0-15.265 10.428l-54.091 138.703c-3.284 8.44.879 17.936 9.31 21.219 8.44 3.284 17.936-.887 21.219-9.31l8.583-22.009h60.488l8.583 22.009c2.52 6.479 8.706 10.437 15.264 10.437 1.979 0 3.994-.364 5.955-1.127 8.422-3.284 12.602-12.788 9.31-21.219l-54.091-138.703a16.382 16.382 0 0 0-15.265-10.428zm-17.467 106.266 17.467-44.791 17.467 44.791h-34.934zM348.723 203.036c9.043 0 16.392-7.331 16.392-16.383s-7.339-16.383-16.392-16.383H302.85c-9.052 0-16.383 7.331-16.383 16.383s7.331 16.383 16.383 16.383h6.55v105.946h-6.55c-9.052 0-16.383 7.331-16.383 16.383s7.331 16.383 16.383 16.383h45.873c9.043 0 16.392-7.331 16.392-16.383s-7.339-16.383-16.392-16.383h-6.541V203.036h6.541z" fill="currentcolor" opacity="1" data-original="currentcolor" ></path></g></svg>
                            </div>
                            <h3 className="mt-3 mt-md-4">AI Disputing Engine that does the hard work for you</h3>
                            <p className="mb-0">Our AI engine reviews and highlights the negative items in your report, you’ll know what to attack.</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}