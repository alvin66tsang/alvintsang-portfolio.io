import {
    faHome,
    faFolder,
    faFileWord,
    faFileCode,
    faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "@/components/ui/button";
import {ButtonGroup} from "@/components/ui/button-group";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

const MenuTool = () => {
    const elements = [
        {
            title: "Home",
            icon: faHome,
            link: "#home",
        },
        {
            title: "Skills",
            icon: faFileCode,
            link: "#skills",
        },
        {
            title: "Projects",
            icon: faFolder,
            link: "#projects",
        },
        {
            title: "Experiences",
            icon: faFileWord,
            link: "#experiences",
        },
        {
            title: "Contact",
            icon: faEnvelopeOpen,
            link: "#contact",
        },
    ];

    return (
        <header className="header inline-flex w-full p-4 justify-center fixed top-0 z-999 bg-background/20 backdrop-blur-sm">
            <ButtonGroup>
                {elements.map(({icon, title, link}, index) => {
                    return (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <a href={link}>
                                    <Button className="flex flex-col items-center h-fit w-fit p-2">
                                        <FontAwesomeIcon
                                            size="lg"
                                            icon={icon}
                                        />
                                    </Button>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                {title}
                            </TooltipContent>
                        </Tooltip>
                    );
                })}
            </ButtonGroup>
        </header>
    );
};

export default MenuTool;
