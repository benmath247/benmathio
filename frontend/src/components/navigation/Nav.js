import React from "react";
import tw from "twin.macro";
// eslint-disable-next-line
import styled from "styled-components";
// eslint-disable-next-line
import { css } from "styled-components/macro";
import { LogoLink } from "components/headers/light.js";
import logo from "images/logo.png";



function Navigation() {
    const Row = tw.div`flex`;
    const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
    const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
    const PrimaryNavLink = tw(
        NavLink
    )`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;

    return (<>
        <NavRow>
            <LogoLink href="/">
                <img src={logo} alt="" />
                BenMath.io
            </LogoLink>
            <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
                {/* <NavLink target="_blank" href="https://owaiskhan.me/post/free-tailwindcss-react-ui-kit">
                    Projects
                </NavLink> */}
                <NavLink href="/">
                Home
              </NavLink>
                <NavLink href="/blog">
                    Blog
                </NavLink>
                <NavLink href="/about">
                    About
                </NavLink>

                <NavLink target="_blank" href="#">
                <a href="#endpoint for resume" download="success">
                    Resume
                </a>
                </NavLink>
                <div tw="md:hidden flex-100 h-0"></div>
                <PrimaryNavLink href="/contact">
                    Get in Touch
                </PrimaryNavLink>
            </div>
        </NavRow>
    </>

    )
}

export default Navigation;