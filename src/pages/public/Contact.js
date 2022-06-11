// dependencies
import React, { createRef, useState } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
// services
// import { useAddNewMessageMutation } from '../../services/booshjaAPI';
import sendEmail from '../../services/emailService';
// components
import {
  PageContainer,
  MainContent,
  LeftSide,
  FormError,
  MailImg,
} from './styles/containers';
import { FormSubmitBtn } from './styles/buttons';
import { Result, LoadingSpinner } from '../../components';
import {
  PageTitle,
  ContactForm,
  ContactInput,
  ContactLabel,
  ContactText,
  ContactTextArea,
  ReCAPTCHALink,
  ReCAPTCHAText,
} from './styles/typography';
// assets
import MailBoxes from '../../assets/po-boxes.jpeg';

const ContactContainer = styled(PageContainer)`
  background-color: ${({ theme: t }) => t.bgSecondary};
`;

const RightSide = styled.div`
  display: flex;
  height: 75vh;
  margin-left: 8rem;
`;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [addNewMessage, { isLoading }] = useAddNewMessageMutation();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [emailSent, setEmailSent] = useState(false);
  const [approval, setApproval] = useState(false);
  const [error, setError] = useState(false);

  let content;
  const recaptchaRef = createRef();
  const sitekey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const onSubmit = async (formData) => {
    try {
      setData(formData);
      setLoading(true);
      console.log('executing');
      recaptchaRef.current.execute();
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const recaptchaChange = async () => {
    if (!emailSent) {
      console.log('Sending email!', data);
      await sendEmail(data);
      setEmailSent(true);
      setApproval(true);
      setLoading(false);
    }
  };

  if (loading) {
    content = (
      <>
        <PageTitle>contact()</PageTitle>
        <MainContent className="center">
          <LoadingSpinner />
        </MainContent>
      </>
    );
  } else if (approval) {
    content = (
      <>
        <PageTitle>contact()</PageTitle>
        <Result approval className="slide-in-left" />
      </>
    );
  } else if (error) {
    content = (
      <>
        <PageTitle>contact()</PageTitle>
        <Result className="slide-in-left" />
      </>
    );
  } else {
    content = (
      <>
        <PageTitle>contact()</PageTitle>
        <MainContent className="slide-in-left">
          <LeftSide>
            <ContactText>
              Have a question, thoughts, or want to work together?
            </ContactText>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
              <ContactLabel htmlFor="name">Name:</ContactLabel>
              <ContactInput
                type="text"
                placeholder="Namey McNameson"
                id="name"
                {...register('name', { required: 'Name is required.' })}
              />
              {errors.name && <FormError>{errors.name.message}</FormError>}
              <ContactLabel htmlFor="email">Email:</ContactLabel>
              <ContactInput
                type="text"
                placeholder="example@email.com"
                id="email"
                {...register('email', { required: 'Email is required.' })}
              />
              {errors.email && <FormError>{errors.email.message}</FormError>}
              <ContactLabel htmlFor="name">Message:</ContactLabel>
              <ContactTextArea
                placeholder="I had an idea for you..."
                id="message"
                maxLength="200"
                rows="4"
                // es-lint-ignore-next-line
                {...register('message', {
                  required: 'Message is required.',
                  maxLength: {
                    value: 200,
                    message: 'Maximum message length 200 characters.',
                  },
                })}
              />
              {errors.message && (
                <FormError>{errors.message.message}</FormError>
              )}
              <ReCAPTCHAText>
                This site is protected by reCAPTCHA and the Google&nbsp;
                <ReCAPTCHALink href="https://policies.google.com/privacy">
                  Privacy Policy
                </ReCAPTCHALink>
                &nbsp;and&nbsp;
                <ReCAPTCHALink href="https://policies.google.com/terms">
                  Terms of Service
                </ReCAPTCHALink>
                &nbsp;apply.
              </ReCAPTCHAText>
              <FormSubmitBtn type="submit">Submit</FormSubmitBtn>
            </ContactForm>
          </LeftSide>
          <RightSide>
            <MailImg src={MailBoxes} alt="Wall of blue P.O. Boxes." />
          </RightSide>
        </MainContent>
      </>
    );
  }

  return (
    <ContactContainer>
      {content}
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={sitekey}
        onChange={recaptchaChange}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </ContactContainer>
  );
};

export default Contact;
