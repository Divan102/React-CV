import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false); // State for waiting period
    const toRotate = ["Software Developer", "Software Engineer", "Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const deletionSpeed = 350; // Fixed deletion speed
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta]);

    useEffect(() => {
        let cursorBlink = setInterval(() => {
            setBlink(prevBlink => !prevBlink);
        }, 500);

        return () => { clearInterval(cursorBlink) };
    }, []);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(deletionSpeed); // Fixed speed for deletion
        } else {
            setDelta(300 - Math.random() * 100); // Regular speed for typing
        }

        if (!isDeleting && updatedText === fullText) {
            setIsWaiting(true); // Start waiting period
            setTimeout(() => {
                setIsDeleting(true);
                setIsWaiting(false); // End waiting period
                setDelta(deletionSpeed); // Fixed speed for deletion
            }, 1500); // 1 second delay before starting to delete
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500 - Math.random() * 100); // Reset delta for the next word
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'I am Divan Swanepoel '}<span className="wrap">{text}<span className="cursor">{blink ? '|' : ' '}</span></span></h1>
                        <p>This is a paragraph about myself:</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
