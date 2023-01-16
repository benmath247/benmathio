
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

import tw from "twin.macro";

import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";


// import heroScreenshotImageSrc from "images/programmer2.jpeg";

const Row = tw.div`flex`;

const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;

const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
    DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
    AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const SecondaryButton = tw(
    ActionButton
)`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;


export default function HomeHero() {
    const features = [
        `Software development`,
        `Automation`,
        `Amazon Web Services`,
        `Backend: Python, Django, Java`,
        `Frontend: React`,
        "DB: MySQL, MongoDB",
        "Linux",
        "APIs"
    ]
    const primaryButtonText = "Blog"
    // const secondaryButtonUrl = "#componentDemos"
    // const secondaryButtonText = "Portfolio"
    const buttonRoundedCss = ""
    const heading = "Hi, I'm Ben Math!"
    const description = "I'm an aspiring superhero who loves to code, living in NYC. I have been working with websites since I was a child, using code for marketing solutions since 2013, and working as a software engineer since 2020. I strive to learn about all areas of software development so I can add value to any project. I like making great things happen with collaborative and passionate teams of good people."
    const primaryButtonUrl = "/blog"
    return (<>

        <HeroRow>
            <TextColumn>
                <Heading as="h1">{heading}</Heading>
                <Description>{description}</Description>
                <FeatureList>
                    {features.map((feature, index) => (
                        <Feature key={index}>
                            <FeatureIcon />
                            <FeatureText>{feature}</FeatureText>
                        </Feature>
                    ))}
                </FeatureList>
                {/* <Actions> */}
                    {/* <Link to={primaryButtonUrl}><a href="google.com"> */}
                    {/* <PrimaryButton css={buttonRoundedCss}> */}
                    {/* <a href="/blog">
                        {primaryButtonText}
                    </a> */}
                    {/* </PrimaryButton> */}
                    {/* </Link> */}
                    {/* <SecondaryButton href={secondaryButtonUrl}>{secondaryButtonText}</SecondaryButton> */}
                {/* </Actions> */}
            </TextColumn>
            <ImageColumn>
                <ImageContainer>
                    <Image src="https://benmathdotio.s3.amazonaws.com/programmer2-transformed.jpeg" />
                </ImageContainer>
            </ImageColumn>
        </HeroRow>
    </>

    )

}

