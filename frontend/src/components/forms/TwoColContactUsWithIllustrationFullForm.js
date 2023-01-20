import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import EmailIllustrationSrc from "images/email-illustration.svg";
// import TwoColContactUsWithIllustration from "./TwoColContactUsWithIllustration";
import swal from "sweetalert";

export const TwoColContactUsWithIllustrationFullForm = () => {
  const formInitialDetails = {
    email: "",
    subject: "",
    name: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [isLoading, setIsloading] = useState(false);
  // const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    if (
      formDetails.name &&
      formDetails.email &&
      formDetails.message &&
      formDetails.subject
    ) {
      setIsloading(true);
    }
    e.preventDefault();

    setButtonText("Sending...");
    console.log(formDetails);

    let response = await fetch("http://0.0.0.0:5000/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.status == 200) {
      setIsloading(false);
      swal({
        // title: "Successfully Complete",
        text: "Message sent successfully",
        className: "successAlert",
        icon: "success",
        buttons: false,
        timer: 2000,
      });
    } else {
      setIsloading(false);
      swal({
        title: "Error",
        text: "Something went wrong, please try again later.",
        className: "errorAlert",
        icon: "warning",
        buttons: false,
        timer: 2000,
      });
    }
    setButtonText("Sent");
  };

  const Container = tw.div`relative`;
  const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
  const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
  const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
  const TextColumn = styled(Column)((props) => [
    tw`md:w-7/12 mt-16 md:mt-0`,
    props.textOnLeft
      ? tw`md:mr-12 lg:mr-16 md:order-first`
      : tw`md:ml-12 lg:ml-16 md:order-last`,
  ]);

  const Image = styled.div((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
  ]);
  const TextContent = tw.div`lg:py-8 text-center md:text-left`;

  const Subheading = tw(SubheadingBase)`text-center md:text-left`;
  const Heading = tw(
    SectionHeading
  )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
  const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

  const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
  const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
  const Textarea = styled(Input).attrs({ as: "textarea" })`
    ${tw`h-24`}
  `;

  const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

  const subheading = "Contact Us";
  const heading = (
    <>
      <span tw="text-primary-500">Get in touch</span>
      <wbr /> with me.
    </>
  );
  const description =
    "I want to hear from you! Send me a message and I'll be sure to get back to you as soon as possible.";
  const formAction = "#";
  const formMethod = "get";
  const textOnLeft = true;

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  useEffect(() => {
    // window.gtag("js", new Date());
    // window.gtag("config", "UA-45799926-9");
  }, [formDetails]);

  return (
    <>
      <div className="jlsoCL">
        <div className="iCxkgG">
          {isLoading && (
            <div class="loaderSpinerdivinContentus">
              <img src="/MnyxU.gif" />
            </div>
          )}
          <ImageColumn>
            <Image imageSrc="https://static.wikia.nocookie.net/pixar/images/8/8b/I2_-_Edna.png" />
          </ImageColumn>
          <div className="fwKSpO bXiwCe">
            <div className="ixheZH">
              {subheading && <Subheading>{subheading}</Subheading>}
              <Heading>{heading}</Heading>
              {description && <Description>{description}</Description>}
              <form
                onSubmit={handleSubmit}
                action={formAction}
                method={formMethod}
                className="iiHoHC"
              >
                <input
                  type="email"
                  name="email"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  placeholder="Your Email Address"
                  value={formDetails.email}
                  className="koIPPu"
                />
                <input
                  type="text"
                  name="name"
                  onChange={(e) => onFormUpdate("name", e.target.value)}
                  placeholder="Full Name"
                  value={formDetails.name}
                  className="koIPPu"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onChange={(e) => onFormUpdate("subject", e.target.value)}
                  value={formDetails.subject}
                  className="koIPPu"
                />
                <textarea
                  name="message"
                  placeholder="Your Message Here"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  value={formDetails.message}
                  className="koIPPu liDmFH"
                />
                <SubmitButton type="submit">{buttonText}</SubmitButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColContactUsWithIllustrationFullForm;
