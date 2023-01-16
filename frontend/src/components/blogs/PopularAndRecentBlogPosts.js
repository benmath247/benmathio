import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import axios from 'axios'
// import json from 'json'
import styled from "styled-components";
// import { FunctionField } from 'react-admin';
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import {
  Container
  //, ContentWithPaddingXl 
} from "components/misc/Layouts.js";
import Navigation from "components/navigation/Nav";
import { Content2Xl } from "components/misc/Layouts.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;
const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;


const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
// const PostTextContainer = tw.div``

// export default () => {
// This setting is for animating the post background image on hover
export default function BlogIndex() {
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  const [FeaturedPostList, setFeaturedPostList] = useState([])
  async function fetchFeaturedBlogList() {
    try {
      let resp = await axios.get("http://localhost:8000/posts/featured")
      setFeaturedPostList(resp.data.reverse())
    } catch (e) {
      console.log(e)
    }
  }

  const [UnfeaturedPostList, setUnfeaturedPostList] = useState([])
  async function fetchUnfeaturedBlogList() {
    try {
      let resp = await axios.get("http://localhost:8000/posts/unfeatured")
      setUnfeaturedPostList(resp.data.reverse())
    } catch (e) {
      console.log(e)
    }
  }

  const [CategoriesList, setCategoriesList] = useState([])
  async function fetchCategoriesList() {
    try {
      let resp = await axios.get("http://localhost:8000/categories")
      setCategoriesList(resp.data.reverse())
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchFeaturedBlogList()
    fetchUnfeaturedBlogList()
    fetchCategoriesList()
  }, [])
  //Recommended: Only 2 Items
  // const popularPosts = [
  //   {
  //     postImageSrc:
  //       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
  //     authorImageSrc:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
  //     title: "Tips on how to travel safely in foreign countries",
  //     description:
  //       "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
  //     authorName: "Charlotte Delos",
  //     authorProfile: "Travel Advocate",
  //     url: "https://timerse.com"
  //   },
  //   {
  //     postImageSrc:
  //       "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
  //     authorImageSrc:
  //       "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
  //     title: "Enjoying the beach life while on a vacation",
  //     description:
  //       "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
  //     authorName: "Adam Cuppy",
  //     authorProfile: "Vlogger",
  //     url: "https://reddit.com"
  //   }
  // ];

  // const recentPosts = [
  //   {
  //     postImageSrc:
  //       "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
  //     title: "Getting the most out of your vacation",
  //     authorName: "Aaron Patterson",
  //     url: "https://reddit.com"
  //   },
  //   {
  //     postImageSrc:
  //       "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
  //     title: "Choosing the perfect Safaris in Africa",
  //     authorName: "Sam Phipphen",
  //     url: "https://reddit.com"
  //   },
  //   {
  //     postImageSrc:
  //       "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
  //     title: "Hiking during the monsoon in Asia",
  //     authorName: "Tony Hawk",
  //     url: "https://timerse.com"
  //   },
  //   {
  //     postImageSrc:
  //       "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
  //     title: "Must carry items while travelling to Thailand",
  //     authorName: "Himali Turn",
  //     url: "https://timerse.com"
  //   },
  //   {
  //     postImageSrc:
  //       "https://images.unsplash.com/photo-1546971587-02375cbbdade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80",
  //     title: "An extremely funny trip to the Swiss Alps",
  //     authorName: "Naomi Watts",
  //     url: "https://timerse.com"
  //   },
  // ]

  return (

    // <AnimationRevealPage>
    <>
      <AnimationRevealPage disabled>
        <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
          <Content2Xl>
            {/* <Header /> */}
            <Navigation />
            {/* <Row>
              <PopularPostsContainer>
                <Heading>Blog</Heading>
                <PostsContainer>
                  {FeaturedPostList.map((post) => (
                    <Post key={post.title} href={`/view-post/${post.slug}`} className="group" initial="rest" whileHover="hover" animate="rest">
                      <Image
                        transition={{ duration: 0.3 }}
                        variants={postBackgroundSizeAnimation}
                        $imageSrc={post.imageSrc}
                      />
                      <Title>{post.title}</Title>
                      {/* <p>{console.log(post.category1)}</p> */}
                      {/* <Description>{post.description}</Description>
                      <AuthorInfo>
                        <AuthorImage src={post.authorImageSrc} />
                        <AuthorNameAndProfession>
                          <AuthorName>{post.owner}</AuthorName>
                          <AuthorProfile>{post.authorProfile}</AuthorProfile>
                        </AuthorNameAndProfession>
                      </AuthorInfo>
                    </Post>
                  ))}
                </PostsContainer>
              </PopularPostsContainer> */}
              {/* <RecentPostsContainer>
                <Heading>Topics</Heading>
                {CategoriesList.map((category) => (
                  <>
                    <a href={`/category/${category.name}`}>
                      <Title><a href={`/category/${category.name}`}>{category.name}</a></Title>
                      <Image href={`/category/${category.name}`} $imageSrc={category.image} />
                    </a></>
                ))}
              </RecentPostsContainer> 
            </Row> */}
            <Heading>Blog</Heading>
            <ThreeColumn>
              {UnfeaturedPostList.map((post, title) => (
                <Column key={title}>
                  <Card>
                    <Image $imageSrc={post.imageSrc} onClick='#' />
                    <Category>{post.category}</Category>
                    <Title>{post.title}</Title>
                    <Link href={`/view-post/${post.slug}`}>Read Post</Link>
                  </Card>
                </Column>
              ))}
            </ThreeColumn>
            <br /><br />
            <MiniCenteredFooter />
          </Content2Xl>
        </Container>
      </AnimationRevealPage>
    </>
  );
};
