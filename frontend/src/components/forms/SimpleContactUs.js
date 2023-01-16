import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg"
import Navigation from "components/navigation/Nav";
import ContactUs from "pages/ContactUs";
const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;



const SimpleContactUs = () => {

  const FormContainer = styled.div`
${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
form {
  ${tw`mt-4`}
}
h2 {
  ${tw`text-3xl sm:text-4xl font-bold`}
}
input,textarea {
  ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};
  
  ::placeholder {
    ${tw`text-gray-500`}
  }
}
`;


  const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

  const formInitialDetails = {
    email: '',
    subject: 'no subject',
    name: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    console.log(formDetails)
    let response = await fetch("http://0.0.0.0:5000/contact", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
    setButtonText("Sent")
  };

  const onFormUpdate = (category, value) => {

    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }



  return (
    <Container>
      {/* <Navigation/> */}
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input id="name-input" onChange={(e) => onFormUpdate('name', e.target.value)} value={formDetails.name} type="text" name="name" placeholder="E.g. Clark Kent" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input id="email-input" onChange={(e) => onFormUpdate('email', e.target.value)} value={formDetails.email} type="email" name="email" placeholder="E.g. superman@mail.com" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Your Message</Label>
                    <TextArea id="message-input" onChange={(e) => onFormUpdate('message', e.target.value)} value={formDetails.message} name="message" placeholder="How can I help you?" />
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit" value="Submit" onSubmit={handleSubmit}>Submit</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};

export default SimpleContactUs









// import React, { useState } from "react";
// import tw from "twin.macro";
// import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
// import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import EmailIllustrationSrc from "images/email-illustration.svg";
// import TwoColContactUsWithIllustration from "./TwoColContactUsWithIllustration";


// export const TwoColContactUsWithIllustrationFullForm = () => {

  // const formInitialDetails = {
  //   email: '',
  //   subject: '',
  //   name: '',
  //   message: ''
  // }
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState('Send');
  // const [status, setStatus] = useState({});


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   console.log(formDetails)
  //   let response = await fetch("http://0.0.0.0:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code == 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully' });
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
  //   }
  //   setButtonText("Sent")
  // };


  // const Container = tw.div`relative`;
  // const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
  // const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
  // const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
  // const TextColumn = styled(Column)(props => [
  //   tw`md:w-7/12 mt-16 md:mt-0`,
  //   props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
  // ]);

  // const Image = styled.div(props => [
  //   `background-image: url("${props.imageSrc}");`,
  //   tw`rounded bg-contain bg-no-repeat bg-center h-full`,
  // ]);
  // const TextContent = tw.div`lg:py-8 text-center md:text-left`;

  // const Subheading = tw(SubheadingBase)`text-center md:text-left`;
  // const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
  // const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

  // const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
  // const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
  // const Textarea = styled(Input).attrs({ as: "textarea" })`
  // ${tw`h-24`}
  // `

  // const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`


  // const subheading = "Contact Us"
  // const heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr /> with us.</>
  // const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  // const formAction = "#"
  // const formMethod = "get"
  // const textOnLeft = true

  // const onFormUpdate = (category, value) => {
  //   setFormDetails({
  //     ...formDetails,
  //     [category]: value
  //   })
  // }

//   return (
//     <Container>
//       <TwoColumn>
//         <ImageColumn>
//           <Image imageSrc={EmailIllustrationSrc} />
//         </ImageColumn>
//         <TextColumn textOnLeft={textOnLeft}>
//           <TextContent>
//             {subheading && <Subheading>{subheading}</Subheading>}
//             <Heading>{heading}</Heading>
//             {description && <Description>{description}</Description>}
//             <Form onSubmit={handleSubmit} action={formAction} method={formMethod}>
//               <Input type="email" name="email" onChange={(e) => onFormUpdate('email', e.target.value)} placeholder="Your Email Address" value={formDetails.email} />
//               <Input type="text" name="name" onChange={(e) => onFormUpdate('name', e.target.value)} placeholder="Full Name" value={formDetails.name} />
//               <Input type="text" name="subject" placeholder="Subject" onChange={(e) => onFormUpdate('subject', e.target.value)} value={formDetails.subject} />
//               <Textarea name="message" placeholder="Your Message Here" onChange={(e) => onFormUpdate('message', e.target.value)} value={formDetails.message} />
//               <SubmitButton type="submit">{buttonText}</SubmitButton>
//             </Form>
//           </TextContent>
//         </TextColumn>
//       </TwoColumn>
//     </Container>
//   );
// };

