import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
    const connects = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/at0606/",
            icon: faLinkedin,
        },
        {
            name: "Github",
            link: "https://github.com/alvin66tsang",
            icon: faGithub,
        },
        {
            name: "Email",
            link: "mailto:alvin.ttt.97@gmail.com",
            icon: faEnvelope,
        },
    ];
    return (
        <section
            id="contact"
            className="text-center projects mt-32 px-8 w-full scroll-m-6"
        >
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <h3 className="text-md text-muted-foreground mt-4">
                Have a question or want to work together? Feel free to drop me a
                message. I'd love to hear from you!
            </h3>
            <Card className="bg-transparent mt-8 ring-0">
                <CardHeader>
                    <CardTitle>
                        <h3 className="font-bold text-lg">
                            Contact Information
                        </h3>
                    </CardTitle>
                </CardHeader>
                <CardContent className="contactBox flex flex-col gap-4 justify-center items-center">
                    <Alert className="max-w-md">
                        <FontAwesomeIcon icon={faAt} />
                        <AlertTitle>Email</AlertTitle>
                        <AlertDescription>
                            alvin.ttt.97@gmail.com
                        </AlertDescription>
                    </Alert>
                    <Alert className="max-w-md">
                        <FontAwesomeIcon icon={faPhone} />
                        <AlertTitle>Mobile</AlertTitle>
                        <AlertDescription>+1 (437) 268-3601</AlertDescription>
                    </Alert>
                    <Alert className="max-w-md">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <AlertTitle>Location</AlertTitle>
                        <AlertDescription>Oakville, ON</AlertDescription>
                    </Alert>
                </CardContent>
            </Card>
            <Card className="bg-transparent ring-0">
                <CardHeader>
                    <CardTitle>
                        <h3 className="font-bold">Connect with me</h3>
                    </CardTitle>
                </CardHeader>
                <CardContent className="contactBox flex flex-row gap-4 justify-center ">
                    {connects.map(({name, icon, link}, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <a href={link} target="_blank">
                                    <Button className="flex flex-col items-center h-fit w-fit p-2">
                                        <FontAwesomeIcon
                                            size="lg"
                                            icon={icon}
                                        />
                                    </Button>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                {name}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </CardContent>
            </Card>
        </section>
    );
};

export default Contact;
