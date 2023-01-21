import React, { useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import HomeHero from "components/hero/HomeHero.js";
import ThreeColSlider from "components/cards/ThreeColSlider.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import Navigation from '../components/navigation/Nav.js'
import MiniCenteredFooter from "components/footers/MiniCenteredFooter.js";
import SimpleContactUs from "components/forms/SimpleContactUs.js";
import SimplePrimaryBackground from "components/testimonials/SimplePrimaryBackground";
import FullWidthWithImage from "components/hero/FullWidthWithImage.js";
import PrivacyPolicy from "./PrivacyPolicy.js";

export default ({
    features = null,
}) => {
    /*
     * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
     * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
     */
    // useEffect(() => {
    //     window.gtag("js", new Date());
    //     window.gtag("config", "UA-45799926-9");
    // }, [])


    features = features || [
        `Software development`,
        `Automation`,
        `Amazon Web Services`,
        `Backend: Python, Django, Java`,
        `Frontend: React`,
        "DB: MySQL, MongoDB",
        "Linux",
        "APIs"
    ];


    return (
        <AnimationRevealPage disabled>
            <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
                <Content2Xl>
                    <Navigation />
                    {/* <FullWidthWithImage/> */}
                    <PrivacyPolicy />
                </Content2Xl>
            </Container>
        </AnimationRevealPage>
    );
};