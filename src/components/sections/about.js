import React, { useEffect, useRef } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
// const StyledPic = styled.div`
//   position: relative;
//   max-width: 300px;

//   @media (max-width: 768px) {
//     margin: 50px auto 0;
//     width: 70%;
//   }

//   .wrapper {
//     ${({ theme }) => theme.mixins.boxShadow};
//     display: block;
//     position: relative;
//     width: 100%;
//     border-radius: var(--border-radius);
//     background-color: var(--green);

//     &:hover,
//     &:focus {
//       background: transparent;
//       outline: 0;

//       &:after {
//         top: 15px;
//         left: 15px;
//       }

//       .img {
//         filter: none;
//         mix-blend-mode: normal;
//       }
//     }

//     .img {
//       position: relative;
//       border-radius: var(--border-radius);
//       mix-blend-mode: multiply;
//       filter: grayscale(100%) contrast(1);
//       transition: var(--transition);
//     }

//     &:before,
//     &:after {
//       content: '';
//       display: block;
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       border-radius: var(--border-radius);
//       transition: var(--transition);
//     }

//     &:before {
//       top: 0;
//       left: 0;
//       background-color: var(--navy);
//       mix-blend-mode: screen;
//     }

//     &:after {
//       border: 2px solid var(--green);
//       top: 20px;
//       left: 20px;
//       z-index: -1;
//     }
//   }
// `;

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.JPG" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
  //           ...GatsbyImageSharpFluid_withWebp_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Javascript (Vanilla, Node.js)',
    'Java (Spring, Quarkus, Vert.x)',
    'Kotlin (Spring, Quarkus)',
    'Elixir (Phoenix)',
    'PHP',
    'PostgreSQL',
    'MongoDB',
    'Neo4j',
    'Redis',
    'Kafka',
    'RabbitMQ',
    'Docker',
    'Kubernetes',
    'Terraform',
    'AWS (Amazon Web Services)',
    'Jenkins',
    'React',
    'Angular',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>I'm Gonçalo Martins, a Software Engineer from Porto, Portugal.</p>

            <p>
              I'm very interested in technology and how it can change the world to make it a better
              place.
            </p>

            <p>
              I've started my professional career as a trainee at{' '}
              <a href="https://noniussolutions.com">Nonius Hospitality Technology</a> in 2019, where
              I developed my final project of the BSc in Software Engineering. In August of the same
              year I joined <a href="https://byside.com">BySide</a> where I got my first job as a
              Junior Backend Engineer and stayed there for 6 months, then I decided to move to{' '}
              <a href="https://i2s.pt">i2S Insurance Knowledge</a> as a Software Engineer. After
              that journey I embraced a new challenge at <a href="https://talkdesk.com">Talkdesk</a>{' '}
              in June 2021 as a Software Engineer too and that's where I am at the moment.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        {/* <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic> */}
      </div>
    </StyledAboutSection>
  );
};

export default About;
