import React, { useEffect, useState } from "react";
import {  Modal} from "react-bootstrap";
import CreditScore from "./CreditScore";
import MoneyBack from "./MoneyBack";
import Blog from "./Blog";
import Banner from "./banner";
import FinancialHealth from "./FinancialHealth";
import Struggle from "./Struggle";
import Reviews from "./Reviews";
import StepsProcess from "./StepsProcess";
import 'aos/dist/aos.css';
import { GetFinancial } from "../../../components";
import Aos from "aos";


function UserHome() {
    // video modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   

    // aos animation
    useEffect(() => {
      Aos.init({
        duration: 1000,  // animation speed
        once: true,      // scroll par ek hi baar chale
      });
    }, []);
    return (
        <>
            <main className="homePage">
                {/* banner  */}
                <Banner handleShow={handleShow} />
                {/* Struggle */}
                <Struggle/>
                {/* Financial health */}
                <FinancialHealth />
                {/* reviews */}
                <Reviews/>
                {/* steps proces */}
                <StepsProcess/>
                {/* creadit score */}
                <CreditScore/>
                {/* money back */}
                <MoneyBack/>
                {/* get financial feture */}
                <GetFinancial/>
                {/* blog */}
            </main>

            {/* video */}
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="videoModal">
                <Modal.Header  className="bg-transparent pb-1 pe-0">
                    <button type="button" className="close bg-transparent border-0 ms-auto text-white p-0" onClick={handleClose} aria-label="Close">
                        <em className="bi bi-x"></em>
                    </button>
                </Modal.Header>
                <Modal.Body className="p-0" bg="transparent">
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/nB8JOUEsQVs"  frameBorder="0"  allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    );
}   

export default UserHome;