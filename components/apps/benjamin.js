import Image from "next/image";
import { Component } from "react";
import ReactGA from "react-ga";

export class AboutBenjamin extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => { },
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      education: <Education />,
      history: <History />,
      projects: <Projects />,
      skills: <Skills />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.pageview(`/${screen}`);

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className="w-3 md:w-4"
            alt="benjamin liu about"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="benjamin's education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="history"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "history"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="benjamin's history"
            src="./themes/Yaru/status/work-history.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className="w-3 md:w-4"
            alt="benjamin's projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className="w-3 md:w-4"
            alt="benjamin's skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className="w-3 md:w-4"
            alt="benjamin's resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutBenjamin;

export const displayAboutBenjamin = () => {
  return <AboutBenjamin />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-32 mt-4 bg-white rounded-full">
        <img
          className="w-full rounded-full"
          src="./images/logos/benjaminliu.jpg"
          alt="Benjamin Liu Logo"
        />
      </div>
      <div className=" mt-2 text-lg md:text-2xl text-center px-1">
        <div>
          Hi, I'm <span className="font-bold">Benjamin</span>,
        </div>
        <div className="font-normal ml-1">
          <span className="text-pink-600 font-bold">
            Senior Software Engineer.
          </span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-4 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <div className="flex items-center gap-5">
        <Image
          src="/images/logos/linkedin.svg"
          alt="linkedin logo"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={() => window.open("https://linkedin.com/in/benjamin-liu-723350383", "_blank")}
        />
        <Image
          src="/images/logos/email.svg"
          alt="email logo"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={() => window.open("mailto:benjaminliu5050@gmail.com", "_blank")}
        />
      </div>
      <ul className="my-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className="list-pc my-2 md:text-base">
          10+ years of experience building scalable SaaS platforms across e-commerce, fintech, security, and healthcare, specializing in cloud-native architecture, distributed systems, and modern TypeScript/Node.js ecosystems.
        </li>
        <li className="list-pc my-2 md:text-base">
          My key differentiator is designing secure, high-concurrency APIs and identity platforms (SSO, OAuth, JWT, RBAC) while driving performance through observability (logging, monitoring, tracing).
        </li>
        <li className="list-pc my-2 md:text-base">
          I’ve led end-to-end delivery of systems supporting 5M+ daily operations with measurable reliability and growth impact.
        </li>
      </ul>
    </>
  );
}
function History() {
  const project_list = [
    {
      company: "PrimeiTek",
      role: "Senior Software Engineer",
      location: "Northridge, CA",
      date: "Feb 2020 - Jan 2026",
      link: "#",
      description: [
        <p>
          Led a team of 6 engineers delivering large-scale customer-facing platforms across eCommerce/Subscription, fintech payments, and HIPAA-aligned healthcare workflows, owning architecture, performance, and end-to-end delivery from discovery to production.
        </p>,
        <p>
          Architected and delivered end-to-end full stack solutions using Next.js, React, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, and Redis, scaling platforms to 5M+ daily operations with high availability and sub-second API response targets.
        </p>,
        <p>
          Led system design for microservices and platform foundations: API gateway patterns, caching strategies, connection pooling, and horizontal scaling across AWS/Azure, improving API latency by 32% through profiling, query optimization, and cache tuning.
        </p>,
        <p>
          Owned large eCommerce and subscription initiatives (catalog → checkout → post-purchase), integrating Stripe and PayPal payment flows (tokenization, webhooks, retries, idempotency), plus ACH fund movement patterns aligned with PCI compliance and secure authorization standards.
        </p>,
        <p>
          Delivered HIPAA-aligned healthcare capabilities by implementing secure access patterns, audit-friendly workflows, and privacy-conscious architecture across internal tools and patient-facing experiences, collaborating closely with compliance-minded stakeholders.
        </p>,
        <p>
          Drove growth outcomes by improving acquisition funnel and onboarding journeys through analytics-driven iteration, performance monitoring, and experimentation, increasing onboarding conversion by 18% across key touchpoints.
        </p>,
        <p>
          Built and maintained design systems and reusable component libraries (React/TypeScript), translating Figma into accessible, production-ready UI with measurable improvements to frontend performance and maintainability.
        </p>,
        <p>
          Designed distributed backend workflows including scheduling, queuing, rate limiting, and serverless task processing to support high-volume JSON pipelines and workflow orchestration with strong retry/timeout/error-handling standards.
        </p>,
        <p>
          Implemented enterprise-grade Identity & Access Management: JWT, OAuth, SSO integrations, RBAC, and scalable permissions modeling; delivered team management and role-based authorization patterns for multi-tenant environments.
        </p>,
        <p>
          Improved reliability and operational readiness by implementing structured logging, monitoring, tracing, and automated alerting, reducing production incidents by 27% and shortening MTTR via better runbooks and dashboards.
        </p>,
        <p>
          Established coding standards and clean code practices; ran structured code reviews, pair programming, and mentorship plans, elevating test quality with test automation, refactoring strategies, and consistent CI/CD enforcement.
        </p>,
        <p>
          Partnered cross-functionally with Product, Design, and customer-facing teams to scope requirements, prototype high-risk components, and deliver a major platform release to completion with clear milestones and predictable delivery.
        </p>
      ],
    },
    {
      company: "DroneDeploy",
      role: "MERN Developer and Software Engineer",
      location: "San Francisco, CA",
      date: "Oct 2016 - Feb 2020",
      link: "#",
      description: [
        <p>
          Contributed to the full stack delivery of cloud-based reality capture, drone mapping, and geospatial analytics software used by customers in construction, agriculture, energy, and inspection workflows. The platform enabled automated flight planning, aerial data processing, and visual data insights by transforming raw drone imagery into 2D maps and 3D models for operational decision-making.
        </p>,
        <p>
          Implemented scalable frontend features in React to support interactive viewing, annotation, and collaboration on geospatial maps and 3D site models, enhancing usability for inspection, progress tracking, and project documentation.
        </p>,
        <p>
          Built backend services with Node.js and Express, implementing RESTful APIs for map processing, imagery uploads, and user-centric workflows across survey, construction, and monitoring use cases.
        </p>,
        <p>
          Led database architecture enhancement and query optimization, improving performance for large-scale geospatial datasets and supporting collaborative storage and retrieval of high-resolution maps and models.
        </p>,
        <p>
          Integrated cloud processing workflows to transform drone-captured aerial imagery into orthomosaics, digital elevation models, and analytics-ready geospatial outputs used for earthwork measurement, crop analysis, and site documentation.
        </p>,
        <p>
          Implemented reverse proxy and traffic routing configurations using NGINX to improve system isolation and operational resilience across distributed cloud environments.
        </p>,
        <p>
          Designed secure authentication and OAuth-based identity flows for enterprise customers, ensuring safe access to mission data and map assets.
        </p>,
        <p>
          Partnered with DevOps to optimize AWS EC2, Auto Scaling Groups, and load balancing strategies for high availability and efficient processing workloads.
        </p>,
        <p>
          Communicated architectural decisions and technical trade-offs with cross-functional partners in product, design, and data science to balance usability with performance constraints.
        </p>
      ],
    },
    {
      company: "WLCM App Studio",
      role: "Frontend UI/UX Developer",
      location: "San Francisco, CA",
      date: "Oct 2013 - Oct 2016",
      link: "#",
      description: [
        <p>
          Built and shipped education platforms and analytics tools for early-stage SaaS products, supporting learning workflows, reporting, and performance dashboards from MVP to production.
        </p>,
        <p>
          Implemented component-driven frontend development using modular, reusable UI patterns with JavaScript (ES5/ES6), HTML5, and CSS3, delivering scalable student, teacher, and admin experiences.
        </p>,
        <p>
          Developed RESTful backend APIs with Node.js, Express.js, and PostgreSQL, implementing relational data models and business logic for course content, user activity, and reporting pipelines.
        </p>,
        <p>
          Created interactive data visualization modules using D3.js for educational reporting and performance dashboards used by internal teams and customers.
        </p>,
        <p>
          Applied Test-Driven Development (TDD) using Mocha/Chai to improve reliability of core modules and reduce regression risk during feature expansion.
        </p>,
        <p>
          Managed CI/CD processes with Jenkins, supporting automated builds and AWS deployments for consistent releases across environments.
        </p>,
        <p>
          Collaborated in Agile/Scrum teams, participating in sprint planning, backlog refinement, and iterative releases aligned with product goals.
        </p>
      ],
    },
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Work Experience
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full py-4 px-4 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5">
            <div className="flex flex-wrap justify-between items-center mr-2">
              <div className="flex flex-col items-start">
                <div className="text-base font-semibold md:text-lg">
                  {project.company}
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.role}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-gray-300 font-light text-sm">
                  {project.location}
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
            </div>
            <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
              {project.description.map((desc, index) => (
                <li
                  key={index}
                  className="list-disc mt-1 text-gray-100 md:text-base"
                >
                  {desc}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-start justify-start text-xs py-4">
              {project.domains
                ? project.domains.map((domain, index) => (
                  <span
                    key={index}
                    className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}
                  >
                    {domain}
                  </span>
                ))
                : null}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            University of California, Davis
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2009 - 2013</div>
          <div className=" text-sm md:text-base">Bachelor of Science (BS), Computer Science Engineering</div>
        </li>
      </ul>
      <div className="font-medium relative text-2xl mt-4 md:mt-4 mb-4 hidden">
        Certificate
        <div className="absolute pt-px bg-white mt-px top-full w-full ">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          I’m Benjamin, a Senior Software Engineer with 10+ years of experience designing and scaling secure, high-performance systems across healthcare (HIPAA-compliant platforms), fintech, and eCommerce domains. I specialize in React, Next.js, TypeScript, Node.js, PHP, and Python, with deep expertise in distributed systems, microservices, and cloud-native infrastructure.


        </li>
        <li className="list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          I lead end-to-end engineering—from system architecture and data modeling to deployment and optimization—building reliable, compliant platforms that support high transaction volumes while aligning technical strategy with business growth.
        </li>
        <li className="list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex justify-start items-center font-bold text-center">
        <div className="px-2 flex flex-wrap items-start mt-2">
          <img
            className="m-1"
            src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"
            alt="benjamin react"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=ffffff"
            alt="benjamin next.js"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white"
            alt="benjamin angular"
          />
          <img
            className=" m-1"
            src="https://img.shields.io/badge/Node.js-86BE00?style=flat&logo=node.js&logoColor=white"
            alt="benjamin svelte"
          />
          <img
            className=" m-1"
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"
            alt="benjamin remix"
          />
          <img
            className=" m-1"
            src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white"
            alt="benjamin web3"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Wordpress-21759B?style=flat&logo=wordpress&logoColor=white"
            alt="benjamin hardhat"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
            alt="benjamin react native"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white"
            alt="benjamin ionic framework"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white"
            alt="benjamin flutter"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white"
            alt="benjamin tailwind css"
          />
          <img
            src="https://img.shields.io/badge/MySQL-F79F17?style=flat&logo=mysql&logoColor=white"
            alt="benjamin node.js"
            className="m-1"
          />
          <img
            src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white"
            alt="benjamin express.js"
            className="m-1"
          />
          <img
            src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white"
            alt="benjamin jquery"
            className="m-1"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"
            alt="benjamin redux"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Python-FFD43B?style=flat&logo=python&logoColor=blue"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/VS_Code-0078D4?style=flat&logo=visual%20studio%20code&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Cursor-000000?style=flat&logo=cursor&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/v0-000000?style=flat&logo=v0&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Redux_Toolkit-593D88?style=flat&logo=redux&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/NextAuth-000000?style=flat&logo=nextdotjs&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwindcss&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Material_UI-0081CB?style=flat&logo=mui&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white"
            alt="benjamin docker"
          /><img
            className="m-1"
            src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/AWS_Lambda-FF9900?style=flat&logo=awslambda&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Amazon_S3-569A31?style=flat&logo=amazons3&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Azure-0078D4?style=flat&logo=microsoftazure&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/REST_API-02569B?style=flat&logo=fastapi&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Microservices-FF6C37?style=flat&logo=docker&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/WebSockets-010101?style=flat&logo=socketdotio&logoColor=white"
            alt="benjamin docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/CI/CD-2088FF?style=flat&logo=githubactions&logoColor=white"
            alt="benjamin docker"
          />
        </div>
      </div>
    </>
  );
}
function Projects() {
  const project_list = [
    {
      name: "KIN EXEC | Solar Financial Performance & Cost Intelligence Platform",
      date: "",
      link: "https://www.kinhome.com/",
      imgUrl: "./images/projects/kin-exec.webp",
      description: [
        <p>
          I designed and delivered a full-stack financial modeling and cost intelligence system that unified QuickBooks (actuals) with Quickbase and Turso (target/meta data) to power real-time profitability tracking.
        </p>,
        <p>
          I architected the PBA model and Profit & Loss modal, implementing complex cost formulas including Gross Margin, GA allocation, and Net Income logic with dynamic kW-based price-per-watt scenarios.
        </p>,
        <p>
          I built direct vs indirect cost segmentation across EPC and Sales operations, ensuring material, labor, fees, payroll, and marketing costs were correctly allocated per project and per monthly system size.
        </p>,
        <p>
          Additionally, I implemented advanced adjustments such as domestic content rebates, internal crew salary allocation logic, and tooltip-level financial breakdowns to provide precise, audit-ready financial visibility for operational decision-making.
        </p>,
      ],
      domains: [
        "svelte",
        "sveltekit",
        "turso",
        "quickbooks",
        "quickbase",
        "firebase auth",
        "railway",
        "charts.js"
      ],
    },
    {
      name: "SCRx | Healthcare Document Automation & Alert System",
      date: "",
      link: "https://scrx.org",
      imgUrl: "./images/projects/healthcare-center.webp",
      description: [
        <p>
          Designed and implemented a robust server-side ingestion pipeline to accept and parse incoming pharmacy claim PDF documents via integration with ZenDesk, leveraging Node.js and Express for scalable backend services.
        </p>,
        <p>
          Built a comprehensive OCR-driven analysis module using industry-grade libraries to extract structured data (e.g., drug names, dosages, prices) from semi-structured PDF attachments, enabling automated interpretation of claim content.
        </p>,
        <p>
          Expanded the system to support dynamic generation of multiple PDF report types, with schema-driven templates reflecting extracted claim metadata and business rules.
        </p>,
        <p>
          Engineered real-time alert capabilities to flag high-risk prescription scenarios (such as cost thresholds or dosage anomalies), with event publishing and notification workflows delivered through WebSocket and REST endpoints.
        </p>,
        <p>
          Developed a fully interactive administrative UI using React and Redux, allowing operational users to configure PDF parsing parameters, manage drug/dosage/cost data sets, and control automated rule logic.
        </p>,
        <p>
          Architected and delivered all required API endpoints and client-side integrations, orchestrating secure data flows between the front end, backend services, and database layer (MongoDB), and led comprehensive QA cycles including automated test suites and performance validation.
        </p>,
      ],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "zendesk",
        "ai",
        "node.js",
        "mongodb",
        "express.js"
      ],
    },
    {
      name: "VARSITY LEARNING",
      date: "",
      link: "https://varsitylearning.com",
      imgUrl: "./images/projects/varsity-learning.webp",
      description: [
        <p>
          Designed and delivered a full-stack, web-based Math LMS enabling online homework, automated grading, customizable assessments, and real-time progress tracking using Node.js, Express, PostgreSQL, and modular JavaScript front-end architecture.
        </p>,
        <p>
          Built a configurable gradebook, course calendar, and roster management system with granular due date controls, late submission logic, and analytics dashboards powered by RESTful APIs and relational data modeling.
        </p>,
        <p>
          Implemented interactive student analytics and reporting modules using D3.js, allowing instructors to monitor time-on-task, attempt frequency, and performance trends to support data-driven, individualized instruction.
        </p>,
        <p>
          Engineered a fully responsive, ADA-compliant platform optimized for tablets and desktops, integrating mathematical notation input, discussion forums, and scalable content templates while maintaining CI/CD pipelines and AWS-based deployments for reliable production delivery.d
        </p>,
      ],
      domains: [
        "node.js",
        "express.js",
        "d3.js",
        "mongodb",
        "html5",
        "css3",
      ],
    },
    {
      name: "DIOR Fashion | VR Shop",
      date: "",
      link: "#",
      imgUrl: "./images/projects/vr-shop.webp",
      description: [
        <p>
          Developed an immersive 3D ecommerce storefront that enabled customers to explore products in a web-based virtual environment, leveraging WebXR and interactive 3D models to elevate traditional online shopping into an engaging spatial experience.
        </p>,
        <p>
          Built a secure, full-featured payment integration using Stripe and PayPal APIs, seamlessly connecting checkout flows in the VR space with back-end order processing and real-time transaction validation.
        </p>,
        <p>
          Implemented rich product interactions and navigation using Three.js and React, allowing users to rotate, inspect, and engage with items before purchase while maintaining a performant, responsive user experience across devices.
        </p>,
        <p>
          Designed and deployed backend services with Node.js and MongoDB to manage user sessions, payment state, and order lifecycle, ensuring data integrity, consistency, and scalability for an enterprise-grade immersive retail platform.
        </p>,
      ],
      domains: [
        "react.js",
        "webgl",
        "three.js",
        "node.js",
        "express.js",
        "mongodb",
        "jwt",
        "stripe",
        "aws",
        "webxr"
      ],
    },
  ];

  const tag_colors = {
    "react.js": "blue-300",
    typescript: "yellow-300",
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    firebase: "red-300",
    html5: "pink-600",
    sass: "pink-400",
    scss: "pink-300",
    tensorflow: "yellow-600",
    django: "green-600",
    unity3D: "green-400",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
    "web3.js": "purple-300",
    webgl: "blue-600",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full flex flex-col lg:flex-row gap-2 py-3 px-3 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 ">
            <a
              className="w-full cursor-pointer"
              target="_blank"
              href={project.link}
              rel="noreferrer"
            >
              <img
                src={project.imgUrl}
                className="rounded"
                alt={project.name}
              />
            </a>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base font-semibold md:text-lg mr-2">
                    {project.name}
                  </div>
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
                {project.description.map((desc, index) => (
                  <li
                    key={index}
                    className="list-disc mt-2 text-gray-100 md:text-base"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-4">
                {project.domains
                  ? project.domains.map((domain, index) => (
                    <span
                      key={index}
                      className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}
                    >
                      {domain}
                    </span>
                  ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/PResume.pdf"
      title="benjamin liu resume"
      frameBorder="0"
    ></iframe>
  );
}
