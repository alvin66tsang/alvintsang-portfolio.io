import {
  VerticalTimeline
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { faAws, faShopify, faReact, faAngular, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import TimelineElement from "./TimelineElement";


const Timeline = () => {
  const experiences = [
    {
      id: 1,
      position: "AWS Solution Architecture - Associate",
      date: "In Progress",
      description:
        "Currently obtaining courses for the AWS Certified Solutions Architect - Associate certification.",
      company: "",
      location: "",
      icon: faAws,
      tech: [
        "AWS Architect"
      ]
    },
    {
      id: 2,
      position: "Web Developer",
      date: "JAN 2025 - Present",
      description:
        "Developed and maintained responsive Shopify storefronts by architecting custom UI components and integrating RESTful APIs to power dynamic, data-driven promotional campaigns for wheel products.",
      company: "OptionWheels",
      location: "Oakville, ON",
      icon: faShopify,
      tech: [
        "Shopify",
        "HTML",
        "CSS",
        "Liquid",
        "Restful APIs",
        "Java SpringBoot",
        "JPA Repository",
        "Maven",
        "MySQL"
      ]
    },
    {
      id: 3,
      position: "IT Technician",
      date: "DEC 2025 - APR 2026",
      description:
        "Optimized and maintained critical IT infrastructure for retail and corporate environments, providing comprehensive hardware and software support, system configurations, and efficient troubleshooting to ensure seamless operational continuity across all locations.",
      company: "QE Home",
      location: "Burnaby, BC",
      icon: faCode,
      tech: [
        "SQL Server",
        "Windows Server",
        "Apache HTTP Server"
      ]
    },
    {
      id: 4,
      position: "Full Stack Developer",
      date: "AUG 2022 - FEB 2023",
      description:
        "Developed a comprehensive Air Cargo Platform and a specialized clearance application as a Full-Stack Developer, collaborating with UI/UX designers and engineers to architect responsive frontends integrated with robust backend APIs.",
      company: "RichFame Internation Limited",
      location: "Hong Kong, Asia",
      icon: faReact,
      tech: [
        "React",
        "TypeScript",
        "Tailwind",
        "Ant Design",
        "Node.js",
        "Express",
        "MongoDB",
        "Github",
      ]
    },
    {
      id: 5,
      position: "Full Stack Developer",
      date: "MAY 2021 - AUG 2022",
      description:
        "Maintained and enhanced a robust HRMS with new client-facing features while collaborating with a cross-functional team to architect, develop, and unit-test a comprehensive property management system, covering everything from frontend UI to backend API integration.",
      company: "Flexsystem",
      location: "Hong Kong, Asia",
      icon: faAngular,
      tech: [
        "Angular",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "C#",
        "LinQ",
        "Restful APIs",
        "Entity Framework",
        "Kendo UI",
        "Docker",
        "BitBucket",
        "ISAM"
      ]
    },
    {
      id: 6,
      position: "Front End Developer",
      date: "FEB 2019 - APR 2021",
      description:
        "Maintained web platforms and enhance them by integrating CRM systems, building dynamic data visualization reports, and implementing automated marketing and workflow solutions",
      company: "AAS Education HK",
      location: "Hong Kong, Asia",
      icon: faHtml5,
      tech: [
          "Ruby on Rails",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap5",
          "AWS (EC2, CloudFront, S3, Route53, RDS)"
      ]
    },
  ];
  return (
    <VerticalTimeline>
      {experiences.map((props, index) => {
        return (
          <TimelineElement props={{ ...props }} key={index} />
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
