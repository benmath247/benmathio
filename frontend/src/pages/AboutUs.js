import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (<>
    <AnimationRevealPage disabled>
      <Header />
      {/* </AnimationRevealPage>
      <AnimationRevealPage> */}
      <MainFeature1
        description="If you've made it this far, you're checking out one of my full stack applications. This one is with Django and React, but I know other frameworks too. Use my blog to follow my journey of adding more features to this site, learning about code, and building more projects."
        subheading={<Subheading>About BenMath.io</Subheading>}
        heading="Holy microchip, Batman!"
        buttonRounded={false}
        primaryButtonText="See Blog"
        imageSrc="https://www.seekpng.com/png/detail/66-661906_robin-clipart-transparent-background-batman-and-robin-png.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        primaryButtonUrl="blog/"
        />
      <MainFeature1
        subheading={<Subheading>About BenMath</Subheading>}
        heading="A hero can be anyone"
        buttonRounded={false}
        primaryButtonText="Contact"
        imageSrc="https://thumbs.dreamstime.com/z/superhero-coding-d-illustration-superhero-coding-d-illustration-108938036.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        // https://www.dreamstime.com/superhero-coding-d-illustration-superhero-coding-d-illustration-image108938036
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Values</Subheading>}
        heading="Making it happen."
        description="Innovating, learning, and solving complex problems."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Software Engineering",
            description: "Using a wide range of frameworks to fit all of the right projects"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Cloud Management",
            description: "Knowing what it takes to deploy and keep things up and running"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "API Design",
            description: "Making programs talk to each other to improve business processes"
          },
        ]}
        linkText=""
      />
      {/* <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      /> */}
      <MiniCenteredFooter />
    </AnimationRevealPage>
  </>
  );
};
