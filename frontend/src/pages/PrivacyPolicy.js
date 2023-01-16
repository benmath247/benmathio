import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import TwoColumnWithPrimaryBackground from "components/hero/TwoColumnWithPrimaryBackground";
import TwoColumnWithFeaturesAndTestimonial from "components/hero/TwoColumnWithFeaturesAndTestimonial";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";
import axios from "axios";

function BlogDetail() {
  const Subheading = tw(SubheadingBase)`mb-4`;
  const HeadingRow = tw.div`flex`;
  const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
  const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

  let { slug } = useParams();
  const [blog, setBlog] = useState({})
  async function fetchBlog() {
    try {
      let res = await axios.get(`http://localhost:8000/posts/${slug}`)
      setBlog(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [])

  // export default ({ body="body", subheading="This is a subheading", dateCreate="1/2/32", owner="Ben Math"}) => {
    console.log(blog)
  return (
    <AnimationRevealPage>
      <Container>
        <Content2Xl>
          <HeadingRow>
            <Heading>{blog.title}</Heading>
          </HeadingRow>
          <Subheading><em>{blog.created}</em> | {blog.owner}</Subheading>
          <Subheading>{blog.description}</Subheading>
          <Text>
          <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
            <br/><br/><br/><br/>
          </Text>
        </Content2Xl>
      </Container>
      <MiniCenteredFooter />
    </AnimationRevealPage>
  );
};

export default BlogDetail;