import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import aashk from "../..//assets/aashk.png";
// import aasmo from '../../aasets/aasmo.png';
import aichatbot from "../../assets/aichatbot.png";
import ess1 from "../../assets/ess1.jpg";
// import ess2 from '../../assets/ess2.jpg';
// import hrms from '../../assets/hrms.png';
import richfame from "../../assets/richfame.png";
import stripe_demo from "../../assets/stripe_demo.png";
import csv1 from "../../assets/csv1.png";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "AI Chatbot",
            description:
                "A modern, stateful AI assistant built with Python and LangChain that features persistent session memory for seamless, multi-turn conversations. The application integrates Streamlit for an interactive UI and utilizes secure Pydantic-based credential handling to allow users to safely connect their own API keys. It effectively demonstrates the practical implementation of LLM context retention and real-time session management.",
            image: aichatbot,
            link: "https://ai-chatbot-python-langchain-wryappenlxelhdpfuv7bg4.streamlit.app/",
            tech: ["OpenAI", "LangChain", "Streamlit", "Prompt Engineering"],
        },
        {
            id: 2,
            title: "Employee Self-Service (ESS)",
            description:
                "A Employee Self-Service (ESS) application streamlines organizational workflows by digitizing leave requests, real-time inquiries, and multi-level approval processes. Built with a modern Angular frontend and a C# backend, the system leverages RESTful APIs and LINQ to interface with a high-performance ISAM database. The result is a high-speed, reliable platform that eliminates manual HR overhead and ensures seamless data integrity for complex personnel management.",
            image: ess1,
            link: "https://www.flex.hk/",
            tech: ["Angular", "RxJs", "KendoUI", "C#", "LinQ", "ISAM"],
        },
        {
            id: 3,
            title: "Product Management System (PMS)",
            description:
                "A Product Management System (PMS) is a centralized hub designed for online retailers to seamlessly aggregate and synchronize product listings across multiple e-commerce platforms. Built with Node.js, React, and Ant Design, the platform features a unified dashboard that leverages MongoDB to handle high-volume data synchronization and inventory tracking. It simplifies multi-channel retail by providing a single point of truth for product updates, ensuring consistency and operational efficiency across various digital storefronts.",
            image: richfame,
            link: "https://richfame.hk/",
            tech: ["Node.js", "Express.js", "React", "Ant Design", "MongoDB", "Tailwind css"],
        },
        {
            id: 4,
            title: "Educational Consultancy Portal",
            description:
                "An education consultancy portal leverages WordPress and the Avada framework to deliver a highly visual, professional user experience for students exploring global study options. By integrating WP Grid Builder, the platform provides dynamic, filterable access to overseas academic news and institutional data, ensuring a streamlined inquiry process. The site effectively combines content management with interactive lead generation to support students throughout their international education journey.",
            image: aashk,
            link: "https://aas.com.hk",
            tech: ["WordPress", "Avada", "WP Grid Builder"],
        },
        {
            id: 5,
            title: "Sprint Boot Store with Stripe",
            description:
                "A sample project designed to demonstrate the integration of Spring Boot with the Stripe API. It provides a clear, end-to-end example of how to handle secure checkout flows, manage products, and process payments in a Java environment.",
            image: stripe_demo,
            link: "https://github.com/alvin66tsang/Store-Java-SpringBoot",
            tech: ["Java", "Spring Boot", "Stripe API", "Maven", "MySQL"],
        },
        {
            id: 6,
            title: "AI CSV Analyzer",
            description:
                "An intelligent data conversation tool that allows users to upload CSV files and interact with their data using natural language. This application uses LangChain, OpenAI, and Streamlit to generate text answers, data tables, and dynamic charts (Bar, Line, Scatter).",
            image: csv1,
            link: "https://ai-csv-analyzer-xcseasybuv24hc9xgmfmik.streamlit.app/",
            tech: ["Pandas", "OpenAI", "LangChain", "Streamlit"],
        },
    ];

    return (
        <section className="projects px-4 my-32 w-full">
            <h1 className="text-centertext-4xl font-bold">Projects</h1>
            <h3 className="text-centertext-2xl text-muted-foreground mt-4">
                My Current Work
            </h3>
            <div className="grid md:grid-cols-3 grid-cols-1 w-full my-12 gap-8 px-8">
                {projects.map(({id, title, description, image, link, tech}) => {
                    return (
                        <Card
                            className="relative mx-auto w-full pt-0 overflow-hidden"
                            key={id}
                        >
                            <img
                                src={image}
                                className="relative z-20 aspect-video w-full object-contain"
                            />
                            <CardHeader>
                                <CardTitle className="font-bold text-lg">
                                    {title}
                                </CardTitle>
                                <CardDescription className="flex flex-wrap gap-2 my-2">
                                    {tech.map((t) => (
                                        <Badge className="bg-foreground rounded-md">
                                            {t}
                                        </Badge>
                                    ))}
                                </CardDescription>
                                <CardDescription>{description}</CardDescription>
                            </CardHeader>
                            <CardFooter className="mt-auto">
                                <Button className="mx-auto" size="lg">
                                    <a href={link} target="_blank">
                                        View Project
                                    </a>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
