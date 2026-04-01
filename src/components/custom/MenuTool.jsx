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
            link: "/",
        },
        {
            title: "Skills",
            icon: faFileCode,
            link: "/",
        },
        {
            title: "Projects",
            icon: faFolder,
            link: "/",
        },
        {
            title: "Experiences",
            icon: faFileWord,
            link: "/",
        },
        {
            title: "Contact",
            icon: faEnvelopeOpen,
            link: "/",
        },
    ];

    return (
        <header className="header inline-flex w-full p-4 justify-center">
            <ButtonGroup>
                {elements.map(({icon, title}, index) => {
                    return (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Button className="flex flex-col items-center h-fit w-fit p-2">
                                    <FontAwesomeIcon size="lg" icon={icon} />
                                </Button>
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
