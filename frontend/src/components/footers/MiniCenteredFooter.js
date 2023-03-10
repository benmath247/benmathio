import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            {/* <LogoImg src={logo} /> */}
            <LogoText>BenMath.io</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="https://docs.google.com/document/d/17JA9cJ-SORMmOwBwrK2uofu6XVnVmqTvXo8fTVGIs6s/edit?usp=sharing" target="_blank">Resume</Link>
            <Link href="/contact">Contact</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.github.com/benmath247">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.twitter.com/benmath247">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/benmath.247">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </Row>
      </Content>
    </Container>
  );
};
