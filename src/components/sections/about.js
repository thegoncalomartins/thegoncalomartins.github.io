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
    grid-template-columns: repeat(5, minmax(140px, 200px));
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
    '<a href="https://angular.io" target="_blank"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a>',
    '<a href="https://aws.amazon.com" target="_blank"> <img src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" alt="aws" height="40"/> </a>',
    '<a href="https://www.bugsnag.com/" target="_blank"> <img src="https://yt3.ggpht.com/ytc/AMLnZu8yRuKU29ijBdYYzTn_cAYOirLZLlT1eg3tZqdBXQ=s900-c-k-c0x00ffffff-no-rj" alt="bugsnag" width="40" height="40"/> </a>',
    '<a href="https://www.cprogramming.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a>',
    '<a href="https://www.atlassian.com/software/confluence" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/confluence/confluence-original.svg" alt="confluence" width="40" height="40"/> </a>',
    '<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>',
    '<a href="https://www.datadog.com/" target="_blank"> <img src="https://www.crestdatasys.com/wp-content/uploads/2021/10/Datalog-png-round-for-testimonial-min.png" alt="datadog" width="40" height="40"/> </a>',
    '<a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>',
    '<a href="https://elixir-lang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/elixir/elixir-original.svg" alt="elixir" width="40" height="40"/> </a>',
    '<a href="https://grafana.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" alt="grafana" width="40" height="40"/> </a>',
    '<a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a>',
    '<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>',
    '<a href="https://www.java.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a>',
    '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>',
    '<a href="https://www.jenkins.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="40" height="40"/> </a>',
    '<a href="https://jestjs.io/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="jest" width="40" height="40"/> </a>',
    '<a href="https://www.atlassian.com/software/jira" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg" alt="jira" width="40" height="40"/> </a>',
    '<a href="https://junit.org/junit5/" target="_blank"> <img src="https://assets.steadyhq.com/production/publication/7bc62501-0396-4ad8-974f-797844736877/logo/1537345442?auto=format&crop=faces&fit=crop&fm=png&h=200&w=200" alt="junit" width="40" height="40"/> </a>',
    '<a href="https://kafka.apache.org/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" alt="kafka" width="40" height="40"/> </a>',
    '<a href="https://www.elastic.co/kibana" target="_blank"> <img src="https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg" alt="kibana" width="40" height="40"/> </a>',
    '<a href="https://kotlinlang.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="40" height="40"/> </a>',
    '<a href="https://kubernetes.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="40" height="40"/> </a>',
    '<a href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a>',
    '<a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a>',
    '<a href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a>',
    '<a href="https://neo4j.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/neo4j/neo4j-original-wordmark.svg" alt="neo4j" width="40" height="40"/> </a>',
    '<a href="https://newrelic.com/" target="_blank"> <img src="https://seeklogo.com//images/N/new-relic-logo-E7CC1E9143-seeklogo.com.png" alt="new-relic" width="40" height="40"/> </a>',
    '<a href="https://www.nginx.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a>',
    '<a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>',
    '<a href="https://www.php.net" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a>',
    '<a href="https://www.postgresql.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a>',
    '<a href="https://prometheus.io/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png" alt="prometheus" width="40" height="40"/> </a>',
    '<a href="https://pptr.dev/" target="_blank"> <img src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" alt="puppeteer" height="40"/> </a>',
    '<a href="https://www.rabbitmq.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" alt="rabbitMQ" width="40" height="40"/> </a>',
    '<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>',
    '<a href="https://redis.io" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="40" height="40"/> </a>',
    '<a href="https://www.scylladb.com/" target="_blank"> <img src="https://www.scylladb.com/wp-content/uploads/scylla-opensource-1.png" alt="scylladb" width="40" height="40"/> </a>',
    '<a href="https://spring.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a>',
    '<a href="https://www.terraform.io/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg" alt="terraform" width="40" height="40"/> </a>',
    '<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>',
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
              <a href="https://i2s.pt">i2S Insurance Knowledge</a> as a Software Engineer, in March
              2020. After that journey I embraced a new challenge at{' '}
              <a href="https://talkdesk.com">Talkdesk</a> in June 2021 as a Software Engineer too
              and that's where I am at the moment.
            </p>

            <p>Here are a few technologies and tools I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills &&
              skills.map((skill, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: skill,
                  }}
                ></li>
              ))}
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
