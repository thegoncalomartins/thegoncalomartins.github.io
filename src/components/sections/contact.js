import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { useStaticQuery, graphql } from 'gatsby';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            contactTitle
            contactSubtitle
            opportunitiesMessage
            sayHelloMessage
          }
        }
      }
    `,
  );

  const { contactTitle, contactSubtitle, opportunitiesMessage, sayHelloMessage } =
    site.siteMetadata;

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">{contactTitle}</h2>

      <h2 className="title">{contactSubtitle}</h2>

      <p>{opportunitiesMessage}</p>

      <a className="email-link" href={`mailto:${email}`}>
        {sayHelloMessage}
      </a>
    </StyledContactSection>
  );
};

export default Contact;
