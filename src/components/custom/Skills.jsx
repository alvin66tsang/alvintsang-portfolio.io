import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

const Skills = () => {
    const skillCategories = [
        {
            title: "LANGUAGES",
            skills: [
                "JavaScript",
                "TypeScript",
                "Python",
                "C#",
                "Java",
                "HTML",
                "CSS",
                "SQL",
                "Liquid",
            ],
        },
        {
            title: "FRONTEND",
            skills: [
                "React",
                "Angular",
                "Responsive Design",
                "Tailwind CSS",
                "Streamlit",
            ],
        },
        {
            title: "BACKEND",
            skills: [
                "Node.js",
                "Express.js",
                "Java Spring Boot",
                "Flask",
                "RESTful APIs",
                "FastAPI",
                "LinQ",
            ],
        },
        {
            title: "DATABASES",
            skills: ["MySQL", "MongoDB", "Firebase", "ISAM"],
        },
        {
            title: "TOOLS",
            skills: [
                "AWS",
                "Docker",
                "Git",
                "BitBucket",
                "Postman",
                "Figma",
                "Jupyter",
                "Wordpress",
                "Shopify",
                "Maven",
            ],
        },
        {
            title: "FRAMEWORKS",
            skills: [
                "Zustand",
                "RxJS",
                "shadcn/ui",
                "Ant Design",
                "Vite",
                "Kendo UI",
                "JPA Repository",
            ],
        },
        {
            title: "AI & LLM ENGINEERING",
            skills: ["LangChain", "Prompt Engineering"],
        },
    ];
    return (
        <section className="projects my-32 w-full px-4">
            <h1 className="text-center text-4xl font-bold">Technical Skills</h1>
            <div className="my-4 px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
                {skillCategories.map(({title, skills}, index) => {
                    return (
                        <Card className="m-6 w-full max-w-sm bg-transparent" key={index}>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold underline underline-offset-4">
                                    {title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {skills.map((skill, idx) => {
                                    return (
                                        <Badge className="text-md p-4 rounded-md bg-transparent border-accent text-accent-foreground" key={idx}>
                                            {skill}
                                        </Badge>
                                    );
                                })}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
